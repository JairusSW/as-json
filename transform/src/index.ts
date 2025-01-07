import { ClassDeclaration, FieldDeclaration, IdentifierExpression, Parser, Source, NodeKind, Expression, CommonFlags, StringLiteralExpression, IntegerLiteralExpression, FloatLiteralExpression, NullExpression, TrueExpression, FalseExpression, CallExpression, ImportStatement, NamespaceDeclaration, Node, Statement, Tokenizer, SourceKind, PropertyAccessExpression, Token, CommentHandler, ExpressionStatement, BinaryExpression, NamedTypeNode, Range, FEATURE_SIMD, FunctionExpression } from "assemblyscript/dist/assemblyscript.js";
import { Transform } from "assemblyscript/dist/transform.js";
import { Visitor } from "./visitor.js";
import { SimpleParser, toString } from "./util.js";
import * as path from "path";
import { fileURLToPath } from "url";
import { Property, PropertyFlags, Schema } from "./types.js";
import { getClasses, getImportedClass } from "./linker.js";

let indent = "  ";

class JSONTransform extends Visitor {
  public parser!: Parser;
  public schemas: Schema[] = [];
  public schema!: Schema;
  public sources = new Set<Source>();
  public imports: ImportStatement[] = [];

  public jsonImport: string | null = null;
  public bsImport: string | null = null;
  public newStmts: Statement[] = [];

