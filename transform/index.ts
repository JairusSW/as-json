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
  public currentClass?: ClassDeclaration;
  public encodeStmts = new Map<string, string[]>()
  public decodeCode = new Map<string, string[]>()

  visitFieldDeclaration(node: FieldDeclaration): void {
    const name = toString(node.name);
    if (!node.type) {
      throw new Error(`Field ${name} is missing a type declaration`);
    }

    const type = getTypeName(node.type);

    const className = this.currentClass!.name.text
    if (!this.encodeStmts.has(className)) this.encodeStmts.set(className, [])
    if (!this.decodeCode.has(className)) this.decodeCode.set(className, [])
    // @ts-ignore
    this.encodeStmts.get(className).push(
      `this.__encoded += '' + '"' + '${name}' + '"' + ':' + JSON.stringify<${type}>(this.${name}) + ',';`
    );

    // @ts-ignore
    this.decodeCode.get(className).push(
      `${name}: JSON.parse<${type}>(unchecked(values.get('${name}'))),\n`
    );

  }

  visitClassDeclaration(node: ClassDeclaration): void {
    if (!node.members) {
      return;
    }

    this.currentClass = node;

    const name = getName(node);

    this.encodeStmts.clear();
    this.decodeCode.clear();
    this.visit(node.members);

    const encodedProp = `__encoded: string = ''`

    const encodeMethod = `
    __encode(): void {
      // Pre-compile (faster)
      if (!this.__encoded) {
        ${// @ts-ignore
          this.encodeStmts.get(name).join("\n")};
        this.__encoded = unchecked(this.__encoded.slice(0, this.__encoded.length - 1))
      }
    }
    `;

    const decodeMethod = `
    __decode(values: Map<string, string>): ${name} {
      const decoded: ${name} = {
        ${// @ts-ignore
          this.decodeCode.get(name).join("")}
      }
      return decoded
    }
    `;

    const encodedPropMember = SimpleParser.parseClassMember(encodedProp, node);
    node.members.push(encodedPropMember);

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
