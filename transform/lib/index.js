import { FieldDeclaration, IdentifierExpression, Source, Node, NewExpression, ObjectLiteralExpression, CallExpression, PropertyAccessExpression, AssertionExpression, LiteralExpression, TrueExpression, FalseExpression, Tokenizer } from "assemblyscript/dist/assemblyscript.js";
import { toString, isStdlib } from "visitor-as/dist/utils.js";
import { BaseVisitor, SimpleParser } from "visitor-as/dist/index.js";
import { Transform } from "assemblyscript/dist/transform.js";
class JSONTransform extends BaseVisitor {
    constructor() {
        super(...arguments);
        this.schemasList = [];
        this.sources = new Set();
        this.boxRefs = new Map();
        this.mustImport = false;
    }
    visitVariableDeclaration(node) {
        let typ = "";
        let className = "";
        // const tempFoo = foo;
        if (node.initializer instanceof IdentifierExpression && this.boxRefs.has(node.initializer.text)) {
            this.boxRefs.set(node.name.text, this.boxRefs.get(node.initializer.text));
        }
        // const foo = new Foo();
        else if (node.initializer instanceof NewExpression && this.schemasList.find((v) => v.name == (className = node.initializer.typeName.identifier.text))) {
            this.boxRefs.set(node.name.text, className);
        }
        // const foo: Foo = {};
        // const foo = {} as Foo;
        // const foo = <Foo>{};
        else if (node.initializer instanceof ObjectLiteralExpression && this.schemasList.find((v) => v.name == (className = node.type.name.identifier.text))) {
            this.boxRefs.set(node.name.text, className);
            const schema = (this.schemasList.find((e) => e.name == node.type.name.identifier.text) || ((this.currentClass.name === className) ? this.currentClass : null));
            if (!schema)
                return;
            for (let i = 0; i < node.initializer.names.length; i++) {
                const name = node.initializer.names[i];
                const value = node.initializer.values[i];
                if (schema.boxRefs.has(name.text)) {
                    if ((value instanceof LiteralExpression
                        && (value.literalKind === 1 /* LiteralKind.Integer */
                            || value.literalKind === 0 /* LiteralKind.Float */))
                        || value instanceof TrueExpression
                        || value instanceof FalseExpression) {
                        this.mustImport = true;
                        const accessorType = Node.createSimpleTypeName("__JSON", node.range);
                        accessorType.next = Node.createSimpleTypeName("Box", node.range);
                        const newTypeGeneric = schema.boxRefs.get(name.text);
                        const initializer = Node.createNewExpression(accessorType, [
                            newTypeGeneric
                        ], [
                            value
                        ], node.range);
                        node.initializer.values[i] = initializer;
                    }
                }
            }
        }
        // const foo = changetype<Foo>(ptr);
        else if (node.initializer instanceof CallExpression && this.schemasList.find((v) => node.initializer.typeArguments?.find((e) => (typ = v.name) == e.name.identifier.text))) {
            this.boxRefs.set(node.name.text, typ);
        }
    }
    visitBinaryExpression(node) {
        if (node.operator == 101 /* Token.Equals */) {
            if (node.left.kind == 21 /* NodeKind.PropertyAccess */) {
                const left = node.left;
                // TODO
                if ((this.boxRefs.has(toString(left).split(".")[0]))) {
                    if ((node.right instanceof LiteralExpression
                        && (node.right.literalKind === 1 /* LiteralKind.Integer */
                            || node.right.literalKind === 0 /* LiteralKind.Float */))
                        || node.right instanceof TrueExpression
                        || node.right instanceof FalseExpression) {
                        let schema = null;
                        let subLeft = left;
                        while (true) {
                            if (subLeft instanceof IdentifierExpression) {
                                const baseType = this.boxRefs.get(subLeft.text);
                                schema = (this.schemasList.find((e) => e.name === baseType) || (this.currentClass.name === baseType) ? this.currentClass : null);
                                break;
                            }
                            else if (subLeft.expression) {
                                // @ts-ignore
                                subLeft = subLeft.expression;
                            }
                            else {
                                break;
                            }
                        }
                        if (!schema)
                            return;
                        this.mustImport = true;
                        const accessorType = Node.createSimpleTypeName("__JSON", node.range);
                        accessorType.next = Node.createSimpleTypeName("Box", node.range);
                        const newTypeGeneric = schema.boxRefs.get(left.property.text);
                        const initializer = Node.createNewExpression(accessorType, [
                            newTypeGeneric
                        ], [
                            node.right
                        ], node.range);
                        node.right = initializer;
                    }
                }
            }
        }
    }
    visitMethodDeclaration() { }
    visitPropertyAccessExpression(node) {
        let subNode = node;
        let baseRef = "";
        while (true) {
            // @ts-ignore
            if (subNode.expression instanceof IdentifierExpression) {
                // @ts-ignore
                if (this.boxRefs.has(subNode.expression.text)) {
                    //console.log(subNode);
                    // @ts-ignore
                    baseRef = subNode.expression.text;
                    break;
                }
                else {
                    break;
                }
                // @ts-ignore
            }
            else if (subNode.expression) {
                // @ts-ignore
                subNode = subNode.expression;
            }
            else {
                break;
            }
        }
        subNode = node;
        if (baseRef) {
            const baseType = this.boxRefs.get(baseRef);
            let properties = [];
            let lastNode = subNode;
            const schema = (this.schemasList.find((e) => e.name === baseType) || (this.currentClass.name === baseType) ? this.currentClass : null);
            while (true) {
                if (subNode instanceof AssertionExpression || subNode instanceof PropertyAccessExpression) {
                    //console.log(subNode);
                    // @ts-ignore
                    if (schema?.members.find((e) => e.name === subNode.expression.property?.text)) {
                        let newExpression = Node.createPropertyAccessExpression(subNode, Node.createIdentifierExpression("value", node.range), node.range);
                        const _newExpression = newExpression;
                        for (let i = 0; i < properties.length - 1; i++) {
                            const prop = properties[i];
                            newExpression = Node.createPropertyAccessExpression(newExpression, prop, node.range);
                        }
                        if (subNode instanceof AssertionExpression) {
                            // @ts-ignore
                            subNode = subNode.expression;
                        }
                        let t = Node.createPropertyAccessExpression(Node.createParenthesizedExpression(Node.createTernaryExpression(subNode, _newExpression, Node.createNullExpression(node.range), node.range), node.range), properties[0], node.range);
                        for (let i = 1; i < properties.length; i++) {
                            const prop = properties[i];
                            t = Node.createPropertyAccessExpression(t, prop, node.range);
                        }
                        node.expression = t.expression;
                        node.property = t.property;
                        this.mustImport = true;
                        break;
                    }
                    else {
                        lastNode = subNode;
                        // @ts-ignore
                        subNode = subNode.expression;
                        // @ts-ignore
                        if (lastNode.property)
                            properties.push(lastNode.property);
                    }
                }
                else if (subNode instanceof IdentifierExpression) {
                    break;
                    // @ts-ignore
                }
                else if (subNode.expression) {
                    lastNode = subNode;
                    // @ts-ignore
                    subNode = subNode.expression;
                    // @ts-ignore
                    if (lastNode.property)
                        properties.push(lastNode.property);
                }
                else {
                    break;
                }
            }
        }
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
        this.mustImport = true;
        const schema = new SchemaData();
        schema.node = node;
        schema.name = node.name.text;
        this.currentClass = schema;
        for (const _member of node.members) {
            if (!(_member instanceof FieldDeclaration))
                continue;
            const member = _member;
            if (member.type?.isNullable && isPrimitiveType(member.type?.name.identifier.text)) {
                const accessorType = Node.createSimpleTypeName("__JSON", node.range);
                accessorType.next = Node.createSimpleTypeName("Box", node.range);
                const newTypeGeneric = member.type;
                member.type.isNullable = false;
                const refType = member.type;
                schema.boxRefs.set(member.name.text, refType);
                const newType = Node.createNamedType(accessorType, [
                    newTypeGeneric
                ], true, node.range);
                member.type = newType;
                if (member.initializer) {
                    const initializer = Node.createNewExpression(accessorType, [
                        newTypeGeneric
                    ], [
                        member.initializer
                    ], node.range);
                    member.initializer = initializer;
                }
            }
        }
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
            // @ts-ignore
            if (process && process.env["JSON_DEBUG"]) {
                console.log("File: " + node.range.source.normalizedPath + "\n" + toString(node) + "\n\n");
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
                let decorator = null;
                if (decorator = member.decorators.find(v => v.name.text == "alias")) {
                    if (decorator.name.text == "alias") {
                        if (!decorator.args?.length)
                            throw new Error("Expected 1 argument but got zero at @alias in " + node.range.source.normalizedPath);
                        mem.flags.push(PropertyFlags.Alias);
                        mem.alias = decorator.args[0].value;
                    }
                }
                for (let i = 0; i < (member.decorators).length; i++) {
                    const decorator = member.decorators[i];
                    if (decorator.name.text == "omitnull") {
                        mem.flags.push(PropertyFlags.OmitNull);
                    }
                    else if (decorator.name.text == "omitif") {
                        if (!decorator.args?.length)
                            throw new Error("Expected 1 argument but got zero at @omitif in " + node.range.source.normalizedPath);
                        mem.args?.push(decorator.args[0].value);
                        mem.flags.push(PropertyFlags.OmitIf);
                    }
                    else if (decorator.name.text == "flatten") {
                        if (!decorator.args?.length)
                            throw new Error("Expected 1 argument but got zero at @flatten in " + node.range.source.normalizedPath);
                        mem.flags.push(PropertyFlags.Flatten);
                        mem.args = [decorator.args[0].value];
                    }
                }
            }
            if (!mem.flags.length) {
                mem.flags = [PropertyFlags.None];
                mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${__JSON.stringify<" + type + ">(this." + name.text + ")}";
                mem.deserialize = "this." + name.text + " = " + "__JSON.parse<" + type + ">(data.substring(value_start, value_end));";
            }
            if (mem.flags.includes(PropertyFlags.OmitNull)) {
                mem.serialize = "${changetype<usize>(this." + mem.name + ") == <usize>0" + " ? \"\" : '" + escapeString(JSON.stringify(mem.alias || mem.name)) + ":' + __JSON.stringify<" + type + ">(this." + name.text + ") + \",\"}";
                mem.deserialize = "this." + name.text + " = " + "__JSON.parse<" + type + ">(data.substring(value_start, value_end));";
            }
            else if (mem.flags.includes(PropertyFlags.OmitIf)) {
                mem.serialize = "${" + mem.args[0] + " ? \"\" : '" + escapeString(JSON.stringify(mem.alias || mem.name)) + ":' + __JSON.stringify<" + type + ">(this." + name.text + ") + \",\"}";
                mem.deserialize = "this." + name.text + " = " + "__JSON.parse<" + type + ">(data.substring(value_start, value_end));";
            }
            else if (mem.flags.includes(PropertyFlags.Alias)) {
                mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${__JSON.stringify<" + type + ">(this." + name.text + ")}";
                mem.deserialize = "this." + name.text + " = " + "__JSON.parse<" + type + ">(data.substring(value_start, value_end));";
                mem.name = name.text;
            }
            else if (mem.flags.includes(PropertyFlags.Flatten)) {
                const nullable = mem.node.type.isNullable;
                if (nullable) {
                    mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${this." + name.text + " ? __SERIALIZE(changetype<nonnull<" + type + ">>(this." + name.text + ")" + (mem.args?.length ? '.' + mem.args[0] : '') + ") : \"null\"}";
                    mem.deserialize = "if (value_end - value_start == 4 && load<u64>(changetype<usize>(data) + <usize>(value_start << 1)) == " + charCodeAt64("null", 0) + ") {\n        this." + name.text + " = null;\n      } else {\n        this." + name.text + " = " + "__JSON.parse<" + type + ">('{\"" + mem.args[0] + "\":' + data.substring(value_start, value_end) + \"}\");\n      }";
                }
                else {
                    mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${this." + name.text + " ? __SERIALIZE(this." + name.text + (mem.args?.length ? '.' + mem.args[0] : '') + ") : \"null\"}";
                    mem.deserialize = "this." + name.text + " = " + "__JSON.parse<" + type + ">('{\"" + mem.args[0] + "\":' + data.substring(value_start, value_end) + \"}\");";
                }
                mem.name = name.text;
            }
            const t = mem.node.type.name.identifier.text;
            if (this.schemasList.find(v => v.name == t)) {
                mem.initialize = "this." + name.text + " = changetype<nonnull<" + mem.type + ">>(__new(offsetof<nonnull<" + mem.type + ">>(), idof<nonnull<" + mem.type + ">>()));\n  changetype<nonnull<" + mem.type + ">>(this." + name.text + ").__INITIALIZE()";
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
        if (schema.members[0]?.flags.includes(PropertyFlags.OmitNull)
            || schema.members[0]?.flags.includes(PropertyFlags.OmitIf)) {
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
            if (member.flags.includes(PropertyFlags.OmitNull)
                || member.flags.includes(PropertyFlags.OmitIf)) {
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
        // @ts-ignore
        if (process && process.env["JSON_DEBUG"]) {
            console.log("File: " + node.range.source.normalizedPath + "\n" + toString(node) + "\n\n");
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
                if (transformer.mustImport) {
                    const tokenizer = new Tokenizer(new Source(0 /* SourceKind.User */, source.normalizedPath, "import { JSON as __JSON } from \"json-as/assembly\";"));
                    parser.currentSource = tokenizer.source;
                    source.statements.unshift(parser.parseTopLevelStatement(tokenizer));
                    parser.currentSource = source;
                    const tokenizer2 = new Tokenizer(new Source(0 /* SourceKind.User */, source.normalizedPath, "import { __atoi_fast } from \"json-as/assembly/util\";"));
                    parser.currentSource = tokenizer2.source;
                    source.statements.unshift(parser.parseTopLevelStatement(tokenizer2));
                    parser.currentSource = source;
                    transformer.mustImport = false;
                    // @ts-ignore
                    if (process && process.env["JSON_DEBUG"]?.toString().toLowerCase() == "all") {
                        console.log("File: " + source.normalizedPath + "\n" + toString(source) + "\n\n");
                    }
                }
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
    PropertyFlags[PropertyFlags["Flatten"] = 5] = "Flatten";
})(PropertyFlags || (PropertyFlags = {}));
class Property {
    constructor() {
        this.name = "";
        this.alias = null;
        this.type = "";
        this.value = null;
        this.flags = [];
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
        this.boxRefs = new Map();
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
function isPrimitiveType(data) {
    return data == "u8"
        || data == "u16"
        || data == "u16"
        || data == "u32"
        || data == "u64"
        || data == "i8"
        || data == "i16"
        || data == "i32"
        || data == "i64"
        || data == "f32"
        || data == "f64"
        || data == "bool"
        || data == "boolean";
}
