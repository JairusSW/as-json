import {
  ClassDeclaration,
  FieldDeclaration,
  Source,
  Parser
} from "assemblyscript/dist/assemblyscript";
import { getName, toString, isStdlib } from "visitor-as/dist/utils.js";
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
}
class AsJSONTransform extends BaseVisitor {
  public schemasList: SchemaData[] = [];
  public currentClass!: SchemaData;
  public sources: Source[] = [];

  visitMethodDeclaration(): void { }
  visitFieldDeclaration(node: FieldDeclaration): void {
    if (toString(node).startsWith("static")) return;
    const lineText = toString(node);
    if (lineText.startsWith("private")) return;
    const name = getName(node);
    if (!node.type) {
      throw new Error(`Field ${name} is missing a type declaration`);
    }

    let type = getName(node.type);
    // @ts-ignore
    if (["u8", "i8", "u16", "i16", "u32", "i32", "f32", "u64", "i64", "f64"].includes(type.toLowerCase())) {
      this.currentClass.encodeStmts.push(
        `"${name}":\${this.${name}.toString()},`
      );
    } else {
      this.currentClass.encodeStmts.push(
        `"${name}":\${JSON.stringify<${type}>(this.${name})},`
      );
    }
    
    this.currentClass.keys.push(name);
    this.currentClass.types.push(type);
    // @ts-ignore
    //this.decodeStmts.push(
    //   `${name}: JSON.parseObjectValue<${type}>(values.get("${name}")),\n`
    //);

    // @ts-ignore
    this.currentClass.setDataStmts.push(
      `if (key == "${name}") {
        this.${name} = JSON.parseObjectValue<${type}>(value);
        return;
      }
      `
    );

    // @ts-ignore
    //this.checkDecodeStmts.push(
    //  ' if (!values.has("${name}")) throw new Error("Key "${name}" was not found. Cannot instantiate object.");\n'
    //);
  }
  visitClassDeclaration(node: ClassDeclaration): void {
    const className = node.name.text;
    if (!node.decorators?.length) return;
    let foundDecorator = false;
    for (const decorator of node.decorators!) {
      // @ts-ignore
      if (decorator.name.text.toLowerCase() == "json" || decorator.name.text.toLowerCase() == "serializable") foundDecorator = true;
    }
    if (!foundDecorator) return;

    // Prevent from being triggered twice
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
      setDataStmts: []
    }

    if (this.currentClass.parent.length > 0) {
      const parentSchema = this.schemasList.find((v) => v.name == this.currentClass.parent);
      if (parentSchema?.encodeStmts) {
        parentSchema?.encodeStmts.push(parentSchema?.encodeStmts.pop() + ",");
        this.currentClass.encodeStmts.push(...parentSchema?.encodeStmts);
      } else {
        console.error("Class extends " + this.currentClass.parent + ", but parent class not found. Maybe add the @json decorator over parent class?");
      }
    }

    const parentSchema = this.schemasList.find((v) => v.name == this.currentClass.parent);
    const members = [...node.members, ...(parentSchema ? parentSchema.node.members : [])]
    this.visit(members);

    let serializeFunc = "";

    if (this.currentClass.encodeStmts.length > 0) {
      const stmt = this.currentClass.encodeStmts[this.currentClass.encodeStmts.length - 1]!;
      this.currentClass.encodeStmts[this.currentClass.encodeStmts.length - 1] = stmt!.slice(
        0,
        stmt.length - 1
      );
      serializeFunc = `
      @inline
      __JSON_Serialize(): string {
        return \`{${this.currentClass.encodeStmts.join("")}}\`;
      }
      `;
    } else {
      serializeFunc = `
      @inline
      __JSON_Serialize(): string {
        return "{}";
      }
      `;
    }

    const setKeyFunc = `
      @inline
      __JSON_Set_Key(key: string, value: string): void {
        ${
      // @ts-ignore
      this.currentClass.setDataStmts.join("")
      }
      }
    `
    
    const serializeMethod = SimpleParser.parseClassMember(serializeFunc, node);
    node.members.push(serializeMethod);

    const setDataMethod = SimpleParser.parseClassMember(
      setKeyFunc,
      node
    );
    node.members.push(setDataMethod);

    this.schemasList.push(this.currentClass);
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
    const sources = parser.sources.filter(source => !isStdlib(source)).sort((_a, _b) => {
      const a = _a.internalPath
      const b = _b.internalPath
      if (a[0] === "~" && b[0] !== "~") {
        return -1;
      } else if (a[0] !== "~" && b[0] === "~") {
        return 1;
      } else {
        return 0;
      }
    })
    
    // Loop over every source
    for (const source of sources) {
      // Ignore all lib and std. Visit everything else.
      if (!isStdlib(source)) {
        transformer.visit(source);
      }
    }
  }
};
