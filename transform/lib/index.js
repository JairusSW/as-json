import { Parser, Source, Tokenizer, } from "assemblyscript/dist/assemblyscript.js";
import { toString, isStdlib } from "visitor-as/dist/utils.js";
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
        this.initializeStmts = [];
    }
}
class AsJSONTransform extends BaseVisitor {
    constructor() {
        super(...arguments);
        this.schemasList = [];
        this.sources = new Set();
    }
    visitMethodDeclaration() { }
    visitClassDeclaration(node) {
        var _c, _d;
        const className = node.name.text;
        if (!((_c = node.decorators) === null || _c === void 0 ? void 0 : _c.length))
            return;
        let foundDecorator = false;
        for (const decorator of node.decorators) {
            if (
            // @ts-ignore
            decorator.name.text.toLowerCase() == "json" ||
                // @ts-ignore
                decorator.name.text.toLowerCase() == "serializable")
                foundDecorator = true;
        }
        if (!foundDecorator)
            return;
        // Prevent from being triggered twice.
        for (const member of node.members) {
            if (member.name.text == "__JSON_Serialize")
                return;
        }
        this.currentClass = {
            name: className,
            keys: [],
            values: [],
            types: [],
            parent: node.extendsType ? toString(node.extendsType) : "",
            node: node,
            encodeStmts: [],
            setDataStmts: [],
            initializeStmts: []
        };
        if (this.currentClass.parent.length > 0) {
            const parentSchema = this.schemasList.find((v) => v.name == this.currentClass.parent);
            if (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.encodeStmts) {
                parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.encodeStmts.push((parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.encodeStmts.pop()) + ",");
                this.currentClass.encodeStmts.push(...parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.encodeStmts);
            }
        }
        const parentSchema = this.schemasList.find((v) => v.name == this.currentClass.parent);
        const members = [
            ...node.members,
            ...(parentSchema ? parentSchema.node.members : []),
        ];
        for (const mem of members) {
            // @ts-ignore
            if (mem.type && mem.type.name && mem.type.name.identifier.text) {
                const member = mem;
                const lineText = toString(member);
                //console.log("Member: " + lineText)
                if (!lineText.startsWith("private ") && !lineText.startsWith("static ")) {
                    // @ts-ignore
                    let type = toString(member.type);
                    const name = member.name.text;
                    let aliasName = name;
                    // @ts-ignore
                    if (member.decorators && ((_d = member.decorators[0]) === null || _d === void 0 ? void 0 : _d.name.text) === "alias") {
                        if (member.decorators[0] && member.decorators[0].args[0]) {
                            // @ts-ignore
                            aliasName = member.decorators[0].args[0].value;
                        }
                    }
                    this.currentClass.keys.push(name);
                    // @ts-ignore
                    this.currentClass.types.push(type);
                    // @ts-ignore
                    if ([
                        "u8",
                        "i8",
                        "u16",
                        "i16",
                        "u32",
                        "i32",
                        "u64",
                        "i64",
                    ].includes(type.toLowerCase())) {
                        this.currentClass.encodeStmts.push(`${encodeKey(aliasName)}:\${this.${name}},`);
                        // @ts-ignore
                        this.currentClass.setDataStmts.push(`if (key.equals(${JSON.stringify(aliasName)})) {
          this.${name} = __atoi_fast<${type}>(data, val_start << 1, val_end << 1);
          return;
        }`);
                        if (member.initializer) {
                            this.currentClass.initializeStmts.push(`this.${name} = ${toString(member.initializer)}`);
                        }
                    }
                    else // @ts-ignore
                     if ([
                        "f32",
                        "f64",
                    ].includes(type.toLowerCase())) {
                        this.currentClass.encodeStmts.push(`${encodeKey(aliasName)}:\${this.${name}},`);
                        // @ts-ignore
                        this.currentClass.setDataStmts.push(`if (key.equals(${JSON.stringify(aliasName)})) {
            this.${name} = __parseObjectValue<${type}>(data.slice(val_start, val_end), initializeDefaultValues);
            return;
          }`);
                        if (member.initializer) {
                            this.currentClass.initializeStmts.push(`this.${name} = ${toString(member.initializer)}`);
                        }
                    }
                    else {
                        this.currentClass.encodeStmts.push(`${encodeKey(aliasName)}:\${JSON.stringify<${type}>(this.${name})},`);
                        // @ts-ignore
                        this.currentClass.setDataStmts.push(`if (key.equals(${JSON.stringify(aliasName)})) {
            this.${name} = __parseObjectValue<${type}>(val_start ? data.slice(val_start, val_end) : data, initializeDefaultValues);
            return;
          }`);
                        if (member.initializer) {
                            this.currentClass.initializeStmts.push(`this.${name} = ${toString(member.initializer)}`);
                        }
                    }
                }
            }
        }
        let serializeFunc = "";
        if (this.currentClass.encodeStmts.length > 0) {
            const stmt = this.currentClass.encodeStmts[this.currentClass.encodeStmts.length - 1];
            this.currentClass.encodeStmts[this.currentClass.encodeStmts.length - 1] =
                stmt.slice(0, stmt.length - 1);
            serializeFunc = `
      __JSON_Serialize(): string {
        return \`{${this.currentClass.encodeStmts.join("")}}\`;
      }`;
        }
        else {
            serializeFunc = `
      __JSON_Serialize(): string {
        return "{}";
      }`;
        }
        const setKeyFunc = `
      __JSON_Set_Key(key: __Virtual<string>, data: string, val_start: i32, val_end: i32, initializeDefaultValues: boolean): void {
        ${this.currentClass.setDataStmts.join("\n        ")}
      }
    `;
        let initializeFunc = "";
        if (this.currentClass.initializeStmts.length > 0) {
            initializeFunc = `
      __JSON_Initialize(): void {
      ${this.currentClass.initializeStmts.join(";\n")};
      }
      `;
        }
        else {
            initializeFunc = `
      __JSON_Initialize(): void {}
      `;
        }
        const serializeMethod = SimpleParser.parseClassMember(serializeFunc, node);
        node.members.push(serializeMethod);
        const setDataMethod = SimpleParser.parseClassMember(setKeyFunc, node);
        node.members.push(setDataMethod);
        const initializeMethod = SimpleParser.parseClassMember(initializeFunc, node);
        node.members.push(initializeMethod);
        this.schemasList.push(this.currentClass);
        this.sources.add(node.name.range.source);
        // Uncomment to see the generated code for debugging.
        //console.log(serializeFunc);
        //console.log(setKeyFunc);
        //console.log(initializeFunc);
    }
    visitSource(node) {
        super.visitSource(node);
        // Only add the import statement to sources that have JSON decorated classes.
        if (!this.sources.has(node)) {
            return;
        }
        // Note, the following one liner would be easier, but it fails with an assertion error
        // because as-virtual's SimpleParser doesn't set the parser.currentSource correctly.
        //
        // const stmt = SimpleParser.parseTopLevelStatement('import { Virtual as __Virtual } from "as-virtual/assembly";');
        // ... So we have to do it the long way:
        const s = 'import { Virtual as __Virtual } from "as-virtual/assembly";';
        const t = new Tokenizer(new Source(0 /* SourceKind.User */, "index.ts", s));
        const p = new Parser();
        p.currentSource = t.source;
        const stmt = p.parseTopLevelStatement(t);
        // Add the import statement to the top of the source.
        node.statements.unshift(stmt);
    }
}
function encodeKey(aliasName) {
    return JSON.stringify(aliasName)
        .replace(/\\/g, "\\\\")
        .replace(/\`/g, '\\`');
}
export default class Transformer extends Transform {
    // Trigger the transform after parse.
    afterParse(parser) {
        // Create new transform
        const transformer = new AsJSONTransform();
        // Sort the sources so that user scripts are visited last
        const sources = parser.sources
            .filter((source) => !isStdlib(source))
            .sort((_a, _b) => {
            const a = _a.internalPath;
            const b = _b.internalPath;
            if (a[0] === "~" && b[0] !== "~") {
                return -1;
            }
            else if (a[0] !== "~" && b[0] === "~") {
                return 1;
            }
            else {
                return 0;
            }
        });
        // Loop over every source
        for (const source of sources) {
            // Ignore all lib and std. Visit everything else.
            if (!isStdlib(source)) {
                transformer.visit(source);
            }
        }
        // Check that every parent and child class is hooked up correctly
        const schemas = transformer.schemasList;
        for (const schema of schemas) {
            if (schema.parent) {
                const parent = schemas.find((v) => v.name === schema.parent);
                if (!parent)
                    throw new Error(`Class ${schema.name} extends its parent class ${schema.parent}, but ${schema.parent} does not include a @json or @serializable decorator! Add the decorator and rebuild.`);
            }
        }
    }
}
