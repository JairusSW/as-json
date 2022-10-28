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
  //public decodeStmts: string[] = [];
  public setDataStmts: string[] = [];
  //public checkDecodeStmts: string[] = [];

  visitMethodDeclaration(): void {}
  visitFieldDeclaration(node: FieldDeclaration): void {
    const lineText = toString(node);
    if (lineText.startsWith("private")) return;
    const name = getName(node);
    if (!node.type) {
      throw new Error(`Field ${name} is missing a type declaration`);
    }

    let type = getName(node.type);
    // @ts-ignore
    this.encodeStmts.push(
      `"${name}":\${JSON.stringify<${type}>(this.${name})},`
    );

    // @ts-ignore
    //this.decodeStmts.push(
   //   `${name}: JSON.parseObjectValue<${type}>(values.get("${name}")),\n`
    //);

    // @ts-ignore
    this.setDataStmts.push(
      `if (key.length === ${name.length} && (memory.compare(changetype<usize>("${name}"), changetype<usize>(key), ${name.length}) == 0)) {
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
    if (!node.members) {
      return;
    }

    this.currentClass = node;

    this.visit(node.members);

    const serializedProp = '__JSON_Serialized: string = "";';

    let serializeFunc = "";

    if (this.encodeStmts.length > 0) {
      const stmt = this.encodeStmts[this.encodeStmts.length - 1]!;
      this.encodeStmts[this.encodeStmts.length - 1] = stmt!.slice(
        0,
        stmt.length - 1
      );
      serializeFunc = `
      __JSON_Serialize(): string {
        return \`{${this.encodeStmts.join("")}}\`;
      }
      `;
    } else {
      serializeFunc = `
      __JSON_Serialize(): string {
        return "{}";
      }
      `;
    }
    /*const deserializeFunc = `
    __JSON_Deserialize<T>(values: Map<string, string>): T {
        ${
          process.argv.includes("--debugJSON")
            ? this.checkDecodeStmts.join("else")
            : ""
        }
        return {
          ${
            // @ts-ignore
            this.decodeStmts.join("")
          }
        }
    }
    `;*/
    const setKeyFunc = `
      __JSON_Set_Key(key: string, value: string): void {
        ${
        // @ts-ignore
        this.setDataStmts.join("")
        }
        throw new Error("Cannot find key: " + key);
      }
    `
    //console.log(setKeyFunc, deserializeFunc, serializeFunc)
    this.encodeStmts = [];
    //this.decodeStmts = [];
    this.setDataStmts = [];
    //this.checkDecodeStmts = [];
    const serializedProperty = SimpleParser.parseClassMember(
      serializedProp,
      node
    );
    node.members.push(serializedProperty);

    const serializeMethod = SimpleParser.parseClassMember(serializeFunc, node);
    node.members.push(serializeMethod);

    //const deserializeMethod = SimpleParser.parseClassMember(
    //  deserializeFunc,
    //  node
    //);
    //node.members.push(deserializeMethod);
    const setDataMethod = SimpleParser.parseClassMember(
      setKeyFunc,
      node
    );
    node.members.push(setDataMethod);
  }
  get name(): string {
    return "json";
  }
}

export default registerDecorator(new AsJSONTransform());
