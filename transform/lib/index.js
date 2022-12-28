import { getName, toString } from "visitor-as/dist/utils.js";
import { BaseVisitor, SimpleParser } from "visitor-as/dist/index.js";
import { Transform } from "assemblyscript/dist/transform.js";
class SchemaData {
    constructor() {
        this.keys = [];
        this.values = [];
        this.types = [];
        this.name = "";
        this.parent = "";
        this.encodeStmts = [];
        this.setDataStmts = [];
    }
}
class AsJSONTransform extends BaseVisitor {
    constructor() {
        super(...arguments);
        this.schemasList = [];
        this.sources = [];
    }
    visitMethodDeclaration() { }
    visitFieldDeclaration(node) {
        if (toString(node).startsWith("static"))
            return;
        const lineText = toString(node);
        if (lineText.startsWith("private"))
            return;
        const name = getName(node);
        if (!node.type) {
            throw new Error(`Field ${name} is missing a type declaration`);
        }
        let type = getName(node.type);
        // @ts-ignore
        this.currentClass.encodeStmts.push(`"${name}":\${JSON.stringify<${type}>(this.${name})},`);
        // @ts-ignore
        //this.decodeStmts.push(
        //   `${name}: JSON.parseObjectValue<${type}>(values.get("${name}")),\n`
        //);
        // @ts-ignore
        this.currentClass.setDataStmts.push(`if (key.length === ${name.length} && (memory.compare(changetype<usize>("${name}"), changetype<usize>(key), ${name.length}) == 0)) {
        this.${name} = JSON.parseObjectValue<${type}>(value);
        return;
      }
      `);
        // @ts-ignore
        //this.checkDecodeStmts.push(
        //  ' if (!values.has("${name}")) throw new Error("Key "${name}" was not found. Cannot instantiate object.");\n'
        //);
    }
    visitClassDeclaration(node) {
        var _a, _b, _c, _d;
        let foundDecorator = false;
        for (const decorator of node.decorators) {
            // @ts-ignore
            if (decorator.name.text.toLowerCase() == "json" || decorator.name.text.toLowerCase() == "serializable")
                foundDecorator = true;
        }
        if (!foundDecorator)
            return;
        if (!node.members) {
            return;
        }
        // Prevent from being triggered twice
        for (const member of node.members) {
            if (member.name.text == "__JSON_Serialize")
                return;
        }
        this.currentClass = {
            name: toString(node.name),
            keys: [],
            values: [],
            types: [],
            parent: node.extendsType ? toString(node.extendsType) : "",
            node: node,
            encodeStmts: [],
            setDataStmts: []
        };
        if (this.currentClass.parent.length > 0) {
            const parentSchema = this.schemasList.map((v) => {
                if (v.name == this.currentClass.parent) {
                    return v;
                }
            });
            if (parentSchema.length > 0 && ((_a = parentSchema[0]) === null || _a === void 0 ? void 0 : _a.encodeStmts)) {
                (_b = parentSchema[0]) === null || _b === void 0 ? void 0 : _b.encodeStmts.push(((_c = parentSchema[0]) === null || _c === void 0 ? void 0 : _c.encodeStmts.pop()) + ",");
                this.currentClass.encodeStmts.push(...(_d = parentSchema[0]) === null || _d === void 0 ? void 0 : _d.encodeStmts);
            }
            else {
                //console.log("Class extends " + this.currentClass.parent + ", but parent class not found. Maybe add the @json decorator over parent class?")
            }
        }
        this.visit(node.members);
        // const serializedProp = '__JSON_Serialized: string = "";';
        let serializeFunc = "";
        if (this.currentClass.encodeStmts.length > 0) {
            const stmt = this.currentClass.encodeStmts[this.currentClass.encodeStmts.length - 1];
            this.currentClass.encodeStmts[this.currentClass.encodeStmts.length - 1] = stmt.slice(0, stmt.length - 1);
            serializeFunc = `
      __JSON_Serialize(): string {
        return \`{${this.currentClass.encodeStmts.join("")}}\`;
      }
      `;
        }
        else {
            serializeFunc = `
      __JSON_Serialize(): string {
        return "{}";
      }
      `;
        }
        const setKeyFunc = `
      __JSON_Set_Key(key: string, value: string): void {
        ${
        // @ts-ignore
        this.currentClass.setDataStmts.join("")}
      }
    `;
        //console.log(serializeFunc, setKeyFunc)
        const serializeMethod = SimpleParser.parseClassMember(serializeFunc, node);
        node.members.push(serializeMethod);
        const setDataMethod = SimpleParser.parseClassMember(setKeyFunc, node);
        node.members.push(setDataMethod);
        this.schemasList.push(this.currentClass);
    }
    visitSource(node) {
        super.visitSource(node);
    }
}
export default class Transformer extends Transform {
    // Trigger the transform after parse.
    afterParse(parser) {
        // Create new transform
        const transformer = new AsJSONTransform();
        // Loop over every source
        for (const source of parser.sources) {
            // Ignore all lib (std lib). Visit everything else.
            if (!source.isLibrary && !source.internalPath.startsWith(`~lib/`)) {
                transformer.visit(source);
            }
        }
    }
}
;
