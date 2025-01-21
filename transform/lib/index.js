import { IdentifierExpression, Source, StringLiteralExpression, IntegerLiteralExpression, FloatLiteralExpression, NullExpression, TrueExpression, FalseExpression, Node, Tokenizer } from "assemblyscript/dist/assemblyscript.js";
import { Transform } from "assemblyscript/dist/transform.js";
import { Visitor } from "./visitor.js";
import { SimpleParser, toString } from "./util.js";
import * as path from "path";
import { fileURLToPath } from "url";
import { Property, PropertyFlags, Schema } from "./types.js";
import { getClasses, getImportedClass } from "./linker.js";
let indent = "  ";
class JSONTransform extends Visitor {
    parser;
    schemas = [];
    schema;
    sources = new Set();
    imports = [];
    jsonImport = null;
    bsImport = null;
    newStmts = { simd: [] };
    visitClassDeclaration(node) {
        if (!node.decorators?.length)
            return;
        if (!node.decorators.some((decorator) => {
            const name = decorator.name.text;
            return name === "json" || name === "serializable";
        }))
            return;
        this.schema = new Schema();
        this.schema.node = node;
        this.schema.name = node.name.text;
        this.schemas.push(this.schema);
        if (process.env["JSON_DEBUG"])
            console.log("Created schema: " + this.schema.name);
        const members = [...node.members.filter((v) => v.kind === 54 && v.flags !== 32 && v.flags !== 512 && v.flags !== 1024 && !v.decorators?.some((decorator) => decorator.name.text === "omit"))];
        if (node.extendsType) {
            const extendsName = node.extendsType?.name.identifier.text;
            this.schema.parent = this.schemas.find((v) => v.name == extendsName);
            if (!this.schema.parent) {
                const internalSearch = getClasses(node.range.source).find((v) => v.name.text == extendsName);
                if (internalSearch) {
                    if (process.env["JSON_DEBUG"])
                        console.log("Found " + extendsName + " internally");
                    this.visitClassDeclaration(internalSearch);
                    this.visitClassDeclaration(node);
                    return;
                }
                const externalSearch = getImportedClass(extendsName, node.range.source, this.parser);
                if (externalSearch) {
                    if (process.env["JSON_DEBUG"])
                        console.log("Found " + extendsName + " externally");
                    this.visitClassDeclaration(externalSearch);
                    this.visitClassDeclaration(node);
                    return;
                }
            }
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
            this.generateEmptyMethods(node);
            return;
        }
        this.addRequiredImports(node);
        for (const member of members) {
            if (!member.type)
                throwError("Fields must be strongly typed", node.range);
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
            mem.byteSize = sizeof(mem.type);
            this.schema.byteSize += mem.byteSize;
            if (type.includes("JSON.Raw"))
                mem.flags.set(PropertyFlags.Raw, null);
            if (member.decorators) {
                for (const decorator of member.decorators) {
                    const decoratorName = decorator.name.text.toLowerCase().trim();
                    switch (decoratorName) {
                        case "alias": {
                            const args = getArgs(decorator.args);
                            if (!args.length)
                                throwError("@alias must have an argument of type string or number", member.range);
                            mem.alias = args[0];
                            break;
                        }
                        case "omitif": {
                            let arg = decorator.args[0];
                            if (!decorator.args?.length)
                                throwError("@omitif must have an argument or callback that resolves to type bool", member.range);
                            mem.flags.set(PropertyFlags.OmitIf, arg);
                            this.schema.static = false;
                            break;
                        }
                        case "omitnull": {
                            if (isPrimitive(type)) {
                                throwError("@omitnull cannot be used on primitive types!", member.range);
                            }
                            else if (!member.type.isNullable) {
                                throwError("@omitnull cannot be used on non-nullable types!", member.range);
                            }
                            mem.flags.set(PropertyFlags.OmitNull, null);
                            this.schema.static = false;
                            break;
                        }
                    }
                }
            }
            this.schema.members.push(mem);
        }
        if (!this.schema.static)
            this.schema.members = sortMembers(this.schema.members);
        let SERIALIZE = "__SERIALIZE(ptr: usize): void {\n";
        let INITIALIZE = "@inline __INITIALIZE(): this {\n";
        let DESERIALIZE = "__DESERIALIZE(keyStart: usize, keyEnd: usize, valStart: usize, valEnd: usize, ptr: usize): void {\n  switch (keyEnd - keyStart) {\n";
        let ALLOCATE = "@inline __ALLOCATE(): void {\n";
        indent = "  ";
        if (this.schema.static == false) {
            if (this.schema.members.some((v) => v.flags.has(PropertyFlags.OmitNull))) {
                SERIALIZE += indent + "let block: usize = 0;\n";
            }
            this.schema.byteSize += 2;
            SERIALIZE += indent + "store<u16>(bs.offset, 123, 0); // {\n";
            SERIALIZE += indent + "bs.offset += 2;\n";
        }
        let isPure = this.schema.static;
        let isRegular = isPure;
        let isFirst = true;
        for (let i = 0; i < this.schema.members.length; i++) {
            const member = this.schema.members[i];
            const aliasName = JSON.stringify(member.alias || member.name);
            const realName = member.name;
            const isLast = i == this.schema.members.length - 1;
            const nonNullType = member.type.replace(" | null", "");
            if (member.value) {
                INITIALIZE += `  this.${member.name} = ${member.value};\n`;
            }
            else if (this.schemas.find((v) => nonNullType == v.name)) {
                INITIALIZE += `  this.${member.name} = changetype<nonnull<${member.type}>>(__new(offsetof<nonnull<${member.type}>>(), idof<nonnull<${member.type}>>())).__INITIALIZE();\n`;
            }
            else if (member.type.startsWith("Array<") || member.type.startsWith("Map<")) {
                INITIALIZE += `  this.${member.name} = [];\n`;
            }
            else if (member.type == "string" || member.type == "String" || member.type == "JSON.Raw") {
                INITIALIZE += `  this.${member.name} = "";\n`;
            }
            if (!isRegular && !member.flags.has(PropertyFlags.OmitIf) && !member.flags.has(PropertyFlags.OmitNull))
                isRegular = true;
            if (isRegular && isPure) {
                const keyPart = (isFirst ? "{" : ",") + aliasName + ":";
                this.schema.byteSize += keyPart.length << 1;
                SERIALIZE += this.getStores(keyPart)
                    .map((v) => indent + v + "\n")
                    .join("");
                SERIALIZE += indent + `JSON.__serialize<${member.type}>(load<${member.type}>(ptr, offsetof<this>(${JSON.stringify(realName)})));\n`;
                if (isFirst)
                    isFirst = false;
            }
            else if (isRegular && !isPure) {
                const keyPart = (isFirst ? "" : ",") + aliasName + ":";
                this.schema.byteSize += keyPart.length << 1;
                SERIALIZE += this.getStores(keyPart)
                    .map((v) => indent + v + "\n")
                    .join("");
                SERIALIZE += indent + `JSON.__serialize<${member.type}>(load<${member.type}>(ptr, offsetof<this>(${JSON.stringify(realName)})));\n`;
                if (isFirst)
                    isFirst = false;
            }
            else {
                if (member.flags.has(PropertyFlags.OmitNull)) {
                    SERIALIZE += indent + `if ((block = load<usize>(ptr, offsetof<this>(${JSON.stringify(realName)}))) !== 0) {\n`;
                    indentInc();
                    const keyPart = aliasName + ":";
                    this.schema.byteSize += keyPart.length << 1;
                    SERIALIZE += this.getStores(keyPart)
                        .map((v) => indent + v + "\n")
                        .join("");
                    SERIALIZE += indent + `JSON.__serialize<${member.type}>(load<${member.type}>(ptr, offsetof<this>(${JSON.stringify(realName)})));\n`;
                    if (!isLast) {
                        this.schema.byteSize += 2;
                        SERIALIZE += indent + `store<u16>(bs.offset, 44, 0); // ,\n`;
                        SERIALIZE += indent + `bs.offset += 2;\n`;
                    }
                    indentDec();
                    this.schema.byteSize += 2;
                    SERIALIZE += indent + `}\n`;
                }
                else if (member.flags.has(PropertyFlags.OmitIf)) {
                    if (member.flags.get(PropertyFlags.OmitIf).kind == 14) {
                        const arg = member.flags.get(PropertyFlags.OmitIf);
                        arg.declaration.signature.returnType.name = Node.createSimpleTypeName("boolean", arg.declaration.signature.returnType.name.range);
                        SERIALIZE += indent + `if ((${toString(member.flags.get(PropertyFlags.OmitIf))})(this)) {\n`;
                    }
                    else {
                        SERIALIZE += indent + `if (${toString(member.flags.get(PropertyFlags.OmitIf))}) {\n`;
                    }
                    indentInc();
                    SERIALIZE += this.getStores(aliasName + ":")
                        .map((v) => indent + v + "\n")
                        .join("");
                    SERIALIZE += indent + `JSON.__serialize<${member.type}>(load<${member.type}>(ptr, offsetof<this>(${JSON.stringify(realName)})));\n`;
                    if (!isLast) {
                        this.schema.byteSize += 2;
                        SERIALIZE += indent + `store<u16>(bs.offset, 44, 0); // ,\n`;
                        SERIALIZE += indent + `bs.offset += 2;\n`;
                    }
                    indentDec();
                    SERIALIZE += indent + `}\n`;
                }
            }
        }
        let sortedMembers = [];
        let len = -1;
        this.schema.members
            .slice()
            .sort((a, b) => (a.alias?.length || a.name.length) - (b.alias?.length || b.name.length))
            .forEach((member) => {
            const _nameLength = member.alias?.length || member.name.length;
            if (_nameLength === len) {
                sortedMembers[sortedMembers.length - 1].push(member);
            }
            else {
                sortedMembers.push([member]);
                len = _nameLength;
            }
        });
        sortedMembers = sortedMembers.sort((a, b) => b.length - a.length);
        indentInc();
        for (const memberGroup of sortedMembers) {
            const memberLen = (memberGroup[0].alias || memberGroup[0].name).length << 1;
            DESERIALIZE += `${indent}case ${memberLen}: {\n`;
            indentInc();
            if (memberLen == 2)
                DESERIALIZE += `${indent}switch (load<u16>(keyStart)) {\n`;
            else if (memberLen == 4)
                DESERIALIZE += `${indent}switch (load<u32>(keyStart)) {\n`;
            else if (memberLen == 6)
                DESERIALIZE += `${indent}let code = (<u64>load<u32>(keyStart) << 16) | <u64>load<u16>(keyStart, 4);\n`;
            else
                DESERIALIZE += toMemCDecl(memberLen, indent);
            for (let i = 0; i < memberGroup.length; i++) {
                const member = memberGroup[i];
                const memberName = member.alias || member.name;
                if (memberLen == 2) {
                    DESERIALIZE += `${indent}  case ${memberName.charCodeAt(0)}: { // ${memberName}\n`;
                    DESERIALIZE += `${indent}    store<${member.type}>(ptr, JSON.__deserialize<${member.type}>(valStart, valEnd), offsetof<this>(${JSON.stringify(member.name)}));\n`;
                    DESERIALIZE += `${indent}    return;\n`;
                    DESERIALIZE += `${indent}  }\n`;
                }
                else if (memberLen == 4) {
                    DESERIALIZE += `${indent}  case ${toU32(memberName)}: { // ${memberName}\n`;
                    DESERIALIZE += `${indent}    store<${member.type}>(ptr, JSON.__deserialize<${member.type}>(valStart, valEnd), offsetof<this>(${JSON.stringify(member.name)}));\n`;
                    DESERIALIZE += `${indent}    return;\n`;
                    DESERIALIZE += `${indent}  }\n`;
                }
                else if (memberLen == 6) {
                    DESERIALIZE += i == 0 ? indent : "";
                    DESERIALIZE += `if (code == ${toU48(memberName)}) { // ${memberName}\n`;
                    DESERIALIZE += `${indent}  store<${member.type}>(ptr, JSON.__deserialize<${member.type}>(valStart, valEnd), offsetof<this>(${JSON.stringify(member.name)}));\n`;
                    DESERIALIZE += `${indent}  return;\n`;
                    DESERIALIZE += `${indent}}${i < memberGroup.length - 1 ? " else " : "\n"}`;
                }
                else {
                    DESERIALIZE += i == 0 ? indent : "";
                    DESERIALIZE += `if (${toMemCCheck(memberName)}) { // ${memberName}\n`;
                    DESERIALIZE += `${indent}  store<${member.type}>(ptr, JSON.__deserialize<${member.type}>(valStart, valEnd), offsetof<this>(${JSON.stringify(member.name)}));\n`;
                    DESERIALIZE += `${indent}  return;\n`;
                    DESERIALIZE += `${indent}}${i < memberGroup.length - 1 ? " else " : "\n"}`;
                }
            }
            if (memberLen < 6) {
                DESERIALIZE += `${indent}}\n`;
            }
            indentDec();
            DESERIALIZE += `${indent}  return;\n`;
            DESERIALIZE += `${indent}}\n`;
        }
        indentDec();
        DESERIALIZE += `${indent}}\n`;
        indentDec();
        DESERIALIZE += `${indent}}\n`;
        indent = "  ";
        this.schema.byteSize += 2;
        SERIALIZE += indent + "store<u16>(bs.offset, 125, 0); // }\n";
        SERIALIZE += indent + "bs.offset += 2;\n";
        SERIALIZE += "}";
        ALLOCATE += indent + "bs.ensureSize(" + this.schema.byteSize + ");\n";
        ALLOCATE += "}";
        INITIALIZE += "  return this;\n";
        INITIALIZE += "}";
        if (process.env["JSON_DEBUG"]) {
            console.log(SERIALIZE);
            console.log(INITIALIZE);
            console.log(DESERIALIZE);
            console.log(ALLOCATE);
        }
        const SERIALIZE_METHOD = SimpleParser.parseClassMember(SERIALIZE, node);
        const INITIALIZE_METHOD = SimpleParser.parseClassMember(INITIALIZE, node);
        const DESERIALIZE_METHOD = SimpleParser.parseClassMember(DESERIALIZE, node);
        const ALLOCATE_METHOD = SimpleParser.parseClassMember(ALLOCATE, node);
        if (!node.members.find((v) => v.name.text == "__SERIALIZE"))
            node.members.push(SERIALIZE_METHOD);
        if (!node.members.find((v) => v.name.text == "__INITIALIZE"))
            node.members.push(INITIALIZE_METHOD);
        if (!node.members.find((v) => v.name.text == "__DESERIALIZE"))
            node.members.push(DESERIALIZE_METHOD);
        if (!node.members.find((v) => v.name.text == "__ALLOCATE"))
            node.members.push(ALLOCATE_METHOD);
        super.visitClassDeclaration(node);
    }
    generateEmptyMethods(node) {
        let SERIALIZE_RAW_EMPTY = '@inline __SERIALIZE(ptr: usize = changetype<usize>(this)): string {\n  return "{}";\n}';
        let SERIALIZE_BS_EMPTY = "@inline __SERIALIZE(ptr: usize: bool): void {\n  store<u32>(bs.offset, 8192123);\n  bs.offset += 4;\n}";
        let INITIALIZE_EMPTY = "@inline __INITIALIZE(): this {\n  return this;\n}";
        let DESERIALIZE_EMPTY = "@inline __DESERIALIZE(keyStart: usize, keyEnd: usize, valStart: usize, valEnd: usize, ptr: usize): void {\n  return false;\n}";
        let ALLOCATE_EMPTY = "@inline __ALLOCATE(): void {\n  bs.ensureSize(4);\n}";
        if (process.env["JSON_DEBUG"]) {
            console.log(SERIALIZE_RAW_EMPTY);
            console.log(SERIALIZE_BS_EMPTY);
            console.log(INITIALIZE_EMPTY);
            console.log(DESERIALIZE_EMPTY);
            console.log(ALLOCATE_EMPTY);
        }
        const SERIALIZE_RAW_METHOD_EMPTY = SimpleParser.parseClassMember(SERIALIZE_RAW_EMPTY, node);
        const SERIALIZE_BS_METHOD_EMPTY = SimpleParser.parseClassMember(SERIALIZE_BS_EMPTY, node);
        const INITIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(INITIALIZE_EMPTY, node);
        const DESERIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(DESERIALIZE_EMPTY, node);
        const ALLOCATE_METHOD_EMPTY = SimpleParser.parseClassMember(ALLOCATE_EMPTY, node);
        if (!node.members.find((v) => v.name.text == "__SERIALIZE"))
            node.members.push(SERIALIZE_RAW_METHOD_EMPTY);
        if (!node.members.find((v) => v.name.text == "__SERIALIZE"))
            node.members.push(SERIALIZE_BS_METHOD_EMPTY);
        if (!node.members.find((v) => v.name.text == "__INITIALIZE"))
            node.members.push(INITIALIZE_METHOD_EMPTY);
        if (!node.members.find((v) => v.name.text == "__DESERIALIZE"))
            node.members.push(DESERIALIZE_METHOD_EMPTY);
        if (!node.members.find((v) => v.name.text == "__ALLOCATE"))
            node.members.push(ALLOCATE_METHOD_EMPTY);
    }
    visitImportStatement(node) {
        super.visitImportStatement(node);
        const source = this.parser.sources.find((src) => src.internalPath == node.internalPath);
        if (!source)
            return;
        if (source.statements.some((stmt) => stmt.kind === 59 && stmt.name.text === "JSON"))
            this.imports.push(node);
    }
    visitSource(node) {
        this.imports = [];
        super.visitSource(node);
    }
    addRequiredImports(node) {
        if (!this.imports.find((i) => i.declarations.find((d) => d.foreignName.text == "bs"))) {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            let relativePath = path.relative(path.dirname(node.range.source.normalizedPath), path.resolve(__dirname, "../../modules/bs/index.ts"));
            if (!relativePath.startsWith(".") && !relativePath.startsWith("/"))
                relativePath = "./" + relativePath;
            const txt = `import { bs } from "${relativePath}";`;
            if (!this.jsonImport) {
                this.jsonImport = txt;
                if (process.env["JSON_DEBUG"])
                    console.log("Added bs import: " + txt + "\n");
            }
        }
        if (!this.imports.find((i) => i.declarations.find((d) => d.foreignName.text == "JSON"))) {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            let relativePath = path.relative(path.dirname(node.range.source.normalizedPath), path.resolve(__dirname, "../../assembly/index.ts"));
            if (!relativePath.startsWith(".") && !relativePath.startsWith("/"))
                relativePath = "./" + relativePath;
            const txt = `import { JSON } from "${relativePath}";`;
            if (!this.jsonImport) {
                this.jsonImport = txt;
                if (process.env["JSON_DEBUG"])
                    console.log("Added json-as import: " + txt + "\n");
            }
        }
    }
    getStores(data, simd = false) {
        const out = [];
        const sizes = strToNum(data, simd);
        let offset = 0;
        for (const [size, num] of sizes) {
            if (size == "v128") {
                let index = this.newStmts.simd.findIndex((v) => v.includes(num));
                let name = "SIMD_" + (index == -1 ? this.newStmts.simd.length : index);
                if (index && !this.newStmts.simd.includes(`const ${name} = ${num};`))
                    this.newStmts.simd.push(`const ${name} = ${num};`);
                out.push("store<v128>(bs.offset, " + name + ", " + offset + "); // " + data.slice(offset >> 1, (offset >> 1) + 8));
                offset += 16;
            }
            if (size == "u64") {
                out.push("store<u64>(bs.offset, " + num + ", " + offset + "); // " + data.slice(offset >> 1, (offset >> 1) + 4));
                offset += 8;
            }
            else if (size == "u32") {
                out.push("store<u32>(bs.offset, " + num + ", " + offset + "); // " + data.slice(offset >> 1, (offset >> 1) + 2));
                offset += 4;
            }
            else if (size == "u16") {
                out.push("store<u16>(bs.offset, " + num + ", " + offset + "); // " + data.slice(offset >> 1, (offset >> 1) + 1));
                offset += 2;
            }
        }
        out.push("bs.offset += " + offset + ";");
        return out;
    }
}
export default class Transformer extends Transform {
    afterParse(parser) {
        const transformer = new JSONTransform();
        const sources = parser.sources.sort((_a, _b) => {
            const a = _a.internalPath;
            const b = _b.internalPath;
            if (a[0] == "~" && b[0] !== "~") {
                return -1;
            }
            else if (a[0] !== "~" && b[0] == "~") {
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
            if (transformer.newStmts.simd) {
                const tokenizer = new Tokenizer(new Source(0, source.normalizedPath, transformer.newStmts.simd.join("\n")));
                parser.currentSource = tokenizer.source;
                for (let i = 0; i < transformer.newStmts.simd.length; i++)
                    source.statements.unshift(parser.parseTopLevelStatement(tokenizer));
                parser.currentSource = source;
                transformer.newStmts.simd = [];
            }
            if (transformer.jsonImport) {
                const tokenizer = new Tokenizer(new Source(0, source.normalizedPath, transformer.jsonImport));
                parser.currentSource = tokenizer.source;
                source.statements.unshift(parser.parseTopLevelStatement(tokenizer));
                parser.currentSource = source;
                transformer.jsonImport = null;
            }
            if (transformer.bsImport) {
                const tokenizer = new Tokenizer(new Source(0, source.normalizedPath, transformer.bsImport));
                parser.currentSource = tokenizer.source;
                source.statements.unshift(parser.parseTopLevelStatement(tokenizer));
                parser.currentSource = source;
                transformer.bsImport = null;
            }
        }
        const schemas = transformer.schemas;
        for (const schema of schemas) {
            if (schema.parent) {
                const parent = schemas.find((v) => v.name == schema.parent?.name);
                if (!parent)
                    throwError(`Class ${schema.name} extends its parent class ${schema.parent}, but ${schema.parent} does not include a @json or @serializable decorator!`, schema.parent.node.range);
            }
        }
    }
}
function sortMembers(members) {
    return members.sort((a, b) => {
        const aMove = a.flags.has(PropertyFlags.OmitIf) || a.flags.has(PropertyFlags.OmitNull);
        const bMove = b.flags.has(PropertyFlags.OmitIf) || b.flags.has(PropertyFlags.OmitNull);
        if (aMove && !bMove) {
            return -1;
        }
        else if (!aMove && bMove) {
            return 1;
        }
        else {
            return 0;
        }
    });
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
function toU16(data, offset = 0) {
    return data.charCodeAt(offset + 0).toString();
}
function toU32(data, offset = 0) {
    return ((data.charCodeAt(offset + 1) << 16) | data.charCodeAt(offset + 0)).toString();
}
function toU48(data, offset = 0) {
    return ((BigInt(data.charCodeAt(offset + 2)) << 32n) | (BigInt(data.charCodeAt(offset + 1)) << 16n) | BigInt(data.charCodeAt(offset + 0))).toString();
}
function toU64(data, offset = 0) {
    return ((BigInt(data.charCodeAt(offset + 3)) << 48n) | (BigInt(data.charCodeAt(offset + 2)) << 32n) | (BigInt(data.charCodeAt(offset + 1)) << 16n) | BigInt(data.charCodeAt(offset + 0))).toString();
}
function toMemCDecl(n, indent) {
    let out = "";
    let offset = 0;
    let index = 0;
    while (n >= 8) {
        out += `${indent}const code${index++} = load<u64>(keyStart, ${offset});\n`;
        offset += 8;
        n -= 8;
    }
    while (n >= 4) {
        out += `${indent}const code${index++} = load<u32>(keyStart, ${offset});\n`;
        offset += 4;
        n -= 4;
    }
    if (n == 1)
        out += `${indent}const code${index++} = load<u16>(keyStart, ${offset});\n`;
    return out;
}
function toMemCCheck(data) {
    let n = data.length << 1;
    let out = "";
    let offset = 0;
    let index = 0;
    while (n >= 8) {
        out += ` && code${index++} == ${toU64(data, offset >> 1)}`;
        offset += 8;
        n -= 8;
    }
    while (n >= 4) {
        out += ` && code${index++} == ${toU32(data, offset >> 1)}`;
        offset += 4;
        n -= 4;
    }
    if (n == 1)
        out += ` && code${index++} == ${toU16(data, offset >> 1)}`;
    return out.slice(4);
}
function strToNum(data, simd = false, offset = 0) {
    const out = [];
    let n = data.length;
    while (n >= 8 && simd) {
        out.push(["v128", "i16x8(" + data.charCodeAt(offset + 0) + ", " + data.charCodeAt(offset + 1) + ", " + data.charCodeAt(offset + 2) + ", " + data.charCodeAt(offset + 3) + ", " + data.charCodeAt(offset + 4) + ", " + data.charCodeAt(offset + 5) + ", " + data.charCodeAt(offset + 6) + ", " + data.charCodeAt(offset + 7) + ")"]);
        offset += 8;
        n -= 8;
    }
    while (n >= 4) {
        const value = (BigInt(data.charCodeAt(offset + 3)) << 48n) | (BigInt(data.charCodeAt(offset + 2)) << 32n) | (BigInt(data.charCodeAt(offset + 1)) << 16n) | BigInt(data.charCodeAt(offset + 0));
        out.push(["u64", value.toString()]);
        offset += 4;
        n -= 4;
    }
    while (n >= 2) {
        const value = (data.charCodeAt(offset + 1) << 16) | data.charCodeAt(offset + 0);
        out.push(["u32", value.toString()]);
        offset += 2;
        n -= 2;
    }
    if (n === 1) {
        const value = data.charCodeAt(offset + 0);
        out.push(["u16", value.toString()]);
    }
    return out;
}
function isPrimitive(type) {
    const primitiveTypes = ["u8", "u16", "u32", "u64", "i8", "i16", "i32", "i64", "f32", "f64", "bool", "boolean"];
    return primitiveTypes.some((v) => type.includes(v));
}
function throwError(message, range) {
    const err = new Error();
    err.stack = `${message}\n  at ${range.source.normalizedPath}:${range.source.lineAt(range.start)}:${range.source.columnAt()}\n`;
    throw err;
}
function indentInc() {
    indent += "  ";
}
function indentDec() {
    indent = indent.slice(0, Math.max(0, indent.length - 2));
}
function sizeof(type) {
    if (type == "u8")
        return 6;
    else if (type == "i8")
        return 8;
    else if (type == "u16")
        return 10;
    else if (type == "i16")
        return 12;
    else if (type == "u32")
        return 20;
    else if (type == "i32")
        return 22;
    else if (type == "u64")
        return 40;
    else if (type == "i64")
        return 40;
    else if (type == "bool" || type == "boolean")
        return 10;
    else
        return 0;
}
function allPrimitive(schema) {
    return !schema.members.some((p) => p.byteSize == 0);
}
//# sourceMappingURL=index.js.map