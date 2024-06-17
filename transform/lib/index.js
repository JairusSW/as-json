import { FieldDeclaration } from "assemblyscript/dist/assemblyscript.js";
import { toString, isStdlib } from "visitor-as/dist/utils.js";
import { BaseVisitor, SimpleParser } from "visitor-as/dist/index.js";
import { Transform } from "assemblyscript/dist/transform.js";
class JSONTransform extends BaseVisitor {
    constructor() {
        super(...arguments);
        this.schemasList = [];
        this.sources = new Set();
    }
    visitMethodDeclaration() { }
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
        const schema = new SchemaData();
        schema.node = node;
        schema.name = node.name.text;
        const members = [
            ...node.members.filter(v => v instanceof FieldDeclaration)
        ];
        if (node.extendsType) {
            schema.parent = this.schemasList.find((v) => v.name == node.extendsType?.name.identifier.text);
            if (schema.parent?.members) {
                for (let i = 0; i < schema.parent.members.length; i++) {
                    const replace = schema.members.find((v) => v.name == schema.parent?.members[i]?.name);
                    if (!replace) {
                        schema.members.unshift(schema.parent.members[i]);
                    }
                }
            }
        }
        if (!members.length) {
            let SERIALIZE_RAW_EMPTY = "__SERIALIZE(): string {\n  return \"{}\";\n}";
            //let SERIALIZE_PRETTY_EMPTY = "__SERIALIZE_PRETTY(): string {\n  return \"{}\";\n}";
            let INITIALIZE_EMPTY = "__INITIALIZE(): this {\n  return this;\n}";
            let DESERIALIZE_EMPTY = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  return false;\n}";
            if (process.env["JSON_DEBUG"]) {
                console.log(SERIALIZE_RAW_EMPTY);
                //console.log(SERIALIZE_PRETTY_EMPTY);
                console.log(INITIALIZE_EMPTY);
                console.log(DESERIALIZE_EMPTY);
            }
            const SERIALIZE_RAW_METHOD_EMPTY = SimpleParser.parseClassMember(SERIALIZE_RAW_EMPTY, node);
            //const SERIALIZE_PRETTY_METHOD = SimpleParser.parseClassMember(SERIALIZE_PRETTY, node);
            const INITIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(INITIALIZE_EMPTY, node);
            const DESERIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(DESERIALIZE_EMPTY, node);
            if (!node.members.find(v => v.name.text == "__SERIALIZE"))
                node.members.push(SERIALIZE_RAW_METHOD_EMPTY);
            if (!node.members.find(v => v.name.text == "__INITIALIZE"))
                node.members.push(INITIALIZE_METHOD_EMPTY);
            if (!node.members.find(v => v.name.text == "__DESERIALIZE"))
                node.members.push(DESERIALIZE_METHOD_EMPTY);
            this.schemasList.push(schema);
        }
        for (const member of members) {
            if (!(member instanceof FieldDeclaration))
                continue;
            const name = member.name;
            if (!member.type) {
                throw new Error("Fields must be strongly typed! Found " + toString(member) + " at " + node.range.source.normalizedPath);
            }
            const type = toString(member.type);
            const value = member.initializer ? toString(member.initializer) : null;
            if (member.flags == 32 /* CommonFlags.Static */)
                continue;
            if (member.flags === 512 /* CommonFlags.Private */)
                continue;
            if (member.flags === 1024 /* CommonFlags.Protected */)
                continue;
            if (member.decorators && member.decorators.find((v) => v.name.text == "omit"))
                continue;
            const mem = new Property();
            mem.name = name.text;
            mem.type = type;
            mem.value = value;
            mem.node = member;
            if (member.decorators) {
                for (let i = 0; i < (member.decorators).length; i++) {
                    const decorator = member.decorators[i];
                    if (decorator.name.text == "alias") {
                        if (!decorator.args?.length)
                            throw new Error("Expected 1 argument but got zero at @alias in " + node.range.source.normalizedPath);
                        mem.flag = PropertyFlags.Alias;
                        mem.alias = decorator.args[0].value;
                    }
                    else if (decorator.name.text == "omitnull") {
                        mem.flag = PropertyFlags.OmitNull;
                    }
                    else if (decorator.name.text == "omitif") {
                        if (!decorator.args?.length)
                            throw new Error("Expected 1 argument but got zero at @omitif in " + node.range.source.normalizedPath);
                        mem.args?.push(decorator.args[0].value);
                        mem.flag = PropertyFlags.OmitIf;
                    }
                }
            }
            if (mem.flag === PropertyFlags.Alias) {
                mem.name = mem.alias;
            }
            else if (mem.flag === PropertyFlags.None) {
                mem.serialize = escapeString(JSON.stringify(mem.name)) + ":${__SERIALIZE<" + type + ">(this." + name.text + ")}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
            }
            if (mem.flag == PropertyFlags.OmitNull) {
                mem.serialize = "${changetype<usize>(this." + mem.name + ") == <usize>0" + " ? \"\" : '" + escapeString(JSON.stringify(mem.name)) + ":' + __SERIALIZE<" + type + ">(this." + name.text + ") + \",\"}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
            }
            else if (mem.flag == PropertyFlags.OmitIf) {
                mem.serialize = "${" + mem.args[0] + " ? \"\" : '" + escapeString(JSON.stringify(mem.name)) + ":' + __SERIALIZE<" + type + ">(this." + name.text + ") + \",\"}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
            }
            else if (mem.flag == PropertyFlags.Alias) {
                mem.serialize = escapeString(JSON.stringify(mem.name)) + ":${__SERIALIZE<" + type + ">(this." + name.text + ")}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
                mem.name = name.text;
            }
            const t = mem.node.type.name.identifier.text;
            if (this.schemasList.find(v => v.name == t)) {
                mem.initialize = "this." + name.text + " = changetype<nonnull<" + t + ">>(__new(offsetof<nonnull<" + t + ">>(), idof<nonnull<" + t + ">>()));\n  changetype<nonnull<" + t + ">>(this." + name.text + ").__INITIALIZE()";
            }
            else if (mem.value) {
                mem.initialize = "this." + name.text + " = " + mem.value;
            }
            schema.members.push(mem);
        }
        let SERIALIZE_RAW = "__SERIALIZE(): string {\n  let out = `{";
        let SERIALIZE_PRETTY = "__SERIALIZE_PRETTY(): string {\n  let out = `{";
        let INITIALIZE = "__INITIALIZE(): this {\n";
        let DESERIALIZE = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  const len = key_end - key_start;\n";
        let indent = "  ";
        if (!schema.members.length)
            return;
        found = false;
        if (schema.members[0]?.flag === PropertyFlags.OmitNull
            || schema.members[0]?.flag === PropertyFlags.OmitIf) {
            SERIALIZE_RAW += schema.members[0]?.serialize;
            SERIALIZE_PRETTY += "\\n" + schema.members[0]?.serialize;
        }
        else {
            SERIALIZE_RAW += schema.members[0]?.serialize + ",";
            SERIALIZE_PRETTY += "\\n" + schema.members[0]?.serialize + ",\\n";
            found = true;
        }
        if (schema.members[0]?.initialize)
            INITIALIZE += "  " + schema.members[0]?.initialize + ";\n";
        for (let i = 1; i < schema.members.length; i++) {
            const member = schema.members[i];
            if (member.initialize)
                INITIALIZE += "  " + member.initialize + ";\n";
            if (member.flag === PropertyFlags.OmitNull
                || member.flag === PropertyFlags.OmitIf) {
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
            SERIALIZE_RAW += "`;\n};";
            SERIALIZE_PRETTY += "`;\n};";
        }
        INITIALIZE += "  return this;\n}";
        const sortedMembers = [];
        const _sorted = schema.members.sort((a, b) => a.name.length - b.name.length);
        let len = 0;
        let offset = 0;
        sortedMembers.push([_sorted[0]]);
        len = _sorted[0]?.name.length;
        for (let i = 1; i < _sorted.length; i++) {
            const member = _sorted[i];
            if (member.alias?.length || member.name.length > len) {
                sortedMembers.push([member]);
                len = member.alias?.length || member.name.length;
                offset++;
            }
            else {
                sortedMembers[offset].push(member);
            }
        }
        let first = true;
        for (const memberSet of sortedMembers) {
            const firstMember = memberSet[0];
            const name = encodeKey(firstMember.alias || firstMember.name);
            if (name.length === 1) {
                if (first) {
                    DESERIALIZE += "  if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "else if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
                }
            }
            else if (name.length === 2) {
                if (first) {
                    DESERIALIZE += "  if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "else if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
                }
            }
            else if (name.length === 4) {
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
                    DESERIALIZE += "  if (" + name.length + " === len) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "else if (" + name.length + " === len) {\n";
                }
            }
            let f = true;
            for (let i = 0; i < memberSet.length; i++) {
                const member = memberSet[i];
                const name = encodeKey(member.alias || member.name);
                if (name.length === 1) {
                    DESERIALIZE += `      case ${name.charCodeAt(0)}: {\n        ${member.deserialize}\n        return true;\n      }\n`;
                }
                else if (name.length === 2) {
                    DESERIALIZE += `      case ${charCodeAt32(name, 0)}: {\n        ${member.deserialize}\n        return true;\n      }\n`;
                }
                else if (name.length === 4) {
                    if (f) {
                        f = false;
                        DESERIALIZE += `    if (${charCodeAt64(name, 0)} === code) {\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                    else {
                        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + `else if (${charCodeAt64(name, 0)} === code) {\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                }
                else {
                    if (f) {
                        f = false;
                        DESERIALIZE += `    if (0 == memory.compare(changetype<usize>("${escapeQuote(escapeSlash(name))}"), changetype<usize>(data) + (key_start << 1), ${name.length << 1})) {\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                    else {
                        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else if (0 == memory.compare(changetype<usize>("${escapeQuote(escapeSlash(name))}"), changetype<usize>(data) + (key_start << 1), ${name.length << 1})) {\n      ${member.deserialize}\n      return true;\n    }\n`;
                    }
                }
            }
            if (name.length < 3) {
                DESERIALIZE += `      default: {\n        return false;\n      }\n    }\n`;
            }
            else if (name.length == 4) {
                DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`;
            }
            else {
                DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`;
            }
            DESERIALIZE += "  } ";
        }
        DESERIALIZE += "\n  return false;\n}";
        //console.log(sortedMembers);
        if (process.env["JSON_DEBUG"]) {
            console.log(SERIALIZE_RAW);
            //console.log(SERIALIZE_PRETTY);
            console.log(INITIALIZE);
            console.log(DESERIALIZE);
        }
        const SERIALIZE_RAW_METHOD = SimpleParser.parseClassMember(SERIALIZE_RAW, node);
        //const SERIALIZE_PRETTY_METHOD = SimpleParser.parseClassMember(SERIALIZE_PRETTY, node);
        const INITIALIZE_METHOD = SimpleParser.parseClassMember(INITIALIZE, node);
        const DESERIALIZE_METHOD = SimpleParser.parseClassMember(DESERIALIZE, node);
        if (!node.members.find(v => v.name.text == "__SERIALIZE"))
            node.members.push(SERIALIZE_RAW_METHOD);
        if (!node.members.find(v => v.name.text == "__INITIALIZE"))
            node.members.push(INITIALIZE_METHOD);
        if (!node.members.find(v => v.name.text == "__DESERIALIZE"))
            node.members.push(DESERIALIZE_METHOD);
        this.schemasList.push(schema);
    }
    visitSource(node) {
        super.visitSource(node);
        // Only add the import statement to sources that have JSON decorated classes.
        if (!this.sources.has(node)) {
            return;
        }
    }
}
export default class Transformer extends Transform {
    // Trigger the transform after parse.
    afterParse(parser) {
        // Create new transform
        const transformer = new JSONTransform();
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
                const parent = schemas.find((v) => v.name === schema.parent?.name);
                if (!parent)
                    throw new Error(`Class ${schema.name} extends its parent class ${schema.parent}, but ${schema.parent} does not include a @json or @serializable decorator! Add the decorator and rebuild.`);
            }
        }
    }
}
var PropertyFlags;
(function (PropertyFlags) {
    PropertyFlags[PropertyFlags["None"] = 0] = "None";
    PropertyFlags[PropertyFlags["Omit"] = 1] = "Omit";
    PropertyFlags[PropertyFlags["OmitNull"] = 2] = "OmitNull";
    PropertyFlags[PropertyFlags["OmitIf"] = 3] = "OmitIf";
    PropertyFlags[PropertyFlags["Alias"] = 4] = "Alias";
})(PropertyFlags || (PropertyFlags = {}));
class Property {
    constructor() {
        this.name = "";
        this.alias = null;
        this.type = "";
        this.value = null;
        this.flag = PropertyFlags.None;
        this.args = [];
        this.serialize = null;
        this.deserialize = null;
        this.initialize = null;
    }
}
class SchemaData {
    constructor() {
        this.name = "";
        this.members = [];
        this.parent = null;
    }
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
    return data.replace(/\\/g, "\\\\")
        .replace(/\`/g, '\\`');
}
function escapeSlash(data) {
    return data.replace(/\\/g, "\\\\")
        .replace(/\`/g, '\\`');
}
function escapeQuote(data) {
    return data.replace(/\"/g, "\\\"");
}
