import { ClassDeclaration, FieldDeclaration, IdentifierExpression, Parser, Source, Expression, CommonFlags, StringLiteralExpression, IntegerLiteralExpression, FloatLiteralExpression, NullExpression, TrueExpression, FalseExpression, DeclarationStatement, NamedTypeNode } from "assemblyscript/dist/assemblyscript.js";

import { toString, isStdlib } from "visitor-as/dist/utils.js";
import { BaseVisitor, SimpleParser } from "visitor-as/dist/index.js";
import { Transform } from "assemblyscript/dist/transform.js";
import chalk from "chalk";

const json_types = ["Array", "string", "String", "u8", "i8", "u16", "i16", "u32", "i32", "u64", "i64", "f32", "f64", "bool", "boolean", "Map", "Date"];

class JSONTransform extends BaseVisitor {
  public types = json_types;
  public schemasList: SchemaData[] = [];
  public currentClass!: SchemaData;
  public sources = new Set<Source>();

  appendParentFields(node: ClassDeclaration, schema: SchemaData, members: DeclarationStatement[]): void {
    if (node.extendsType) {
      if (schema.parent?.members) {
        for (let i = schema.parent.members.length - 1; i >= 0; i--) {
          const replace = schema.members.find((v) => v.name == schema.parent?.members[i]?.name);
          if (!replace) {
            members.unshift(schema.parent?.members[i]!.node);
          }
        }
        this.appendParentFields(schema.parent.node, schema, members);
      }
    }
  }

  handleEmptyClass(node: ClassDeclaration, schema: SchemaData, members: DeclarationStatement[]): void {
    let SERIALIZE_RAW_EMPTY = '__SERIALIZE(): string {\n  return "{}";\n}';
    let SERIALIZE_PRETTY_EMPTY = '__SERIALIZE_PRETTY(): string {\n  return "{}";\n}';

    let INITIALIZE_EMPTY = "__INITIALIZE(): this {\n  return this;\n}";

    let DESERIALIZE_EMPTY = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  return false;\n}";

    if (process.env["JSON_DEBUG"]) {
      console.log(SERIALIZE_RAW_EMPTY);
      console.log(SERIALIZE_PRETTY_EMPTY);
      console.log(INITIALIZE_EMPTY);
      console.log(DESERIALIZE_EMPTY);
    }

    const SERIALIZE_RAW_METHOD_EMPTY = SimpleParser.parseClassMember(SERIALIZE_RAW_EMPTY, node);
    const SERIALIZE_PRETTY_METHOD_EMPTY = SimpleParser.parseClassMember(SERIALIZE_PRETTY_EMPTY, node);
    const INITIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(INITIALIZE_EMPTY, node);
    const DESERIALIZE_METHOD_EMPTY = SimpleParser.parseClassMember(DESERIALIZE_EMPTY, node);

