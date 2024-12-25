import { IdentifierExpression, Source, StringLiteralExpression, IntegerLiteralExpression, FloatLiteralExpression, NullExpression, TrueExpression, FalseExpression, Node, Tokenizer } from "assemblyscript/dist/assemblyscript.js";
import { Transform } from "assemblyscript/dist/transform.js";
import { Visitor } from "./visitor.js";
import { SimpleParser, toString } from "./util.js";
import * as path from "path";
import { fileURLToPath } from "url";
class JSONTransform extends Visitor {
    parser;
    schemasList = [];
    schema;
    sources = new Set();
    imports = [];
    requiredImport = null;
    visitImportStatement(node) {
        super.visitImportStatement(node);
        const source = this.parser.sources.find(src => src.internalPath == node.internalPath);
        if (!source)
            return;
        let valid = false;
        for (const src of source.statements) {
            if (src.kind == 59) {
                const namespace = src;
                if (namespace.name.text == "JSON") {
                    valid = true;
                    break;
                }
            }
        }
        if (!valid)
            return;
        this.imports.push(node);
    }
    visitClassDeclaration(node) {
        if (!node.decorators?.length)
            return;
        let found = false;
        for (const decorator of node.decorators) {
            const name = decorator.name.text;
            if (name === "json" || name === "serializable") {
                found = true;
                break;
            }
        }
        if (!found)
            return;
        console.log(toString(node));
        this.schema = new SchemaData();
        this.schema.node = node;
        this.schema.name = node.name.text;
        const members = [...node.members.filter((v) => v.kind === 54)];
        if (node.extendsType) {
            this.schema.parent = this.schemasList.find((v) => v.name == node.extendsType?.name.identifier.text);
            if (this.schema.parent?.members) {
                for (let i = this.schema.parent.members.length - 1; i >= 0; i--) {
                    const replace = this.schema.members.find((v) => v.name == this.schema.parent?.members[i]?.name);
                    if (!replace) {
                        members.unshift(this.schema.parent?.members[i].node);
                    }
                }
            }
        }
        if (!members.length) {
            let SERIALIZE_RAW_EMPTY = '__SERIALIZE(ptr: usize = 0): string {\n  return "{}";\n}';
            let INITIALIZE_EMPTY = "__INITIALIZE(): this {\n  return this;\n}";
            let DESERIALIZE_EMPTY = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  return false;\n}";
            if (process.env["JSON_DEBUG"]) {
                console.log(SERIALIZE_RAW_EMPTY);
                console.log(INITIALIZE_EMPTY);
                console.log(DESERIALIZE_EMPTY);
            }
            const SERIALIZE_RAW_METHOD_EMPTY = SimpleParser.parseClassMember(SERIALIZE_RAW_EMPTY, node);
            const INITIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(INITIALIZE_EMPTY, node);
            const DESERIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(DESERIALIZE_EMPTY, node);
            if (!node.members.find((v) => v.name.text == "__SERIALIZE"))
                node.members.push(SERIALIZE_RAW_METHOD_EMPTY);
            if (!node.members.find((v) => v.name.text == "__INITIALIZE"))
                node.members.push(INITIALIZE_METHOD_EMPTY);
            if (!node.members.find((v) => v.name.text == "__DESERIALIZE"))
                node.members.push(DESERIALIZE_METHOD_EMPTY);
            this.schemasList.push(this.schema);
        }
        for (const _member of members) {
            if (_member.kind !== 54)
                continue;
            const member = _member;
            if (!member.type) {
                throw new Error("Fields must be strongly typed! Found " + toString(member) + " at " + node.range.source.normalizedPath);
            }
            if (member.flags == 32)
                continue;
            if (member.flags === 512)
                continue;
            if (member.flags === 1024)
                continue;
            const type = toString(member.type);
            const name = member.name;
            const value = member.initializer ? toString(member.initializer) : null;
            if (type.startsWith("(") && type.includes("=>"))
                continue;
            const mem = new Property();
            mem.name = name.text;
            mem.type = type;
            mem.value = value;
            mem.node = member;
            this.schema.members.push(mem);
            if (type.includes("JSON.Raw")) {
                mem.flags.set(PropertyFlags.JSON_Raw, []);
            }
            if (member.type.isNullable) {
                mem.flags.set(PropertyFlags.Null, []);
            }
            if (member.decorators) {
                for (const decorator of member.decorators) {
                    const decoratorName = decorator.name.text;
                    const args = getArgs(decorator.args);
                    switch (decoratorName) {
                        case "alias": {
                            if (!args.length)
                                throw new Error("Expected 1 argument but got zero at @alias in " + node.range.source.normalizedPath);
                            mem.alias = args[0];
                            mem.flags.set(PropertyFlags.Alias, args);
                            break;
                        }
                        case "omit": {
                            mem.flags.set(PropertyFlags.Omit, args);
                            break;
                        }
                        case "omitif": {
                            if (!decorator.args?.length)
                                throw new Error("Expected 1 argument but got zero at @omitif in " + node.range.source.normalizedPath);
                            mem.flags.set(PropertyFlags.OmitIf, args);
                            break;
                        }
                        case "omitnull": {
                            mem.flags.set(PropertyFlags.OmitNull, args);
                            break;
                        }
                    }
                }
            }
            mem.generate();
            if (this.schemasList.find((v) => v.name == type)) {
                mem.initialize = "this." + name.text + " = changetype<nonnull<" + mem.type + ">>(__new(offsetof<nonnull<" + mem.type + ">>(), idof<nonnull<" + mem.type + ">>()));\n  changetype<nonnull<" + mem.type + ">>(this." + name.text + ").__INITIALIZE()";
            }
            else if (mem.value) {
                mem.initialize = "this." + name.text + " = " + mem.value;
            }
            else if (type === "Map") {
                mem.initialize = "this." + name.text + " = new " + mem.type + "()";
            }
            else if (type === "string") {
                mem.initialize = "this." + name.text + ' = ""';
            }
            else if (type === "Array") {
                mem.initialize = "this." + name.text + " = instantiate<" + mem.type + ">()";
            }
            else if (type === "bool" || type === "boolean") {
                mem.initialize = "this." + name.text + " = false";
            }
            else if (type === "JSON.Raw") {
                mem.initialize = "this." + name.text + ' = ""';
            }
            else if (type === "u8" || type === "u16" || type === "u32" || type === "u64" || type === "i8" || type === "i16" || type === "i32" || type === "i64") {
                mem.initialize = "this." + name.text + " = 0";
            }
            else if (type === "f32" || type === "f64") {
                mem.initialize = "this." + name.text + " = 0.0";
            }
        }
        let SERIALIZE_RAW = "__SERIALIZE(ptr: usize = 0): string {\n  if (ptr == 0) ptr = changetype<usize>(this);\n  let out = `{";
        let SERIALIZE_PRETTY = "__SERIALIZE_PRETTY(): string {\n  let out = `{";
        let INITIALIZE = "__INITIALIZE(): this {\n";
        let DESERIALIZE = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  const len = key_end - key_start;\n";
        let indent = "  ";
        found = false;
        if (!this.imports.find(i => i.declarations.find(d => d.foreignName.text == "JSON"))) {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            let relativePath = path.relative(path.dirname(node.range.source.normalizedPath), path.resolve(__dirname, "../../assembly/index.ts"));
            if (!relativePath.startsWith(".") && !relativePath.startsWith("/"))
                relativePath = "./" + relativePath;
            const txt = "import { JSON } from \"" + relativePath + "\";";
            if (!this.requiredImport) {
                this.requiredImport = txt;
                if (process.env["JSON_DEBUG"])
                    console.log(txt + "\n");
            }
        }
        if (this.schema.members[0]?.flags.has(PropertyFlags.OmitNull) || this.schema.members[0]?.flags.has(PropertyFlags.OmitIf)) {
            SERIALIZE_RAW += this.schema.members[0]?.serialize;
            SERIALIZE_PRETTY += "\\n" + this.schema.members[0]?.serialize;
        }
        else {
            SERIALIZE_RAW += this.schema.members[0]?.serialize + ",";
            SERIALIZE_PRETTY += "\\n" + this.schema.members[0]?.serialize + ",\\n";
            found = true;
        }
        if (this.schema.members[0]?.initialize)
            INITIALIZE += "  " + this.schema.members[0]?.initialize + ";\n";
        for (let i = 1; i < this.schema.members.length; i++) {
            const member = this.schema.members[i];
            if (member.initialize)
                INITIALIZE += "  " + member.initialize + ";\n";
            if (member.flags.has(PropertyFlags.OmitNull) || member.flags.has(PropertyFlags.OmitIf)) {
                SERIALIZE_RAW += member.serialize;
                SERIALIZE_PRETTY += member.serialize;
            }
            else {
                SERIALIZE_RAW += member.serialize + ",";
                SERIALIZE_PRETTY += indent + member.serialize + ",\\n";
                found = true;
            }
        }
        if (found) {
            SERIALIZE_RAW += "`;\n  store<u16>(changetype<usize>(out) + ((out.length - 1) << 1), 125);\n  return out;\n}";
            SERIALIZE_PRETTY += "`;\n  store<u32>(changetype<usize>(out) + ((out.length - 2) << 1), 8192010);\n  return out;\n}";
        }
        else {
            SERIALIZE_RAW += "}`;\n  return out;\n}";
            SERIALIZE_PRETTY += "}`;\n  return out;\n}";
        }
        INITIALIZE += "  return this;\n}";
        const sortedMembers = [];
        const _sorted = this.schema.members.sort((a, b) => (a.alias?.length || a.name.length) - (b.alias?.length || b.name.length));
        let len = -1;
        let offset = -1;
        for (let i = 0; i < _sorted.length; i++) {
            const member = _sorted[i];
            const _name = member.alias || member.name;
            if (_name.length === len) {
                sortedMembers[offset]?.push(member);
            }
            else {
                sortedMembers.push([member]);
                len = _name.length;
                offset++;
            }
        }
        let first = true;
        for (const memberSet of sortedMembers) {
            const firstMember = memberSet[0];
            const _name = encodeKey(firstMember.alias || firstMember.name);
            if (_name.length === 1) {
                if (first) {
                    DESERIALIZE += "  if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "else if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
                }
            }
            else if (_name.length === 2) {
                if (first) {
                    DESERIALIZE += "  if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "else if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
                }
            }
            else if (_name.length === 4) {
                if (first) {
                    DESERIALIZE += "  if (4 === len) {\n    const code = load<u64>(changetype<usize>(data) + (key_start << 1));\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "else if (4 === len) {\n    const code = load<u64>(changetype<usize>(data) + (key_start << 1));\n";
                }
            }
            else {
                if (first) {
                    DESERIALIZE += "  if (" + _name.length + " === len) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "else if (" + _name.length + " === len) {\n";
                }
            }
            let f = true;
            for (let i = 0; i < memberSet.length; i++) {
                const member = memberSet[i];
                if (!member.deserialize)
                    continue;
                const _name = encodeKey(member.alias || member.name);
                if (_name.length === 1) {
                    DESERIALIZE += `      case ${_name.charCodeAt(0)}: { /* ${_name} */\n        ${member.deserialize}\n        return true;\n      }\n`;
                }
                else if (_name.length === 2) {
                    DESERIALIZE += `      case ${charCodeAt32(_name, 0)}: { /* ${_name} */\n        ${member.deserialize}\n        return true;\n      }\n`;
                }
                else if (_name.length === 4) {
                    if (f) {
                        f = false;
                        DESERIALIZE += `    if (${charCodeAt64(_name, 0)} === code) { /* ${_name} */\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                    else {
                        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + `else if (${charCodeAt64(_name, 0)} === code) {\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                }
                else {
                    if (f) {
                        f = false;
                        DESERIALIZE += `    if (0 === memory.compare(changetype<usize>("${escapeQuote(escapeSlash(_name))}"), changetype<usize>(data) + (key_start << 1), ${_name.length << 1})) { /* ${_name} */\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                    else {
                        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else if (0 === memory.compare(changetype<usize>("${escapeQuote(escapeSlash(_name))}"), changetype<usize>(data) + (key_start << 1), ${_name.length << 1})) { /* ${_name} */\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                }
            }
            if (_name.length < 3) {
                DESERIALIZE += `      default: {\n        return false;\n      }\n    }\n`;
            }
            else if (_name.length == 4) {
                DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`;
            }
            else {
                DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`;
            }
            DESERIALIZE += "  } ";
        }
        DESERIALIZE += "\n  return false;\n}";
        if (process.env["JSON_DEBUG"]) {
            console.log(SERIALIZE_RAW);
            console.log(INITIALIZE);
            console.log(DESERIALIZE);
        }
        const SERIALIZE_RAW_METHOD = SimpleParser.parseClassMember(SERIALIZE_RAW, node);
        const INITIALIZE_METHOD = SimpleParser.parseClassMember(INITIALIZE, node);
        const DESERIALIZE_METHOD = SimpleParser.parseClassMember(DESERIALIZE, node);
        if (!node.members.find((v) => v.name.text == "__SERIALIZE"))
            node.members.push(SERIALIZE_RAW_METHOD);
        if (!node.members.find((v) => v.name.text == "__INITIALIZE"))
            node.members.push(INITIALIZE_METHOD);
        if (!node.members.find((v) => v.name.text == "__DESERIALIZE"))
            node.members.push(DESERIALIZE_METHOD);
        super.visitClassDeclaration(node);
    }
    visitCallExpression(node, ref) {
        super.visitCallExpression(node, ref);
        if (!(node.expression.kind == 21 &&
            node.expression.property.text == "stringifyTo")
            &&
                !(node.expression.kind == 6 &&
                    node.expression.text == "stringifyTo"))
            return;
        const source = node.range.source;
        if (ref.kind == 9) {
            const newNode = Node.createBinaryExpression(101, node.args[1], node, node.range);
            ref.args[ref.args.indexOf(node)] = newNode;
            console.log(toString(ref));
        }
        else {
            const newNode = Node.createExpressionStatement(Node.createBinaryExpression(101, node.args[1], node, node.range));
            const nodeIndex = source.statements.findIndex((n) => {
                if (n == node)
                    return true;
                if (n.kind === 38 && n.expression == node)
                    return true;
                return false;
            });
            console.log("Index: " + nodeIndex);
            if (nodeIndex > 0)
                source.statements[nodeIndex] = newNode;
            console.log(toString(source), ref.kind);
        }
    }
    visitSource(node) {
        this.imports = [];
        super.visitSource(node);
    }
}
export default class Transformer extends Transform {
    afterParse(parser) {
        const transformer = new JSONTransform();
        const sources = parser.sources
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
        transformer.parser = parser;
        for (const source of sources) {
            transformer.imports = [];
            transformer.currentSource = source;
            transformer.visit(source);
            if (transformer.requiredImport) {
                const tokenizer = new Tokenizer(new Source(0, source.normalizedPath, transformer.requiredImport));
                parser.currentSource = tokenizer.source;
                source.statements.unshift(parser.parseTopLevelStatement(tokenizer));
                parser.currentSource = source;
                transformer.requiredImport = null;
            }
        }
        const schemas = transformer.schemasList;
        for (const schema of schemas) {
            if (schema.parent) {
                const parent = schemas.find((v) => v.name === schema.parent?.name);
                if (!parent)
                    throw new Error(`Class ${schema.name} extends its parent class ${schema.parent}, but ${schema.parent} does not include a @json or @serializable decorator! Add the decorator and rebuild.`);
            }
        }
    }
}
var PropertyFlags;
(function (PropertyFlags) {
    PropertyFlags[PropertyFlags["Null"] = 0] = "Null";
    PropertyFlags[PropertyFlags["Omit"] = 1] = "Omit";
    PropertyFlags[PropertyFlags["OmitNull"] = 2] = "OmitNull";
    PropertyFlags[PropertyFlags["OmitIf"] = 3] = "OmitIf";
    PropertyFlags[PropertyFlags["Alias"] = 4] = "Alias";
    PropertyFlags[PropertyFlags["JSON_Raw"] = 5] = "JSON_Raw";
})(PropertyFlags || (PropertyFlags = {}));
class Property {
    name = "";
    alias = null;
    type = "";
    value = null;
    flags = new Map();
    serialize = null;
    deserialize = null;
    initialize = null;
    node;
    right_s = "";
    right_d = "";
    generate() {
        const name = this.name;
        const escapedName = escapeString(JSON.stringify(this.alias || this.name));
        const type = this.type;
        if (this.flags.has(PropertyFlags.Omit))
            return;
        if (this.flags.has(PropertyFlags.JSON_Raw)) {
            if (this.flags.has(PropertyFlags.Null)) {
                this.right_s = "(load<" + type + '>(ptr, offsetof<this>("' + name + '")) || "null")';
                this.right_d = "value_start === value_end - 4 && 30399761348886638 === load<u64>(changetype<usize>(data) + (value_start << 1)) ? null : data.substring(value_start, value_end)";
            }
            else {
                this.right_s = "load<" + type + '>(ptr, offsetof<this>("' + name + '"))';
                this.right_d = "data.substring(value_start, value_end)";
            }
        }
        else {
            this.right_s = "JSON.stringify<" + type + ">(load<" + type + '>(ptr, offsetof<this>("' + name + '")))';
            this.right_d = "JSON.parse<" + type + ">(data.substring(value_start, value_end))";
        }
        if (this.flags.has(PropertyFlags.OmitIf)) {
            const condition = this.flags.get(PropertyFlags.OmitIf)[0];
            if (!condition)
                throw new Error("Could not find condition when using decorator @omitif! Provide at least one condition");
            this.serialize = "${" + condition + ' ? "" : \'' + escapedName + ":' + " + this.right_s + ' + ","}';
            this.deserialize = "this." + name + " = " + this.right_d + ";";
        }
        else if (this.flags.has(PropertyFlags.OmitNull)) {
            this.serialize = "${changetype<usize>(this." + name + ") == <usize>0" + ' ? "" : \'' + escapedName + ":' + " + this.right_s + ' + ","}';
            this.deserialize = "this." + name + " = " + this.right_d + ";";
        }
        else {
            this.serialize = escapedName + ":${" + this.right_s + "}";
            this.deserialize = "this." + name + " = " + this.right_d + ";";
        }
    }
}
class SchemaData {
    name = "";
    members = [];
    parent = null;
    node;
}
function charCodeAt32(data, offset) {
    return (data.charCodeAt(offset + 1) << 16) | data.charCodeAt(offset);
}
function charCodeAt64(data, offset) {
    if (offset + 3 >= data.length) {
        throw new Error("The string must have at least 4 characters from the specified offset.");
    }
    const firstCharCode = BigInt(data.charCodeAt(offset));
    const secondCharCode = BigInt(data.charCodeAt(offset + 1));
    const thirdCharCode = BigInt(data.charCodeAt(offset + 2));
    const fourthCharCode = BigInt(data.charCodeAt(offset + 3));
    const u64Value = (fourthCharCode << 48n) | (thirdCharCode << 32n) | (secondCharCode << 16n) | firstCharCode;
    return u64Value;
}
function encodeKey(key) {
    const data = JSON.stringify(key);
    return data.slice(1, data.length - 1);
}
function escapeString(data) {
    return data.replace(/\\/g, "\\\\").replace(/\`/g, "\\`");
}
function escapeSlash(data) {
    return data.replace(/\\/g, "\\\\").replace(/\`/g, "\\`");
}
function escapeQuote(data) {
    return data.replace(/\"/g, '\\"');
}
function getArgs(args) {
    if (!args)
        return [];
    let out = [];
    for (const arg of args) {
        if (arg instanceof StringLiteralExpression) {
            out.push(arg.value);
        }
        else if (arg instanceof IntegerLiteralExpression) {
            out.push(i64_to_string(arg.value));
        }
        else if (arg instanceof FloatLiteralExpression) {
            out.push(arg.value.toString());
        }
        else if (arg instanceof NullExpression) {
            out.push(arg.text);
        }
        else if (arg instanceof TrueExpression) {
            out.push(arg.text);
        }
        else if (arg instanceof FalseExpression) {
            out.push(arg.text);
        }
        else if (arg instanceof IdentifierExpression) {
            out.push(arg.text);
        }
    }
    return out;
}
//# sourceMappingURL=index.js.map