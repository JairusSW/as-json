import { ClassDecorator, registerDecorator, } from "visitor-as/dist/decorator.js";
import { getName, toString } from "visitor-as/dist/utils.js";
import { SimpleParser } from "visitor-as/dist/index.js";
class AsJSONTransform extends ClassDecorator {
    constructor() {
        super(...arguments);
        this.sources = [];
        this.encodeStmts = [];
        this.decodeStmts = [];
        this.checkDecodeStmts = [];
    }
    visitMethodDeclaration() { }
    visitFieldDeclaration(node) {
        const lineText = toString(node);
        if (lineText.startsWith("private"))
            return;
        const name = getName(node);
        if (!node.type) {
            throw new Error(`Field ${name} is missing a type declaration`);
        }
        console.log(node);
        let type = getName(node.type);
        // @ts-ignore
        this.encodeStmts.push(`"${name}":\${JSON.stringify<${type}>(this.${name})},`);
        // @ts-ignore
        this.decodeStmts.push(`${name}: JSON.parseObjectValue<${type}>(values.get("${name}")),\n`);
        // @ts-ignore
        this.checkDecodeStmts.push(` if (!values.has("${name}")) throw new Error("Key "${name}" was not found. Cannot instantiate object.");\n`);
    }
    visitClassDeclaration(node) {
        if (!node.members) {
            return;
        }
        this.currentClass = node;
        const name = getName(node);
        this.visit(node.members);
        const serializedProp = `__JSON_Serialized: string = "";`;
        let serializeFunc = ``;
        if (this.encodeStmts.length > 0) {
            const stmt = this.encodeStmts[this.encodeStmts.length - 1];
            this.encodeStmts[this.encodeStmts.length - 1] = stmt.slice(0, stmt.length - 1);
            serializeFunc = `
      @inline
      __JSON_Serialize(): string {
        return \`{${this.encodeStmts.join("")}}\`;
      }
      `;
        }
        else {
            serializeFunc = `
      @inline
      __JSON_Serialize(): string {
        return "{}";
      }
      `;
        }
        const deserializeFunc = `
    @inline
    __JSON_Deserialize<T>(values: Map<string, string>): T {
        ${process.argv.includes("--debugJSON") ? this.checkDecodeStmts.join("else") : ""}
        return {
          ${
        // @ts-ignore
        this.decodeStmts.join("")}
        }
    }
    `;
        console.log(deserializeFunc, serializeFunc);
        this.encodeStmts = [];
        this.decodeStmts = [];
        const serializedProperty = SimpleParser.parseClassMember(serializedProp, node);
        node.members.push(serializedProperty);
        const serializeMethod = SimpleParser.parseClassMember(serializeFunc, node);
        node.members.push(serializeMethod);
        const deserializeMethod = SimpleParser.parseClassMember(deserializeFunc, node);
        node.members.push(deserializeMethod);
    }
    get name() {
        return "json";
    }
}
export default registerDecorator(new AsJSONTransform());