    if (!node.members.find((v) => v.name.text == "__SERIALIZE")) node.members.push(SERIALIZE_RAW_METHOD_EMPTY);
    if (!node.members.find((v) => v.name.text == "__SERIALIZE_PRETTY")) node.members.push(SERIALIZE_PRETTY_METHOD_EMPTY);
    if (!node.members.find((v) => v.name.text == "__INITIALIZE")) node.members.push(INITIALIZE_METHOD_EMPTY);
    if (!node.members.find((v) => v.name.text == "__DESERIALIZE")) node.members.push(DESERIALIZE_METHOD_EMPTY);
  }
  filterMembers(members: DeclarationStatement[]): FieldDeclaration[] {
    return members.filter((v) => v instanceof FieldDeclaration && !v.decorators?.find((v) => (<IdentifierExpression>v.name).text == "omit")) as FieldDeclaration[];
  }
  visitClassDeclaration(node: ClassDeclaration): void {
    if (!node.decorators?.length) return;
    if (!node.decorators.find((v) => (<IdentifierExpression>v.name).text == "json" || (<IdentifierExpression>v.name).text == "serializable")) return;
    this.types = json_types;

    const schema = new SchemaData();
    schema.node = node;
    schema.name = node.name.text;

    if (node.extendsType) {
      schema.parent = this.schemasList.find((v) => v.name == node.extendsType?.name.identifier.text) as SchemaData | null;
    }

    const _members = [...node.members];

    this.appendParentFields(node, schema, _members);

    const members = this.filterMembers(_members);

    if (!members.length) {
      this.handleEmptyClass(node, schema, members);
    }

    for (const member of members) {
      const name = member.name;
      if (!member.type) {
        throw new Error("Fields must be strongly typed! Found " + toString(member) + " at " + node.range.source.normalizedPath);
      }

      const type = toString(member.type!);
      if (type.startsWith("(") && type.includes("=>")) continue;
      const value = member.initializer ? toString(member.initializer!) : null;

      if (member.flags == CommonFlags.Static) continue;
      if (member.flags === CommonFlags.Private) continue;
      if (member.flags === CommonFlags.Protected) continue;

      const mem = new Property();
      mem.name = name.text;
      mem.type = type;
      mem.value = value;
      mem.node = member;

      if (type.includes("JSON.Raw")) {
        mem.flags.set(PropertyFlags.JSON_Raw, []);
      }

      if (member.type.isNullable) {
        mem.flags.set(PropertyFlags.Null, []);
      }

      if (member.decorators) {
        for (const decorator of member.decorators) {
          const decoratorName = (decorator.name as IdentifierExpression).text;

          const args = getArgs(decorator.args);

          switch (decoratorName) {
            case "alias": {
              if (!args.length) throw new Error("Expected 1 argument but got zero at @alias in " + node.range.source.normalizedPath);
              mem.alias = args[0]!;
              mem.flags.set(PropertyFlags.Alias, args);
              break;
            }
            case "omit": {
              mem.flags.set(PropertyFlags.Omit, args);
              break;
            }
            case "omitif": {
              if (!decorator.args?.length) throw new Error("Expected 1 argument but got zero at @omitif in " + node.range.source.normalizedPath);
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

      if (!mem.flags.get(PropertyFlags.Omit)) mem.generate();

      if (this.schemasList.find((v) => v.name == type)) {
        mem.initialize = "this." + name.text + " = changetype<nonnull<" + mem.type + ">>(__new(offsetof<nonnull<" + mem.type + ">>(), idof<nonnull<" + mem.type + ">>()));\n  changetype<nonnull<" + mem.type + ">>(this." + name.text + ").__INITIALIZE()";
      } else if (mem.value) {
        mem.initialize = "this." + name.text + " = " + mem.value;
      } else if (type === "Map") {
        mem.initialize = "this." + name.text + " = new " + mem.type + "()";
      } else if (type === "string") {
        mem.initialize = "this." + name.text + ' = ""';
      } else if (type === "Array") {
        mem.initialize = "this." + name.text + " = instantiate<" + mem.type + ">()";
      } else if (type === "bool" || type === "boolean") {
        mem.initialize = "this." + name.text + " = false";
      } else if (type === "JSON.Raw") {
        mem.initialize = "this." + name.text + ' = ""';
      } else if (type === "u8" || type === "u16" || type === "u32" || type === "u64" || type === "i8" || type === "i16" || type === "i32" || type === "i64") {
        mem.initialize = "this." + name.text + " = 0";
      } else if (type === "f32" || type === "f64") {
        mem.initialize = "this." + name.text + " = 0.0";
      }

      schema.members.push(mem);
    }

    let SERIALIZE_RAW = "__SERIALIZE(): string {\n  let out = `{";
    let SERIALIZE_PRETTY = "__SERIALIZE_PRETTY(): string {\n  let out = `{";

    let INITIALIZE = "__INITIALIZE(): this {\n";

    let DESERIALIZE = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  const len = key_end - key_start;\n";
    let indent = "  ";

    if (!schema.members.length) return;

    let found = false;

    if (schema.members[0]?.flags.has(PropertyFlags.OmitNull) || schema.members[0]?.flags.has(PropertyFlags.OmitIf)) {
      SERIALIZE_RAW += schema.members[0]?.serialize;
      SERIALIZE_PRETTY += "\\n" + indent + schema.members[0]?.serialize_pretty;
    } else {
      SERIALIZE_RAW += schema.members[0]?.serialize + ",";
      SERIALIZE_PRETTY += "\\n" + indent + schema.members[0]?.serialize_pretty + ",\\n";
      found = true;
    }

    if (schema.members[0]?.initialize) INITIALIZE += "  " + schema.members[0]?.initialize + ";\n";

    for (let i = 1; i < schema.members.length; i++) {
      const member = schema.members[i]!;
      if (member.initialize) INITIALIZE += "  " + member.initialize + ";\n";
      if (member.flags.has(PropertyFlags.Omit)) continue;
      if (member.flags.has(PropertyFlags.OmitNull) || member.flags.has(PropertyFlags.OmitIf)) {
        SERIALIZE_RAW += member.serialize;
        SERIALIZE_PRETTY += member.serialize_pretty;
      } else {
        SERIALIZE_RAW += member.serialize + ",";
        SERIALIZE_PRETTY += indent + member.serialize_pretty + ",\\n";
        found = true;
      }
    }

    if (found) {
      SERIALIZE_RAW += "`;\n  store<u16>(changetype<usize>(out) + ((out.length - 1) << 1), 125);\n  return out;\n}";
      SERIALIZE_PRETTY += "`;\n  store<u32>(changetype<usize>(out) + ((out.length - 2) << 1), 8192010);\n  return out;\n}";
    } else {
      SERIALIZE_RAW += "}`;\n  return out;\n}";
      SERIALIZE_PRETTY += "}`;\n  return out;\n}";
    }

    INITIALIZE += "  return this;\n}";

    const sortedMembers: Property[][] = [];
    const _sorted = schema.members.sort((a, b) => (a.alias?.length! || a.name.length) - (b.alias?.length! || b.name.length));
    let len = -1;
    let offset = -1;
    for (let i = 0; i < _sorted.length; i++) {
      const member = _sorted[i]!;
      const _name = member.alias || member.name;
      if (_name.length === len) {
        sortedMembers[offset]?.push(member);
      } else {
        sortedMembers.push([member]);
        len = _name.length;
        offset++;
      }
    }

    let first = true;
    for (const memberSet of sortedMembers) {
      const firstMember = memberSet[0]!;
      const _name = encodeKey(firstMember.alias || firstMember.name);
      if (_name.length === 1) {
        if (first) {
          DESERIALIZE += "  if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
          first = false;
        } else {
          DESERIALIZE += "else if (1 === len) {\n    switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {\n";
        }
      } else if (_name.length === 2) {
        if (first) {
          DESERIALIZE += "  if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
          first = false;
        } else {
          DESERIALIZE += "else if (2 === len) {\n    switch (load<u32>(changetype<usize>(data) + (key_start << 1))) {\n";
        }
      } else if (_name.length === 4) {
        if (first) {
          DESERIALIZE += "  if (4 === len) {\n    const code = load<u64>(changetype<usize>(data) + (key_start << 1));\n";
          first = false;
        } else {
          DESERIALIZE += "else if (4 === len) {\n    const code = load<u64>(changetype<usize>(data) + (key_start << 1));\n";
        }
      } else {
        if (first) {
          DESERIALIZE += "  if (" + _name.length + " === len) {\n";
          first = false;
        } else {
          DESERIALIZE += "else if (" + _name.length + " === len) {\n";
        }
      }
      let f = true;
      for (let i = 0; i < memberSet.length; i++) {
        const member = memberSet[i]!;
        if (!member.deserialize) continue;
        const _name = encodeKey(member.alias || member.name);
        if (_name.length === 1) {
          DESERIALIZE += `      case ${_name.charCodeAt(0)}: { /* ${_name} */\n        ${member.deserialize}\n        return true;\n      }\n`;
        } else if (_name.length === 2) {
          DESERIALIZE += `      case ${charCodeAt32(_name, 0)}: { /* ${_name} */\n        ${member.deserialize}\n        return true;\n      }\n`;
        } else if (_name.length === 4) {
          if (f) {
            f = false;
            DESERIALIZE += `    if (${charCodeAt64(_name, 0)} === code) { /* ${_name} */\n      ${member.deserialize}\n      return true;\n    }\n`;
          } else {
            DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + `else if (${charCodeAt64(_name, 0)} === code) {\n      ${member.deserialize}\n      return true;\n    }\n`;
          }
        } else {
          if (f) {
            f = false;
            DESERIALIZE += `    if (0 === memory.compare(changetype<usize>("${escapeQuote(escapeSlash(_name))}"), changetype<usize>(data) + (key_start << 1), ${_name.length << 1})) { /* ${_name} */\n      ${member.deserialize}\n      return true;\n    }\n`;
          } else {
            DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else if (0 === memory.compare(changetype<usize>("${escapeQuote(escapeSlash(_name))}"), changetype<usize>(data) + (key_start << 1), ${_name.length << 1})) { /* ${_name} */\n      ${member.deserialize}\n      return true;\n    }\n`;
          }
        }
      }
      if (_name.length < 3) {
        DESERIALIZE += `      default: {\n        return false;\n      }\n    }\n`;
      } else if (_name.length == 4) {
        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`;
      } else {
        DESERIALIZE = DESERIALIZE.slice(0, DESERIALIZE.length - 1) + ` else {\n      return false;\n    }\n`;
      }
      DESERIALIZE += "  } ";
    }

    DESERIALIZE += "\n  return false;\n}";

    //console.log(sortedMembers);

    if (process.env["JSON_DEBUG"]) {
      console.log(SERIALIZE_RAW);
      console.log(SERIALIZE_PRETTY);
      console.log(INITIALIZE);
      console.log(DESERIALIZE);
    }

    const SERIALIZE_RAW_METHOD = SimpleParser.parseClassMember(SERIALIZE_RAW, node);
    const SERIALIZE_PRETTY_METHOD = SimpleParser.parseClassMember(SERIALIZE_PRETTY, node);
    const INITIALIZE_METHOD = SimpleParser.parseClassMember(INITIALIZE, node);
    const DESERIALIZE_METHOD = SimpleParser.parseClassMember(DESERIALIZE, node);

    if (!node.members.find((v) => v.name.text == "__SERIALIZE")) node.members.push(SERIALIZE_RAW_METHOD);
    if (!node.members.find((v) => v.name.text == "__SERIALIZE_PRETTY")) node.members.push(SERIALIZE_PRETTY_METHOD);
    if (!node.members.find((v) => v.name.text == "__INITIALIZE")) node.members.push(INITIALIZE_METHOD);
    if (!node.members.find((v) => v.name.text == "__DESERIALIZE")) node.members.push(DESERIALIZE_METHOD);

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
        if (a[0] !== "~" && b[0] === "~") {
          return 1;
        }
        if (a[0] === "~" && b[0] !== "~") {
          return -1;
        }
        return 0;
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
      checkInheritance(schema, schemas);
      const invalidType = checkTypeCorrectness(schema, schemas);
      if (invalidType) {
        logError(`Type ${invalidType.type} implemented in property ${invalidType.path} is not a JSON-compatible type!\nEither decorate it with @omit or fix it!`);
      }
    }
  }
}

function checkInheritance(schema: SchemaData, schemas: SchemaData[]): void {
  if (!schema.parent && schema.node.extendsType) {
    if (schemas.find(v => v.node.name.text === schema.node.extendsType?.name.identifier.text!)) return;
    const extending = toString(schema.node.extendsType);
    logError(`Schema ${schema.name} extends ${extending}, but ${extending} does not include the @json decorator!`);
  }
}

function checkTypeCorrectness(
  schema: SchemaData,
  schemas: SchemaData[]
): {
  type: string;
  path: string;
} | null {
  const parent = schemas.find((v) => v.name === schema.parent?.name);
  const generic_types = [...(schema?.node.typeParameters?.map<string>((v) => v.name.text) || []), ...(parent?.node.typeParameters?.map<string>((v) => v.name.text) || [])];
  const member_types = [...(schema.members.map((v) => (<NamedTypeNode>v.node.type).name.identifier.text) || [])];
  const scopeTypes = new Set<string>([...json_types, ...generic_types, ...member_types]);

  for (const typ of member_types) {
    if (typ === "JSON") continue; // JSON.Raw, JSON.Box, JSON.Any, ect...
    if (json_types.includes(typ)) continue;
    if (generic_types.includes(typ)) continue;
    const check = schemas.find((v) => v.name == typ);
    if (!check) logError(`Type ${typ} is not a JSON compatible type or does not include the @json flag!`);
  }

  for (const member of schema.members) {
    const invalidType = checkType(schema, schemas, member.node.type as NamedTypeNode, member, scopeTypes, schema.name);
    if (invalidType) logError(`Type ${invalidType.type} in ${invalidType.path} does not implement a JSON compatible type!\n${chalk.dim(`  at ${member.node.range.source.normalizedPath.replace("~lib/", "./node_modules/")}`)}`);
  }

  return null;
}

function checkType(
  schema: SchemaData,
  schemas: SchemaData[],
  typ: NamedTypeNode,
  member: Property,
  scopeTypes: Set<string>,
  path: string,
): {
  type: string;
  path: string;
} | null {
  path += "." + member.name;
  if (schemas.find(v => v.node.name.text === typ.name.identifier.text)) scopeTypes.add(typ.name.identifier.text);
  if (!scopeTypes.has(typ.name.identifier.text)) return { type: toString(typ), path };

  if (typ.isNullable && isPrimitive(typ)) return { type: toString(typ), path };

  if (typ.typeArguments?.length && typ.typeArguments?.length > 0) {
    for (const ty of typ.typeArguments.filter((v) => v instanceof NamedTypeNode)) {
      const check = checkType(schema, schemas, ty, member, scopeTypes, path);
      if (check) return { type: toString(typ), path };
    }
  } else {
    if (scopeTypes.has(typ.name.identifier.text)) return null;
  }

  return null;
}

function logError(message: string): never {
  console.log("\n" + chalk.bold.bgRed(" Error ") + chalk.dim(":") + " " + message + "\n");
  process.exit(1);
}

enum PropertyFlags {
  Null,
  Omit,
  OmitNull,
  OmitIf,
  Alias,
  JSON_Raw,
}

class Property {
  public name: string = "";
  public alias: string | null = null;
  public type: string = "";
  public value: string | null = null;
  public flags: Map<PropertyFlags, string[]> = new Map<PropertyFlags, string[]>();

  public serialize: string | null = null;
  public serialize_pretty: string | null = null;
  public deserialize: string | null = null;
  public initialize: string | null = null;

  public node!: FieldDeclaration;

  private right_s: string = "";
  private right_d: string = "";

  public generate(): void {
    const name = this.name;
    const escapedName = escapeString(JSON.stringify(this.alias || this.name));
    const type = this.type;
    if (this.flags.has(PropertyFlags.Omit)) return;

    if (this.flags.has(PropertyFlags.JSON_Raw)) {
      if (this.flags.has(PropertyFlags.Null)) {
        this.right_s = "(this." + name + ' || "null")';
        this.right_d = "value_start === value_end - 4 && 30399761348886638 === load<u64>(changetype<usize>(data) + (value_start << 1)) ? null : data.substring(value_start, value_end)";
      } else {
        this.right_s = "this." + name;
        this.right_d = "data.substring(value_start, value_end);";
      }
    } else {
      this.right_s = "__SERIALIZE<" + type + ">(this." + name + ")";
      this.right_d = "__DESERIALIZE<" + type + ">(data.substring(value_start, value_end))";
    }

    if (this.flags.has(PropertyFlags.OmitIf)) {
      const condition = this.flags.get(PropertyFlags.OmitIf)![0];
      if (!condition) throw new Error("Could not find condition when using decorator @omitif! Provide at least one condition");
      this.serialize = "${" + condition + ' ? "" : \'' + escapedName + ":' + " + this.right_s + ' + ","}';
      this.serialize_pretty = "${" + condition + ' ? "" : \'' + escapedName + ": ' + " + this.right_s + ' + ","}';
      this.deserialize = "this." + name + " = " + this.right_d + ";";
    } else if (this.flags.has(PropertyFlags.OmitNull)) {
      this.serialize = "${changetype<usize>(this." + name + ") == <usize>0" + ' ? "" : \'' + escapedName + ":' + " + this.right_s + ' + ","}';
      this.serialize_pretty = "${changetype<usize>(this." + name + ") == <usize>0" + ' ? "" : \'' + escapedName + ": ' + " + this.right_s + ' + ","}';
      this.deserialize = "this." + name + " = " + this.right_d + ";";
    } else {
      this.serialize = escapedName + ":${" + this.right_s + "}";
      this.serialize_pretty = escapedName + ": ${" + this.right_s + "}";
      this.deserialize = "this." + name + " = " + this.right_d + ";";
    }
  }
}

class SchemaData {
  public name: string = "";
  public members: Property[] = [];
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
  return data.replace(/\\/g, "\\\\").replace(/\`/g, "\\`");
}

function escapeSlash(data: string): string {
  return data.replace(/\\/g, "\\\\").replace(/\`/g, "\\`");
}

function escapeQuote(data: string): string {
  return data.replace(/\"/g, '\\"');
}

function getArgs(args: Expression[] | null): string[] {
  if (!args) return [];
  let out: string[] = [];
  for (const arg of args) {
    if (arg instanceof StringLiteralExpression) {
      out.push(arg.value);
    } else if (arg instanceof IntegerLiteralExpression) {
      out.push(i64_to_string(arg.value));
    } else if (arg instanceof FloatLiteralExpression) {
      out.push(arg.value.toString());
    } else if (arg instanceof NullExpression) {
      out.push(arg.text);
    } else if (arg instanceof TrueExpression) {
      out.push(arg.text);
    } else if (arg instanceof FalseExpression) {
      out.push(arg.text);
    } else if (arg instanceof IdentifierExpression) {
      out.push(arg.text);
    }
  }
  return out;
}

function isPrimitive(type: NamedTypeNode): boolean {
  const primitives = new Set(["u8", "i8", "u16", "i16", "u32", "i32", "u64", "i64", "f32", "f64", "bool", "boolean"]);

  return primitives.has(type.name.identifier.text);
}
