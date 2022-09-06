import { ClassDecorator, registerDecorator } from "visitor-as/dist/decorator.js";
import { getName } from "visitor-as/dist/utils.js";
import { SimpleParser } from "visitor-as/dist/index.js";
class AsJSONTransform extends ClassDecorator {
    constructor() {
        super(...arguments);
        this.sources = [];
        this.encodeStmts = new Map();
        this.decodeCode = new Map();
    }
    visitMethodDeclaration(node) { }
    visitFieldDeclaration(node) {
        const name = getName(node);
        if (!node.type) {
            throw new Error(`Field ${name} is missing a type declaration`);
        }
        const type = getName(node.type);
        const className = this.currentClass.name.text;
        if (!this.encodeStmts.has(className))
            this.encodeStmts.set(className, []);
        if (!this.decodeCode.has(className))
            this.decodeCode.set(className, []);
        // @ts-ignore
        this.encodeStmts.get(className).push(`this.__JSON_Serialized += '' + '"' + '${name}' + '"' + ':' + JSON.stringify<${type}>(this.${name}) + ',';`);
        // @ts-ignore
        this.decodeCode.get(className).push(`${name}: JSON.parse<${type}>(values.get("${name}")),\n`);
    }
    visitClassDeclaration(node) {
        if (!node.members) {
            return;
        }
        this.currentClass = node;
        const name = getName(node);
        this.encodeStmts.delete(name);
        this.decodeCode.delete(name);
        this.visit(node.members);
        const serializedProp = `__JSON_Serialized: string = "";`;
        let serializeFunc = ``;
        if (this.encodeStmts.has(name) && this.encodeStmts.get(name)) {
            serializeFunc = `
      @inline
      __JSON_Serialize(): string {
        if (!this.__JSON_Serialized) {
          ${ // @ts-ignore
            this.encodeStmts.get(name).join("\n")};
          this.__JSON_Serialized = "{" + this.__JSON_Serialized.slice(0, this.__JSON_Serialized.length - 1) + "}";
        }
        return this.__JSON_Serialized;
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
    __JSON_Deserialize(values: Map<string, string>): ${name} {
        return {
          ${ // @ts-ignore
        this.decodeCode.get(name) ? this.decodeCode.get(name).join("") : ""}
        }
    }
    `;
        //console.log(serializedProp, serializeFunc, deserializeFunc)
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
