import { TypeNode, ClassDeclaration, FieldDeclaration } from "visitor-as/as";
import {
  SimpleParser,
  BaseVisitor,
  registerDecorator,
  Decorator,
} from "visitor-as";
import { toString, getName } from "visitor-as/dist/utils";

function getTypeName(type: TypeNode): string {
  let _type = getName(type);
  const OR_NULL = /\|.*null/;
  if (type.isNullable && !OR_NULL.test(_type)) {
    _type = `${_type} | null`;
  }
  return _type;
}

class MethodInjector extends BaseVisitor {
  currentClass?: ClassDeclaration;
  public encodeStmts: string[] = [];
  public decodeCode: string[] = [];

  visitFieldDeclaration(node: FieldDeclaration): void {
    const name = toString(node.name);
    if (!node.type) {
      throw new Error(`Field ${name} is missing a type declaration`);
    }

    const type = getTypeName(node.type);

    this.encodeStmts.push(
      `encoded += '' + '"' + '${name}' + '"' + ':' + JSON.stringify<${type}>(this.${name}) + ',';`
    );

    this.decodeCode.push(
      `${name}: JSON.parse<${type}>(values[${this.decodeCode.length}]),\n`
    );
  }

  visitClassDeclaration(node: ClassDeclaration): void {
    if (!node.members) {
      return;
    }

    this.currentClass = node;

    const name = getName(node);

    this.encodeStmts = [];
    this.decodeCode = [];
    this.visit(node.members);

    const encodeMethod = `
    __encode(): string {
      let encoded: string = "";
      ${this.encodeStmts.join(";\n\t")};
      return encoded
    }
    `;

    const decodeMethod = `
    __decode(values: Array<string>): ${name} {
      const decoded: ${name} = {
        ${this.decodeCode.join("")}
      }
      return decoded
    }
    `;

    const encodeMember = SimpleParser.parseClassMember(encodeMethod, node);
    node.members.push(encodeMember);

    const decodeMember = SimpleParser.parseClassMember(decodeMethod, node);
    node.members.push(decodeMember);
  }

  static visit(node: ClassDeclaration): void {
    new MethodInjector().visit(node);
  }
}

class Encoder extends Decorator {
  visitClassDeclaration(node: ClassDeclaration): void {
    MethodInjector.visit(node);
  }

  get name(): string {
    return "json";
  }

  get sourceFilter() {
    return (_: any) => true;
  }
}

export = registerDecorator(new Encoder());
