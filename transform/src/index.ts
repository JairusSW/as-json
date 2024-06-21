import {
  ClassDeclaration,
  FieldDeclaration,
  IdentifierExpression,
  NamedTypeNode,
  StringLiteralExpression,
  BinaryExpression,
  DecoratorNode,
  Token,
  Parser,
  Source,
  NodeKind,
  Node,
  NewExpression,
  ObjectLiteralExpression,
  CallExpression,
  PropertyAccessExpression,
  VariableDeclaration,
  CommonFlags,
  AssertionExpression,
  AssertionKind
} from "assemblyscript/dist/assemblyscript.js";

import { toString, isStdlib } from "visitor-as/dist/utils.js";
import { BaseVisitor, SimpleParser } from "visitor-as/dist/index.js";
import { Transform } from "assemblyscript/dist/transform.js";

class JSONTransform extends BaseVisitor {
  public schemasList: SchemaData[] = [];
  public currentClass!: SchemaData;
  public sources = new Set<Source>();
  public boxRefs = new Map<string, string>();
  visitVariableDeclaration(node: VariableDeclaration): void {
    let typ: string = "";
    // const foo = new Foo();
    if (node.initializer instanceof NewExpression && this.schemasList.find((v) => v.name == (<NewExpression>node.initializer).typeName.identifier.text)) {
      console.log(toString(node));
      this.boxRefs.set(node.name.text, (<NewExpression>node.initializer).typeName.identifier.text);
    }
    // const foo: Foo = {};
    // const foo = {} as Foo;
    // const foo = <Foo>{};
    else if (node.initializer instanceof ObjectLiteralExpression && this.schemasList.find((v) => v.name == (<NamedTypeNode>node.type).name.identifier.text)) {
      console.log(toString(node));
      this.boxRefs.set(node.name.text, (<NamedTypeNode>node.type).name.identifier.text);
    }
    // const foo = changetype<Foo>(ptr);
    else if (node.initializer instanceof CallExpression && this.schemasList.find((v) => (<CallExpression>node.initializer).typeArguments?.find((e) => (typ = v.name) == (<NamedTypeNode>e).name.identifier.text))) {
      console.log(toString(node));
      this.boxRefs.set(node.name.text, typ);
    }
  }
  visitBinaryExpression(node: BinaryExpression): void {
    if (node.operator == Token.Equals) {
      if (node.left.kind == NodeKind.PropertyAccess) {
        //console.log(node)
      }
    }
  }
  visitMethodDeclaration(): void { }
  visitAssertionExpression(node: AssertionExpression): void {
    //console.log("ASSERT: " + toString(node));
  }
  visitPropertyAccessExpression(node: PropertyAccessExpression): void {
    let subNode = node;
    let baseRef = "";
    while (true) {
      if (subNode.expression instanceof IdentifierExpression) {
        if (this.boxRefs.has((<IdentifierExpression>subNode.expression).text)) {
          //console.log(subNode);
          baseRef = (<IdentifierExpression>subNode.expression).text;
          break;
        } else {
          break;
        }
      } else if (subNode.expression instanceof PropertyAccessExpression) {
        subNode = subNode.expression;
      } else if (subNode.expression instanceof AssertionExpression) {
        //console.log("ASSERT: ", subNode.expression);
        subNode = subNode.expression;
      } else {
        break;
      }
    }
    subNode = node;
    if (baseRef) {
      const baseType = this.boxRefs.get(baseRef);
      console.log("Base: " + baseType);
      let properties: IdentifierExpression[] = [];
      let lastNode = subNode;
      const schema = (this.schemasList.find((e) => e.name === baseType) || (this.currentClass.name === baseType) ? this.currentClass : null)
      while (true) {
        if (subNode instanceof PropertyAccessExpression) {
          //console.log("PROPERTY: " + toString(subNode));        
          //console.log(subNode)          
          lastNode = subNode;
          subNode = subNode.expression;
        } else if (subNode instanceof AssertionExpression) {
          //console.log("ASSERT: " + toString(subNode));        
          //console.log(subNode);
          if (schema?.members.find((e) => e.name === subNode.expression.property?.text)) {
            const newExpression = Node.createPropertyAccessExpression(
              subNode,
              Node.createIdentifierExpression(
                "value",
                node.range
              ),
              node.range
            );

            node.expression = newExpression;
            node.property = lastNode.property;
            //console.log("HERE WE GO: " + toString(node));

          }
          lastNode = subNode;
          subNode = subNode.expression;
        } else if (subNode instanceof IdentifierExpression) {
          //console.log("IDENTIFIER: " + toString(subNode));
          break;
        }
      }/*
      const newProperty = Node.createAssertionExpression(
        AssertionKind.NonNull,
        Node.createPropertyAccessExpression(
          Node.createIdentifierExpression(
            "vec",
            node.range
          ),
          Node.createIdentifierExpression(
            "x",
            node.range
          ),
          node.range
        ),
        null,
        node.range
      );

      const newAccessor = Node.createIdentifierExpression(
        "value",
        node.range
      );

      if (node.property) {
      }
      const newPropertyAccess = Node.createPropertyAccessExpression(
        newProperty,
        newAccessor!,
        node.range
      )
      console.log("Sub Node:  ", toString(subNode))
      console.log("Old Access: ", toString(node));
      node.expression = newPropertyAccess;
      console.log("New Access: " + toString(node));*/
    }
  }
  visitClassDeclaration(node: ClassDeclaration): void {
    if (!node.decorators?.length) return;

    let found = false;
    for (const decorator of node.decorators) {
      const name = (<IdentifierExpression>decorator.name).text;
      if (name === "json" || name === "serializable") {
        found = true;
        break;
      }
    }
    if (!found) return;

    const schema = new SchemaData();
    schema.node = node;
    schema.name = node.name.text;

    this.currentClass = schema;

    for (const _member of node.members) {
      if (!(_member instanceof FieldDeclaration)) continue;
      const member = _member as FieldDeclaration;
      if (member.type?.isNullable && isPrimitiveType((<NamedTypeNode>member.type)?.name.identifier.text)) {
        const accessorType = Node.createSimpleTypeName(
          "JSON",
          node.range
        );
        accessorType.next = Node.createSimpleTypeName(
          "Box",
          node.range
        );
        const newTypeGeneric = member.type as NamedTypeNode;
        member.type.isNullable = false;

        const newType = Node.createNamedType(
          accessorType,
          [
            newTypeGeneric
          ],
          true,
          node.range
        );
        member.type = newType;

        if (member.initializer) {
          const initializer = Node.createNewExpression(
            accessorType,
            [
              newTypeGeneric
            ],
            [
              member.initializer
            ],
            node.range
          )
          member.initializer = initializer;
        }
        console.log(toString(member));
      }
    }

    const members = [
      ...node.members.filter(v => v instanceof FieldDeclaration)
    ];

    if (node.extendsType) {
      schema.parent = this.schemasList.find(
        (v) => v.name == node.extendsType?.name.identifier.text
      ) as SchemaData | null;

      if (schema.parent?.members) {
        for (let i = 0; i < schema.parent.members.length; i++) {
          const replace = schema.members.find(
            (v) => v.name == schema.parent?.members[i]?.name
          );
          if (!replace) {
            schema.members.unshift(schema.parent.members[i]!);
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

      if (!node.members.find(v => v.name.text == "__SERIALIZE")) node.members.push(SERIALIZE_RAW_METHOD_EMPTY);
      if (!node.members.find(v => v.name.text == "__INITIALIZE")) node.members.push(INITIALIZE_METHOD_EMPTY);
      if (!node.members.find(v => v.name.text == "__DESERIALIZE")) node.members.push(DESERIALIZE_METHOD_EMPTY);

      this.schemasList.push(schema);
    }

    for (const member of members) {
      if (!(member instanceof FieldDeclaration)) continue;
      const name = member.name;
      if (!member.type) {
        throw new Error("Fields must be strongly typed! Found " + toString(member) + " at " + node.range.source.normalizedPath);
      }
      const type = toString(member.type!);
      const value = member.initializer ? toString(member.initializer!) : null;

      if (member.flags == CommonFlags.Static) continue;
      if (member.flags === CommonFlags.Private) continue;
      if (member.flags === CommonFlags.Protected) continue;
      if (member.decorators && member.decorators.find((v) => (<IdentifierExpression>v.name).text == "omit")) continue;

      const mem = new Property();
      mem.name = name.text;
      mem.type = type;
      mem.value = value;
      mem.node = member;

      if (member.decorators) {
        let decorator: DecoratorNode | null = null;
        if (decorator = member.decorators.find(v => (<IdentifierExpression>v.name).text == "alias") as DecoratorNode | null) {
          if ((<IdentifierExpression>decorator.name).text == "alias") {
            if (!decorator.args?.length) throw new Error("Expected 1 argument but got zero at @alias in " + node.range.source.normalizedPath);
            mem.flags.push(PropertyFlags.Alias);
            mem.alias = (decorator.args[0] as StringLiteralExpression).value;
          }
        }

        for (let i = 0; i < (member.decorators).length; i++) {
          const decorator = member.decorators[i]!;
          if ((<IdentifierExpression>decorator.name).text == "omitnull") {
            mem.flags.push(PropertyFlags.OmitNull);
          } else if ((<IdentifierExpression>decorator.name).text == "omitif") {
            if (!decorator.args?.length) throw new Error("Expected 1 argument but got zero at @omitif in " + node.range.source.normalizedPath);
            mem.args?.push((decorator.args[0] as StringLiteralExpression).value);
            mem.flags.push(PropertyFlags.OmitIf);
          } else if ((<IdentifierExpression>decorator.name).text == "flatten") {
            if (!decorator.args?.length) throw new Error("Expected 1 argument but got zero at @flatten in " + node.range.source.normalizedPath);
            mem.flags.push(PropertyFlags.Flatten);
            mem.args = [(decorator.args[0] as StringLiteralExpression).value];
          }
        }
      }

      if (!mem.flags.length) {
        mem.flags = [PropertyFlags.None];
        mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${__SERIALIZE<" + type + ">(this." + name.text + ")}";
        mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));"
      }

      if (mem.flags.includes(PropertyFlags.OmitNull)) {
        mem.serialize = "${changetype<usize>(this." + mem.name + ") == <usize>0" + " ? \"\" : '" + escapeString(JSON.stringify(mem.alias || mem.name)) + ":' + __SERIALIZE<" + type + ">(this." + name.text + ") + \",\"}";
        mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));"
      } else if (mem.flags.includes(PropertyFlags.OmitIf)) {
        mem.serialize = "${" + mem.args![0]! + " ? \"\" : '" + escapeString(JSON.stringify(mem.alias || mem.name)) + ":' + __SERIALIZE<" + type + ">(this." + name.text + ") + \",\"}";
        mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));"
      } else if (mem.flags.includes(PropertyFlags.Alias)) {
        mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${__SERIALIZE<" + type + ">(this." + name.text + ")}";
        mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end));"
        mem.name = name.text;
      } else if (mem.flags.includes(PropertyFlags.Flatten)) {
        const nullable = (mem.node.type as NamedTypeNode).isNullable;
        if (nullable) {
          mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${this." + name.text + " ? __SERIALIZE(changetype<nonnull<" + type + ">>(this." + name.text + ")" + (mem.args?.length ? '.' + mem.args[0]! : '') + ") : \"null\"}";
          mem.deserialize = "if (value_end - value_start == 4 && load<u64>(changetype<usize>(data) + <usize>(value_start << 1)) == " + charCodeAt64("null", 0) + ") {\n        this." + name.text + " = null;\n      } else {\n        this." + name.text + " = " + "__DESERIALIZE<" + type + ">('{\"" + mem.args![0]! + "\":' + data.substring(value_start, value_end) + \"}\");\n      }";
        } else {
          mem.serialize = escapeString(JSON.stringify(mem.alias || mem.name)) + ":${this." + name.text + " ? __SERIALIZE(this." + name.text + (mem.args?.length ? '.' + mem.args[0]! : '') + ") : \"null\"}";
          mem.deserialize = "this." + name.text + " = " + "__DESERIALIZE<" + type + ">('{\"" + mem.args![0]! + "\":' + data.substring(value_start, value_end) + \"}\");";
        }
        mem.name = name.text;
      }

      const t = (mem.node.type as NamedTypeNode).name.identifier.text;
      if (this.schemasList.find(v => v.name == t)) {
        mem.initialize = "this." + name.text + " = changetype<nonnull<" + mem.type + ">>(__new(offsetof<nonnull<" + mem.type + ">>(), idof<nonnull<" + mem.type + ">>()));\n  changetype<nonnull<" + mem.type + ">>(this." + name.text + ").__INITIALIZE()";
      } else if (mem.value) {
        mem.initialize = "this." + name.text + " = " + mem.value;
      }

      schema.members.push(mem);
    }

    let SERIALIZE_RAW = "__SERIALIZE(): string {\n  let out = `{";
    let SERIALIZE_PRETTY = "__SERIALIZE_PRETTY(): string {\n  let out = `{";

    let INITIALIZE = "__INITIALIZE(): this {\n";

    let DESERIALIZE = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  const len = key_end - key_start;\n"
    let indent = "  ";

    if (!schema.members.length) return;

    found = false;

    if (
      schema.members[0]?.flags.includes(PropertyFlags.OmitNull)
      || schema.members[0]?.flags.includes(PropertyFlags.OmitIf)
    ) {
      SERIALIZE_RAW += schema.members[0]?.serialize;
      SERIALIZE_PRETTY += "\\n" + schema.members[0]?.serialize;
    } else {
      SERIALIZE_RAW += schema.members[0]?.serialize + ",";
      SERIALIZE_PRETTY += "\\n" + schema.members[0]?.serialize + ",\\n";
      found = true;
    }

    if (schema.members[0]?.initialize) INITIALIZE += "  " + schema.members[0]?.initialize + ";\n";

    for (let i = 1; i < schema.members.length; i++) {
      const member = schema.members[i]!;
      if (member.initialize) INITIALIZE += "  " + member.initialize + ";\n";
      if (
        member.flags.includes(PropertyFlags.OmitNull)
        || member.flags.includes(PropertyFlags.OmitIf)
      ) {
        SERIALIZE_RAW += member.serialize;
        SERIALIZE_PRETTY += member.serialize;
      } else {
        SERIALIZE_RAW += member.serialize + ",";
        SERIALIZE_PRETTY += indent + member.serialize + ",\\n";
        found = true;
      }
    }

    if (found) {
      SERIALIZE_RAW += "`;\n  store<u16>(changetype<usize>(out) + ((out.length - 1) << 1), 125);\n  return out;\n}";
      SERIALIZE_PRETTY += "`;\n  store<u32>(changetype<usize>(out) + ((out.length - 2) << 1), 8192010);\n  return out;\n}";
    } else {
      SERIALIZE_RAW += "`;\n};";
      SERIALIZE_PRETTY += "`;\n};";
    }

    INITIALIZE += "  return this;\n}"

    const sortedMembers: Property[][] = [];
    const _sorted = schema.members.sort((a, b) => a.name.length - b.name.length);
    let len = 0;
    let offset = 0;
    sortedMembers.push([_sorted[0]!]);
    len = _sorted[0]?.name.length!;
    for (let i = 1; i < _sorted.length; i++) {
      const member = _sorted[i]!;
      if (member.alias?.length || member.name.length > len) {
        sortedMembers.push([member]);
        len = member.alias?.length || member.name.length
        offset++;
      } else {
        sortedMembers[offset]!.push(member);
      }
    }

    let first = true;
    for (const memberSet of sortedMembers) {
      const firstMember = memberSet[0]!;
      const name = encodeKey(firstMember.alias || firstMember.name);
      if (name.length === 1) {
        if (first) {
          DESERIALIZE += "  if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
          first = false;
        } else {
          DESERIALIZE += "else if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
        }
      } else if (name.length === 2) {
        if (first) {
          DESERIALIZE += "  if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
          first = false;
        } else {
          DESERIALIZE += "else if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
        }
      } else if (name.length === 4) {
        if (first) {
          DESERIALIZE += "  if (4 === len) {\n    const code = load<u64>(changetype<usize>(data) + (key_start << 1));\n";
          first = false;
        } else {
          DESERIALIZE += "else if (4 === len) {\n    const code = load<u64>(changetype<usize>(data) + (key_start << 1));\n";
        }
      } else {
        if (first) {
          DESERIALIZE += "  if (" + name.length + " === len) {\n";
          first = false;
        } else {
          DESERIALIZE += "else if (" + name.length + " === len) {\n";
        }
      }
      let f = true;
      for (let i = 0; i < memberSet.length; i++) {
        const member = memberSet[i]!;
        const name = encodeKey(member.alias || member.name);
        if (name.length === 1) {
          DESERIALIZE += `      case ${name.charCodeAt(0)}: {\n        ${member.deserialize}\n        return true;\n      }\n`;
        } else if (name.length === 2) {
          DESERIALIZE += `      case ${charCodeAt32(name, 0)}: {\n        ${member.deserialize}\n        return true;\n      }\n`;
        } else if (name.length === 4) {
          if (f) {
            f = false;
            DESERIALIZE += `    if (${charCodeAt64(name, 0)} === code) {\n      ${member.deserialize}\n      return true;\n    }\n`;
          } else {
            DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + `else if (${charCodeAt64(name, 0)} === code) {\n      ${member.deserialize}\n      return true;\n    }\n`;
          }
        } else {
          if (f) {
            f = false;
            DESERIALIZE += `    if (0 == memory.compare(changetype<usize>("${escapeQuote(escapeSlash(name))}"), changetype<usize>(data) + (key_start << 1), ${name.length << 1})) {\n      ${member.deserialize}\n      return true;\n    }\n`
          } else {
            DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else if (0 == memory.compare(changetype<usize>("${escapeQuote(escapeSlash(name))}"), changetype<usize>(data) + (key_start << 1), ${name.length << 1})) {\n      ${member.deserialize}\n      return true;\n    }\n`
          }
        }
      }
      if (name.length < 3) {
        DESERIALIZE += `      default: {\n        return false;\n      }\n    }\n`
      } else if (name.length == 4) {
        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`
      } else {
        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`
      }
      DESERIALIZE += "  } ";
    }

    DESERIALIZE += "\n  return false;\n}"

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

    if (!node.members.find(v => v.name.text == "__SERIALIZE")) node.members.push(SERIALIZE_RAW_METHOD);
    if (!node.members.find(v => v.name.text == "__INITIALIZE")) node.members.push(INITIALIZE_METHOD);
    if (!node.members.find(v => v.name.text == "__DESERIALIZE")) node.members.push(DESERIALIZE_METHOD);

    this.schemasList.push(schema);
  }
  visitSource(node: Source): void {
    super.visitSource(node);

    // Only add the import statement to sources that have JSON decorated classes.
    if (!this.sources.has(node)) {
      return;
    }
  }
}

export default class Transformer extends Transform {
  // Trigger the transform after parse.
  afterParse(parser: Parser): void {
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
        } else if (a[0] !== "~" && b[0] === "~") {
          return 1;
        } else {
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
        if (!parent) throw new Error(`Class ${schema.name} extends its parent class ${schema.parent}, but ${schema.parent} does not include a @json or @serializable decorator! Add the decorator and rebuild.`);
      }
    }
  }
}

enum PropertyFlags {
  None,
  Omit,
  OmitNull,
  OmitIf,
  Alias,
  Flatten
}

class Property {
  public name: string = ""
  public alias: string | null = null;
  public type: string = "";
  public value: string | null = null;
  public flags: PropertyFlags[] = [];
  public args: string[] | null = [];

  public serialize: string | null = null;
  public deserialize: string | null = null;
  public initialize: string | null = null;

  public node!: FieldDeclaration;
}

class SchemaData {
  public name: string = "";
  public members: Property[] = []
  public parent: SchemaData | null = null;
  public node!: ClassDeclaration;
}

function charCodeAt32(data: string, offset: number): number {
  return (data.charCodeAt(offset + 1) << 16) | data.charCodeAt(offset);
}

function charCodeAt64(data: string, offset: number): bigint {
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

function encodeKey(key: string): string {
  const data = JSON.stringify(key);
  return data.slice(1, data.length - 1);
}

function escapeString(data: string): string {
  return data.replace(/\\/g, "\\\\")
    .replace(/\`/g, '\\`');
}

function escapeSlash(data: string): string {
  return data.replace(/\\/g, "\\\\")
    .replace(/\`/g, '\\`');
}

function escapeQuote(data: string): string {
  return data.replace(/\"/g, "\\\"");
}

function isPrimitiveType(data: string): boolean {
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