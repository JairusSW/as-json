import { FieldDeclaration, Parser, Source, Tokenizer, } from "assemblyscript/dist/assemblyscript.js";
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
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        if (!((_c = node.decorators) === null || _c === void 0 ? void 0 : _c.length))
            return;
        if (!((_d = node.members) === null || _d === void 0 ? void 0 : _d.length))
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
        for (const member of node.members) {
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
            const mem = new Property();
            mem.name = name.text;
            mem.type = type;
            mem.value = value;
            for (const decorator of member.decorators || []) {
                if (decorator.name.text == "alias") {
                    if (!((_e = decorator.args) === null || _e === void 0 ? void 0 : _e.length))
                        throw new Error("Expected 1 argument but got zero at @alias in " + node.range.source.normalizedPath);
                    mem.flag = PropertyFlags.Alias;
                    mem.alias = decorator.args[0].value;
                }
                else if (decorator.name.text == "omit") {
                    mem.flag = PropertyFlags.Omit;
                }
                else if (decorator.name.text == "omitnull") {
                    mem.flag = PropertyFlags.OmitNull;
                }
                else if (decorator.name.text == "omitif") {
                    if (!((_f = decorator.args) === null || _f === void 0 ? void 0 : _f.length))
                        throw new Error("Expected 1 argument but got zero at @omitif in " + node.range.source.normalizedPath);
                    (_g = mem.args) === null || _g === void 0 ? void 0 : _g.push(decorator.args[0].value);
                    mem.flag = PropertyFlags.OmitIf;
                }
            }
            if (mem.flag === PropertyFlags.Alias) {
                mem.name = mem.alias;
            }
            else if (mem.flag === PropertyFlags.None) {
                mem.serialize = encodeKey(name.text) + ":${__SERIALIZE<" + type + ">(this." + name.text + ")}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
            }
            if (mem.flag == PropertyFlags.OmitNull) {
                mem.serialize = "${changetype<usize>(this." + mem.name + ") == <usize>0" + " ? \"\" : '" + encodeKey(name.text) + ":' + __SERIALIZE<" + type + ">(this." + name.text + ") + \",\"}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
            }
            else if (mem.flag == PropertyFlags.OmitIf) {
                mem.serialize = "${" + mem.args[0] + " ? \"\" : '" + encodeKey(name.text) + ":' + __SERIALIZE<" + type + ">(this." + name.text + ")}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
            }
            else if (mem.flag == PropertyFlags.Alias) {
                mem.serialize = encodeKey(name.text) + ":${__SERIALIZE<" + type + ">(this." + name.text + ")}";
                mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));";
                mem.name = name.text;
            }
            if (mem.value)
                mem.initialize = "this." + name.text + " = " + mem.value;
            schema.members.push(mem);
        }
        if (node.extendsType) {
            schema.parent = this.schemasList.find((v) => { var _c; return v.name == ((_c = node.extendsType) === null || _c === void 0 ? void 0 : _c.name.identifier.text); });
            if ((_h = schema.parent) === null || _h === void 0 ? void 0 : _h.members) {
                for (let i = 0; i < schema.parent.members.length; i++) {
                    const replace = schema.members.find((v) => { var _c, _d; return v.name == ((_d = (_c = schema.parent) === null || _c === void 0 ? void 0 : _c.members[i]) === null || _d === void 0 ? void 0 : _d.name); });
                    if (!replace)
                        schema.members.unshift(schema.parent.members[i]);
                }
            }
        }
        let SERIALIZE_RAW = "@inline __SERIALIZE(): string {\n  let out = `{";
        let SERIALIZE_PRETTY = "@inline __SERIALIZE_PRETTY(): string {\n  let out = `{";
        let INITIALIZE = "@inline __INITIALIZE(): this {\n";
        let DESERIALIZE = "@inline __DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  const len = key_end - key_start;\n";
        let indent = "  ";
        if (!schema.members.length)
            return;
        found = false;
        if (((_j = schema.members[0]) === null || _j === void 0 ? void 0 : _j.flag) === PropertyFlags.OmitNull
            || ((_k = schema.members[0]) === null || _k === void 0 ? void 0 : _k.flag) === PropertyFlags.OmitIf) {
            SERIALIZE_RAW += (_l = schema.members[0]) === null || _l === void 0 ? void 0 : _l.serialize;
            SERIALIZE_PRETTY += "\\n" + ((_m = schema.members[0]) === null || _m === void 0 ? void 0 : _m.serialize);
        }
        else {
            SERIALIZE_RAW += ((_o = schema.members[0]) === null || _o === void 0 ? void 0 : _o.serialize) + ",";
            SERIALIZE_PRETTY += "\\n" + ((_p = schema.members[0]) === null || _p === void 0 ? void 0 : _p.serialize) + ",\\n";
            found = true;
        }
        if ((_q = schema.members[0]) === null || _q === void 0 ? void 0 : _q.initialize)
            INITIALIZE += "  " + ((_r = schema.members[0]) === null || _r === void 0 ? void 0 : _r.initialize) + ";\n";
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
        len = (_s = _sorted[0]) === null || _s === void 0 ? void 0 : _s.name.length;
        for (let i = 1; i < _sorted.length; i++) {
            const member = _sorted[i];
            if (len < member.name.length) {
                sortedMembers.push([member]);
                offset++;
            }
            else {
                sortedMembers[offset].push(member);
            }
        }
        let first = true;
        for (const memberSet of sortedMembers) {
            if (memberSet[0].name.length === 1) {
                if (first) {
                    DESERIALIZE += "  if (len === 1) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "  if (len === 1) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
                }
            }
            else if (memberSet[0].name.length === 2) {
                if (first) {
                    DESERIALIZE += "  if (len === 2) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
                    first = false;
                }
                else {
                    DESERIALIZE += "  if (len === 2) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
                }
            }
            for (let i = 0; i < memberSet.length; i++) {
                const member = memberSet[i];
                if (member.name.length === 1) {
                    DESERIALIZE += `      case ${member.name.charCodeAt(0)}: {\n        ${member.deserialize}\n        return true;\n      }\n`;
                }
                else if (member.name.length === 2) {
                    DESERIALIZE += `      case ${charCodeAt32(member.name, 0)}: {\n        ${member.deserialize}\n        return true;\n      }\n`;
                }
                else {
                    DESERIALIZE += `    if (memory.compare(changetype<usize>(data) + (key_start << 1), changetype<usize>("${member.name}"), ${member.name.length << 1})) {\n      ${member.deserialize}\n      return true;\n    }\n`;
                }
            }
            if (memberSet[0].name.length < 3) {
                DESERIALIZE += `      default: {\n        return false;\n      }\n`;
            }
            else {
                DESERIALIZE += ` else {\n        return false;\n      }\n`;
            }
            DESERIALIZE += "    } ";
        }
        DESERIALIZE += "\n  }\n  return false;\n}";
        console.log(sortedMembers);
        console.log(SERIALIZE_RAW);
        console.log(SERIALIZE_PRETTY);
        console.log(INITIALIZE);
        console.log(DESERIALIZE);
        const SERIALIZE_RAW_METHOD = SimpleParser.parseClassMember(SERIALIZE_RAW, node);
        //const SERIALIZE_PRETTY_METHOD = SimpleParser.parseClassMember(SERIALIZE_PRETTY, node);
        const INITIALIZE_METHOD = SimpleParser.parseClassMember(INITIALIZE, node);
        const DESERIALIZE_METHOD = SimpleParser.parseClassMember(DESERIALIZE, node);
        node.members.push(SERIALIZE_RAW_METHOD, INITIALIZE_METHOD, DESERIALIZE_METHOD);
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
        const txt = 'import { Virtual as __Virtual } from "as-virtual/assembly";';
        const tokenizer = new Tokenizer(new Source(0 /* SourceKind.User */, node.normalizedPath, txt));
        const parser = new Parser();
        parser.currentSource = tokenizer.source;
        const stmt = parser.parseTopLevelStatement(tokenizer);
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
                const parent = schemas.find((v) => { var _c; return v.name === ((_c = schema.parent) === null || _c === void 0 ? void 0 : _c.name); });
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