  visitClassDeclaration(node: ClassDeclaration): void {
    if (!node.decorators?.length) return;

    if (!node.decorators.some(decorator => {
      const name = (<IdentifierExpression>decorator.name).text;
      return name === "json" || name === "serializable";
    })) return;

    this.schema = new Schema();
    this.schema.node = node;
    this.schema.name = node.name.text;

    this.schemas.push(this.schema);
    console.log("Created schema: " + this.schema.name);

    const members: FieldDeclaration[] = [...node.members.filter(
      (v) =>
        v.kind === NodeKind.FieldDeclaration &&
        v.flags !== CommonFlags.Static &&
        v.flags !== CommonFlags.Private &&
        v.flags !== CommonFlags.Protected &&
        !v.decorators?.some(decorator => (<IdentifierExpression>decorator.name).text === "omit")
    ) as FieldDeclaration[]];

    if (node.extendsType) {
      const extendsName = node.extendsType?.name.identifier.text;
      this.schema.parent = this.schemas.find((v) => v.name == extendsName) as Schema | null;
      if (!this.schema.parent) {
        const internalSearch = getClasses(node.range.source).find(v => v.name.text == extendsName);
        if (internalSearch) {
          console.log("Found " + extendsName + " internally");
          this.visitClassDeclaration(internalSearch);
          this.visitClassDeclaration(node);
          return;
        }

        const externalSearch = getImportedClass(extendsName, node.range.source, this.parser);
        if (externalSearch) {
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
            members.unshift(this.schema.parent?.members[i]!.node);
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
      if (!member.type) throwError("Fields must be strongly typed", node.range);

      const type = toString(member.type!);
      const name = member.name;
      const value = member.initializer ? toString(member.initializer!) : null;

      if (type.startsWith("(") && type.includes("=>")) continue;

      const mem = new Property();
      mem.name = name.text;
      mem.type = type;
      mem.value = value;
      mem.node = member;
      mem.byteSize = sizeof(mem.type);

      this.schema.byteSize += mem.byteSize;

      if (type.includes("JSON.Raw")) mem.flags.set(PropertyFlags.Raw, null);

      if (member.decorators) {
        for (const decorator of member.decorators) {
          const decoratorName = (decorator.name as IdentifierExpression).text.toLowerCase().trim();
          switch (decoratorName) {
            case "alias": {
              const args = getArgs(decorator.args);
              if (!args.length) throwError("@alias must have an argument of type string or number", member.range);
              mem.alias = args[0]!;
              break;
            }
            case "omitif": {
              const arg = decorator.args[0];
              if (!decorator.args?.length) throwError("@omitif must have an argument or callback that resolves to type bool", member.range);
              mem.flags.set(PropertyFlags.OmitIf, arg);
              this.schema.static = false;
              break;
            }
            case "omitnull": {
              if (isPrimitive(type)) {
                throwError("@omitnull cannot be used on primitive types!", member.range);
              } else if (!member.type.isNullable) {
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

    if (!this.schema.static) this.schema.members = sortMembers(this.schema.members);

    let SERIALIZE_RAW = "__SERIALIZE(ptr: usize = changetype<usize>(this)): string \n  let out = `{";
    let SERIALIZE_BS = "__SERIALIZE_BS(ptr: usize, staticSize: bool): void {\n";
    let INITIALIZE = "@inline __INITIALIZE(): this {\n";
    let DESERIALIZE = "__DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  const len = key_end - key_start;\n";
    let ALLOCATE = "@inline __ALLOCATE(): void {\n";

    indent = "  ";

    if (this.schema.static == false) {
      if (this.schema.members.some(v => v.flags.has(PropertyFlags.OmitNull))) {
        SERIALIZE_BS += indent + "let block: usize = 0;\n";
      }
      this.schema.byteSize += 2;
      SERIALIZE_BS += indent + "store<u16>(bs.offset, 123, 0); // {\n";
      SERIALIZE_BS += indent + "bs.offset += 2;\n";
    }

    let isPure = this.schema.static;
    let isRegular = isPure;
    let isFirst = true;

    for (let i = 0; i < this.schema.members.length; i++) {
      const member = this.schema.members[i];
      const aliasName = JSON.stringify(member.alias || member.name);
      const realName = member.name;
      const isLast = i == this.schema.members.length - 1;

      if (!isRegular && !member.flags.has(PropertyFlags.OmitIf) && !member.flags.has(PropertyFlags.OmitNull)) isRegular = true;
      if (isRegular && isPure) {
        const keyPart = (isFirst ? "{" : ",") + aliasName + ":";
        this.schema.byteSize += keyPart.length << 1;
        SERIALIZE_BS += strToStores(keyPart).map(v => indent + v + "\n").join("");
        SERIALIZE_BS += indent + `JSON.serialize_simple<${member.type}>(load<${member.type}>(ptr, offsetof<this>("${realName}")), ${isPrimitive(member.type)});\n`;
        if (isFirst) isFirst = false;
      } else if (isRegular && !isPure) {
        const keyPart = (isFirst ? "" : ",") + aliasName + ":";
        this.schema.byteSize += keyPart.length << 1;
        SERIALIZE_BS += strToStores(keyPart).map(v => indent + v + "\n").join("");
        SERIALIZE_BS += indent + `JSON.serialize_simple<${member.type}>(load<${member.type}>(ptr, offsetof<this>("${realName}")), staticSize);\n`;
        if (isFirst) isFirst = false;
      } else {
        if (member.flags.has(PropertyFlags.OmitNull)) {
          SERIALIZE_BS += indent + `if ((block = load<usize>(ptr, offsetof<this>("${realName}"))) !== 0) {\n`;
          indentInc();
          const keyPart = aliasName + ":";
          this.schema.byteSize += keyPart.length << 1;
          SERIALIZE_BS += strToStores(keyPart).map(v => indent + v + "\n").join("");
          SERIALIZE_BS += indent + `JSON.serialize_simple<${member.type}>(load<${member.type}>(ptr, offsetof<this>("${realName}")), staticSize);\n`;

          if (!isLast) {
            this.schema.byteSize += 2;
            SERIALIZE_BS += indent + `store<u16>(bs.offset, 44, 0); // ,\n`;
            SERIALIZE_BS += indent + `bs.offset += 2;\n`;
          }

          indentDec();
          this.schema.byteSize += 2;
          SERIALIZE_BS += indent + `}\n`;
        } else if (member.flags.has(PropertyFlags.OmitIf)) {
          SERIALIZE_BS += indent + `if (${toString}) !== 0) {\n`;
          indentInc();
          SERIALIZE_BS += strToStores(aliasName + ":").map(v => indent + v + "\n").join("");
          SERIALIZE_BS += indent + `JSON.serialize_simple<${member.type}>(load<${member.type}>(ptr, offsetof<this>("${realName}")), staticSize);\n`;

          if (!isLast) {
            this.schema.byteSize += 2;
            SERIALIZE_BS += indent + `store<u16>(bs.offset, 44, 0); // ,\n`;
            SERIALIZE_BS += indent + `bs.offset += 2;\n`;
          }

          indentDec();
          SERIALIZE_BS += indent + `}\n`;
        }
      }
    }

    this.schema.byteSize += 2;
    SERIALIZE_BS += indent + "store<u16>(bs.offset, 125, 0); // }\n";
    SERIALIZE_BS += indent + "bs.offset += 2;\n";
    SERIALIZE_BS += "}";
    indentDec();

    indentInc();
    ALLOCATE += indent + "bs.ensureSize(" + this.schema.byteSize + ");\n";
    ALLOCATE += "}";

    if (process.env["JSON_DEBUG"]) {
      // console.log(SERIALIZE_RAW);
      console.log(SERIALIZE_BS);
      // console.log(INITIALIZE);
      // console.log(DESERIALIZE);
      console.log(ALLOCATE);
    }

    // const SERIALIZE_RAW_METHOD = SimpleParser.parseClassMember(SERIALIZE_RAW, node);
    const SERIALIZE_BS_METHOD = SimpleParser.parseClassMember(SERIALIZE_BS, node);
    // const INITIALIZE_METHOD = SimpleParser.parseClassMember(INITIALIZE, node);
    // const DESERIALIZE_METHOD = SimpleParser.parseClassMember(DESERIALIZE, node);
    const ALLOCATE_METHOD = SimpleParser.parseClassMember(ALLOCATE, node);

    // if (!node.members.find((v) => v.name.text == "__SERIALIZE")) node.members.push(SERIALIZE_RAW_METHOD);
    if (!node.members.find((v) => v.name.text == "__SERIALIZE_BS")) node.members.push(SERIALIZE_BS_METHOD);
    // if (!node.members.find((v) => v.name.text == "__INITIALIZE")) node.members.push(INITIALIZE_METHOD);
    // if (!node.members.find((v) => v.name.text == "__DESERIALIZE")) node.members.push(DESERIALIZE_METHOD);
    if (!node.members.find((v) => v.name.text == "__ALLOCATE")) node.members.push(ALLOCATE_METHOD);
    super.visitClassDeclaration(node);
  }
  generateEmptyMethods(node: ClassDeclaration): void {
    let SERIALIZE_RAW_EMPTY = '@inline __SERIALIZE(ptr: usize = changetype<usize>(this)): string {\n  return "{}";\n}';
    let SERIALIZE_BS_EMPTY = "@inline __SERIALIZE_BS(ptr: usize, staticSize: bool): void {\n  store<u32>(bs.offset, 8192123);\n  bs.offset += 4;\n}";
    let INITIALIZE_EMPTY = "@inline __INITIALIZE(): this {\n  return this;\n}";
    let DESERIALIZE_EMPTY = "@inline __DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {\n  return false;\n}";
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

    if (!node.members.find((v) => v.name.text == "__SERIALIZE")) node.members.push(SERIALIZE_RAW_METHOD_EMPTY);
    if (!node.members.find((v) => v.name.text == "__SERIALIZE_BS")) node.members.push(SERIALIZE_BS_METHOD_EMPTY);
    if (!node.members.find((v) => v.name.text == "__INITIALIZE")) node.members.push(INITIALIZE_METHOD_EMPTY);
    if (!node.members.find((v) => v.name.text == "__DESERIALIZE")) node.members.push(DESERIALIZE_METHOD_EMPTY);
    if (!node.members.find((v) => v.name.text == "__ALLOCATE")) node.members.push(ALLOCATE_METHOD_EMPTY);
  }
  // visitCallExpression(node: CallExpression, ref: Node): void {
  //   super.visitCallExpression(node, ref);
  //   if (!(node.expression.kind == NodeKind.PropertyAccess && (node.expression as PropertyAccessExpression).property.text == "stringifyTo") && !(node.expression.kind == NodeKind.Identifier && (node.expression as IdentifierExpression).text == "stringifyTo")) return;

  //   const source = node.range.source;

  //   if (ref.kind == NodeKind.Call) {
  //     const newNode = Node.createBinaryExpression(Token.Equals, node.args[1], node, node.range);

  //     (<CallExpression>ref).args[(<CallExpression>ref).args.indexOf(node)] = newNode;
  //   } else {
  //     const newNode = Node.createExpressionStatement(Node.createBinaryExpression(Token.Equals, node.args[1], node, node.range));

  //     const nodeIndex = source.statements.findIndex((n: Node) => {
  //       if (n == node) return true;
  //       if (n.kind == NodeKind.Expression && (<ExpressionStatement>n).expression == node) return true;
  //       return false;
  //     });

  //     if (nodeIndex > 0) source.statements[nodeIndex] = newNode;
  //   }
  // }
  // visitBinaryExpression(node: BinaryExpression, ref?: Node | null): void {
  //   // if (node.right.kind == NodeKind.Call && (<CallExpression>node).)
  // }
  visitImportStatement(node: ImportStatement): void {
    super.visitImportStatement(node);
    const source = this.parser.sources.find((src) => src.internalPath == node.internalPath);
    if (!source) return;

    if (source.statements.some(stmt =>
      stmt.kind === NodeKind.NamespaceDeclaration &&
      (stmt as NamespaceDeclaration).name.text === "JSON")
    ) this.imports.push(node);
  }
  visitSource(node: Source): void {
    this.imports = [];
    super.visitSource(node);
  }
  addRequiredImports(node: ClassDeclaration): void {
    if (!this.imports.find((i) => i.declarations.find((d) => d.foreignName.text == "bs"))) {
      if (!this.bsImport) {
        this.bsImport = "import { bs } from \"as-bs\"";
        if (process.env["JSON_DEBUG"]) console.log("Added as-bs import: " + this.bsImport + "\n");
      }
    }
    if (!this.imports.find((i) => i.declarations.find((d) => d.foreignName.text == "JSON"))) {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      let relativePath = path.relative(path.dirname(node.range.source.normalizedPath), path.resolve(__dirname, "../../assembly/index.ts"));

      if (!relativePath.startsWith(".") && !relativePath.startsWith("/")) relativePath = "./" + relativePath;
      // if (!existsSync(relativePath)) {
      //   throw new Error("Could not find a valid json-as library to import from! Please add import { JSON } from \"path-to-json-as\"; in " + node.range.source.normalizedPath + "!");
      // }

      const txt = `import { JSON } from "${relativePath}";`;
      if (!this.jsonImport) {
        this.jsonImport = txt;
        if (process.env["JSON_DEBUG"]) console.log("Added json-as import: " + txt + "\n");
      }
    }
  }
}

export default class Transformer extends Transform {
  // Trigger the transform after parse.
  afterParse(parser: Parser): void {
    // Create new transform
    const transformer = new JSONTransform();

    // Sort the sources so that user scripts are visited last
    const sources = parser.sources.sort((_a, _b) => {
      const a = _a.internalPath;
      const b = _b.internalPath;
      if (a[0] == "~" && b[0] !== "~") {
        return -1;
      } else if (a[0] !== "~" && b[0] == "~") {
        return 1;
      } else {
        return 0;
      }
    });

    transformer.parser = parser;
    // Loop over every source
    for (const source of sources) {
      transformer.imports = [];
      transformer.currentSource = source;
      // Ignore all lib and std. Visit everything else.
      transformer.visit(source);

      if (transformer.jsonImport) {
        const tokenizer = new Tokenizer(new Source(SourceKind.User, source.normalizedPath, transformer.jsonImport));
        parser.currentSource = tokenizer.source;
        source.statements.unshift(parser.parseTopLevelStatement(tokenizer)!);
        parser.currentSource = source;
        transformer.jsonImport = null;
      }

      if (transformer.bsImport) {
        const tokenizer = new Tokenizer(new Source(SourceKind.User, source.normalizedPath, transformer.bsImport));
        parser.currentSource = tokenizer.source;
        source.statements.unshift(parser.parseTopLevelStatement(tokenizer)!);
        parser.currentSource = source;
        transformer.bsImport = null;
      }
    }
    // Check that every parent and child class is hooked up correctly
    const schemas = transformer.schemas;
    for (const schema of schemas) {
      if (schema.parent) {
        const parent = schemas.find((v) => v.name == schema.parent?.name);
        if (!parent) throwError(`Class ${schema.name} extends its parent class ${schema.parent}, but ${schema.parent} does not include a @json or @serializable decorator!`, schema.parent.node.range);
      }
    }
  }
}

function sortMembers(members: Property[]): Property[] {
  return members.sort((a, b) => {
    const aMove = a.flags.has(PropertyFlags.OmitIf) || a.flags.has(PropertyFlags.OmitNull);
    const bMove = b.flags.has(PropertyFlags.OmitIf) || b.flags.has(PropertyFlags.OmitNull);

    if (aMove && !bMove) {
      return -1;
    } else if (!aMove && bMove) {
      return 1;
    } else {
      return 0;
    }
  });
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

function strToNum(data: string, simd: boolean = false, offset: number = 0): string[][] {
  const out: string[][] = [];
  let n = data.length;

  while (n >= 8 && simd) {
    out.push(["v128", "i16x8("
      + data.charCodeAt(offset + 0) + ", "
      + data.charCodeAt(offset + 1) + ", "
      + data.charCodeAt(offset + 2) + ", "
      + data.charCodeAt(offset + 3) + ", "
      + data.charCodeAt(offset + 4) + ", "
      + data.charCodeAt(offset + 5) + ", "
      + data.charCodeAt(offset + 6) + ", "
      + data.charCodeAt(offset + 7)
      + ")"]);

    offset += 8;
    n -= 8;
  }

  while (n >= 4) {
    const value = (
      (BigInt(data.charCodeAt(offset + 3)) << 48n) |
      (BigInt(data.charCodeAt(offset + 2)) << 32n) |
      (BigInt(data.charCodeAt(offset + 1)) << 16n) |
      BigInt(data.charCodeAt(offset + 0))
    );
    out.push(["u64", value.toString()]);
    offset += 4;
    n -= 4;
  }

  while (n >= 2) {
    const value = (
      (data.charCodeAt(offset + 1) << 16) |
      data.charCodeAt(offset + 0)
    );
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

function strToStores(data: string, simd: boolean = true): string[] {
  // console.log(data);
  const out: string[] = [];
  const nums = strToNum(data, simd);
  let offset = 0;
  for (const [size, num] of nums) {
    if (size == "v128") {
      out.push("store<v128>(bs.offset, " + num + ", " + offset + "); // " + data.slice((offset >> 1), (offset >> 1) + 8));
      offset += 16;
    }
    if (size == "u64") {
      out.push("store<u64>(bs.offset, " + num + ", " + offset + "); // " + data.slice((offset >> 1), (offset >> 1) + 4));
      offset += 8;
    } else if (size == "u32") {
      out.push("store<u32>(bs.offset, " + num + ", " + offset + "); // " + data.slice((offset >> 1), (offset >> 1) + 2));
      offset += 4;
    } else if (size == "u16") {
      out.push("store<u16>(bs.offset, " + num + ", " + offset + "); // " + data.slice((offset >> 1), (offset >> 1) + 1));
      offset += 2;
    }
  }
  out.push("bs.offset += " + offset + ";");
  return out;
}

function isPrimitive(type: string): boolean {
  const primitiveTypes = [
    "u8", "u16", "u32", "u64",
    "i8", "i16", "i32", "i64",
    "f32", "f64",
    "bool", "boolean"
  ];
  return primitiveTypes.some(v => type.includes(v));
}

function throwError(message: string, range: Range): never {
  const err = new Error();
  err.stack = `${message}\n  at ${range.source.normalizedPath}:${range.source.lineAt(range.start)}:${range.source.columnAt()}\n`;
  throw err;
}

function indentInc(): void {
  indent += "  ";
}

function indentDec(): void {
  indent = indent.slice(0, Math.max(0, indent.length - 2));
}

function sizeof(type: string): number {
  if (type == "u8") return 6;        // -127
  else if (type == "i8") return 8;   // 255
  else if (type == "u16") return 10; // 65536
  else if (type == "i16") return 12; // -32767
  else if (type == "u32") return 20; // 4294967295
  else if (type == "i32") return 22; // -2147483647
  else if (type == "u64") return 40; // 18446744073709551615
  else if (type == "i64") return 40; // -9223372036854775807
  else if (type == "bool" || type == "boolean") return 10;
  else return 0;
}

function allPrimitive(schema: Schema): boolean {
  return !schema.members.some(p => p.byteSize == 0);
}