import {
  ClassDeclaration,
  FieldDeclaration,
  Source,
  Parser,
} from "assemblyscript/dist/assemblyscript";
import { toString, isStdlib } from "visitor-as/dist/utils.js";
import { BaseVisitor, SimpleParser } from "visitor-as/dist/index.js";
import { Transform } from "assemblyscript/dist/transform.js";

class SchemaData {
  public keys: string[] = [];
  public values: string[] = [];
  public types: string[] = [];
  public name: string = "";
  public parent: string = "";
  public node!: ClassDeclaration;
  public encodeStmts: string[] = [];
  public setDataStmts: string[] = [];
  public initializeStmts: string[] = [];
}

class AsJSONTransform extends BaseVisitor {
  public schemasList: SchemaData[] = [];
  public currentClass!: SchemaData;
  public sources: Source[] = [];

  visitMethodDeclaration(): void { }
  visitClassDeclaration(node: ClassDeclaration): void {
    const className = node.name.text;
    if (!node.decorators?.length) return;
    let foundDecorator = false;
    for (const decorator of node.decorators!) {
      if (
        // @ts-ignore
        decorator.name.text.toLowerCase() == "json" ||
        // @ts-ignore
        decorator.name.text.toLowerCase() == "serializable"
      )
        foundDecorator = true;
    }
    if (!foundDecorator) return;

    // Prevent from being triggered twice.
    for (const member of node.members) {
      if (member.name.text == "__JSON_Serialize") return;
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
      const parentSchema = this.schemasList.find(
        (v) => v.name == this.currentClass.parent
      );
      if (parentSchema?.encodeStmts) {
        parentSchema?.encodeStmts.push(parentSchema?.encodeStmts.pop() + ",");
        this.currentClass.encodeStmts.push(...parentSchema?.encodeStmts);
      }
    }

    const parentSchema = this.schemasList.find(
      (v) => v.name == this.currentClass.parent
    );
    const members = [
      ...node.members,
      ...(parentSchema ? parentSchema.node.members : []),
    ];

    for (const mem of members) {
      // @ts-ignore
      if (mem.type && mem.type.name && mem.type.name.identifier.text) {
        const member = mem as FieldDeclaration;
        if (toString(member).startsWith("static")) return;
        const lineText = toString(member);
        if (lineText.startsWith("private")) return;

        // @ts-ignore
        let type = toString(member.type);

        const name = member.name.text;
        let aliasName = name;
        if (member.decorators && member.decorators[0]?.name.text === "alias") {
          if (member.decorators[0] && member.decorators[0].args![0]) {
            aliasName = member.decorators[0].args![0].value;
          }
        }
        this.currentClass.keys.push(name);
        // @ts-ignore
        this.currentClass.types.push(type);
        // @ts-ignore
        if (
          [
            "u8",
            "i8",
            "u16",
            "i16",
            "u32",
            "i32",
            "u64",
            "i64",
          ].includes(type.toLowerCase())
        ) {
          this.currentClass.encodeStmts.push(
            `"${aliasName}":\${this.${name}.toString()},`
          );
          // @ts-ignore
          this.currentClass.setDataStmts.push(
            `if (key.equals("${aliasName}")) {
        this.${name} = __atoi_fast<${type}>(data, val_start << 1, val_end << 1);
        return;
      }
      `
          );
          if (member.initializer) {
            this.currentClass.initializeStmts.push(
              `this.${name} = ${toString(member.initializer)}`
            );
          }
        } else // @ts-ignore
          if (
            [
              "f32",
              "f64",
            ].includes(type.toLowerCase())
          ) {
            this.currentClass.encodeStmts.push(
              `"${aliasName}":\${this.${name}.toString()},`
            );
            // @ts-ignore
            this.currentClass.setDataStmts.push(
              `if (key.equals("${aliasName}")) {
        this.${name} = __parseObjectValue<${type}>(data.slice(val_start, val_end), initializeDefaultValues);
        return;
      }
      `
            );
            if (member.initializer) {
              this.currentClass.initializeStmts.push(
                `this.${name} = ${toString(member.initializer)}`
              );
            }
          } else {
            this.currentClass.encodeStmts.push(
              `"${aliasName}":\${JSON.stringify<${type}>(this.${name})},`
            );
            // @ts-ignore
            this.currentClass.setDataStmts.push(
              `if (key.equals("${aliasName}")) {
        this.${name} = __parseObjectValue<${type}>(val_start ? data.slice(val_start, val_end) : data, initializeDefaultValues);
        return;
      }
      `
            );
            if (member.initializer) {
              this.currentClass.initializeStmts.push(
                `this.${name} = ${toString(member.initializer)}`
              );
            }
          }
      }
    }

    let serializeFunc = "";

    if (this.currentClass.encodeStmts.length > 0) {
      const stmt =
        this.currentClass.encodeStmts[
        this.currentClass.encodeStmts.length - 1
        ]!;
      this.currentClass.encodeStmts[this.currentClass.encodeStmts.length - 1] =
        stmt!.slice(0, stmt.length - 1);
      serializeFunc = `
      @inline __JSON_Serialize(): string {
        return \`{${this.currentClass.encodeStmts.join("")}}\`;
      }
      `;
    } else {
      serializeFunc = `
      @inline __JSON_Serialize(): string {
        return "{}";
      }
      `;
    }

    // Odd behavior here... When pairing this transform with asyncify, having @inline on __JSON_Set_Key<T> with a generic will cause it to freeze.
    // Binaryen cannot predict and add/mangle code when it is genericed.
    const setKeyFunc = `
      __JSON_Set_Key<__JSON_Key_Type>(key: __JSON_Key_Type, data: string, val_start: i32, val_end: i32, initializeDefaultValues: boolean): void {
        ${
      // @ts-ignore
      this.currentClass.setDataStmts.join("")
      }
      }
    `;

    let initializeFunc = "";

    if (this.currentClass.initializeStmts.length > 0) {
      initializeFunc = `
      @inline __JSON_Initialize(): void {
      ${this.currentClass.initializeStmts.join(";\n")};
      }
      `;
    } else {
      initializeFunc = `
      @inline __JSON_Initialize(): void {}
      `;
    }
    const serializeMethod = SimpleParser.parseClassMember(serializeFunc, node);
    node.members.push(serializeMethod);

    const setDataMethod = SimpleParser.parseClassMember(setKeyFunc, node);
    node.members.push(setDataMethod);

    const initializeMethod = SimpleParser.parseClassMember(initializeFunc, node);
    node.members.push(initializeMethod);

    this.schemasList.push(this.currentClass);
    console.log(toString(node));
  }
  visitSource(node: Source): void {
    super.visitSource(node);
  }
}

export default class Transformer extends Transform {
  // Trigger the transform after parse.
  afterParse(parser: Parser): void {
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
        const parent = schemas.find((v) => v.name === schema.parent);
        if (!parent) throw new Error(`Class ${schema.name} extends its parent class ${schema.parent}, but ${schema.parent} does not include a @json or @serializable decorator! Add the decorator and rebuild.`);
      }
    }
  }
}
