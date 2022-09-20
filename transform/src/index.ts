import {
  ClassDeclaration,
  FieldDeclaration,
  Source,
} from "assemblyscript/dist/assemblyscript";
import {
  ClassDecorator,
  registerDecorator,
} from "visitor-as/dist/decorator.js";
import { getName, toString } from "visitor-as/dist/utils.js";
import { SimpleParser } from "visitor-as/dist/index.js";

class AsJSONTransform extends ClassDecorator {
  public currentClass!: ClassDeclaration;
  public sources: Source[] = [];
  public encodeStmts: string[] = [];
  public decodeStmts: string[] = [];

  visitMethodDeclaration(): void {}
  visitFieldDeclaration(node: FieldDeclaration): void {
    const lineText = toString(node);
    if (lineText.startsWith("private")) return;
    const name = getName(node);
    if (!node.type) {
      throw new Error(`Field ${name} is missing a type declaration`);
    }

    const type = getName(node.type);

    // @ts-ignore
    this.encodeStmts.push(
      `"${name}":\${JSON.stringify<${type}>(this.${name})},`
    );

    // @ts-ignore
    this.decodeStmts.push(
      `${name}: JSON.parseObjectValue<${type}>(values.get("${name}")),\n`
    );
  }
  visitClassDeclaration(node: ClassDeclaration): void {
    if (!node.members) {
      return;
    }

    this.currentClass = node;

    const name = getName(node);

    this.visit(node.members);

    const serializedProp = `__JSON_Serialized: string = "";`;

    let serializeFunc = ``;

    if (this.encodeStmts.length > 0) {
      const stmt = this.encodeStmts[this.encodeStmts.length - 1]!;
      this.encodeStmts[this.encodeStmts.length - 1] = stmt!.slice(
        0,
        stmt.length - 1
      );
      serializeFunc = `
      @inline
      __JSON_Serialize(): string {
        return \`{${this.encodeStmts.join("")}}\`;
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

    const deserializeFunc = `
    @inline
    __JSON_Deserialize(values: Map<string, string>): ${name} {
        return {
          ${
            // @ts-ignore
            this.decodeStmts.join("")
          }
        }
    }
    `;
    this.encodeStmts = [];
    this.decodeStmts = [];
    //console.log(serializeFunc, deserializeFunc)
    const serializedProperty = SimpleParser.parseClassMember(
      serializedProp,
      node
    );
    node.members.push(serializedProperty);

    const serializeMethod = SimpleParser.parseClassMember(serializeFunc, node);
    node.members.push(serializeMethod);

    const deserializeMethod = SimpleParser.parseClassMember(
      deserializeFunc,
      node
    );
    node.members.push(deserializeMethod);
  }
  get name(): string {
    return "json";
  }
}

export default registerDecorator(new AsJSONTransform());
