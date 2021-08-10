import { TypeNode, ClassDeclaration, Expression, Token, IndexSignature, ElementAccessExpression, ClassExpression, ExpressionStatement, ArrayLiteralExpression, FieldDeclaration, Statement, BinaryExpression, VariableStatement, TypeParameterNode, TypeName, TypeDeclaration, Transform, ObjectLiteralExpression, FunctionDeclaration, Parser, Source, FunctionExpression, FunctionTypeNode } from "visitor-as/as";
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

// Replace Next Line
const replaceNextLineRegex = /^\W*\/\/ <replace next line>.*$/gm;

class JSONTransformer extends BaseVisitor {
  public currentClass?: ClassDeclaration;
  public encodeStmts = new Map<string, string[]>()
  public decodeCode = new Map<string, string[]>()
  public lastType: string = ''
  public sources: Source[] = []

  private globalStatements: Statement[] = []
  public replaceNextLines = new Set<number>()

  /*visitBinaryExpression(node: BinaryExpression): void {
    super.visitBinaryExpression(node)
    const leftText = node.range.source.text.slice(node.left.range.start, node.left.range.end)
    if (node.operator === Token.EQUALS && leftText.includes('[') && leftText[leftText.length - 1] === ']') {
      const replaceExpression = SimpleParser.parseExpression(`${leftText.split('[')[0]}[u32(changetype<usize>(${leftText.slice(leftText.indexOf('[') + 1, leftText.length - 1)}))]`)
      node.left = replaceExpression
      this.sources.push(replaceExpression.range.source)
    }
  }*/

  visitElementAccessExpression(node: ElementAccessExpression): void {
    super.visitElementAccessExpression(node)
    if (toString(node.expression) === 'o') {
      const replacer = SimpleParser.parseExpression(`u32(changetype<usize>(${toString(node.elementExpression)}))`)
      node.elementExpression = replacer
      this.sources.push(replacer.range.source)
      console.log(toString(node))
    }
  }
  visitArrayLiteralExpression(node: ArrayLiteralExpression): void {
    super.visitArrayLiteralExpression(node)
    if (isanyArray(node)) {
      for (let i = 0; i < node.elementExpressions.length; i++) {
        const expr = node.elementExpressions[i]
        // @ts-ignore
        let replacement
        // @ts-ignore
        if (expr.elementExpressions) {
          // @ts-ignore
          this.convertToAnyArray(expr.elementExpressions)
        }
        // @ts-ignore
        replacement = SimpleParser.parseExpression(`unknown.wrap(${toString(expr)})`)
        node.elementExpressions[i] = replacement
        this.sources.push(replacement.range.source)

      }
    }
  }
  convertToAnyArray(exprs: Expression[]): void {
    for (let i = 0; i < exprs.length; i++) {
      const expr = exprs[i]
      // @ts-ignore
      let replacement
      // @ts-ignore
      if (expr.elementExpressions) {
        // @ts-ignore
        this.convertToAnyArray(expr.exprs)
      }
      // @ts-ignore
      replacement = SimpleParser.parseExpression(`unknown.wrap(${toString(expr)})`)
      exprs[i] = replacement
      this.sources.push(replacement.range.source)
    }
  }
  visitFieldDeclaration(node: FieldDeclaration): void {
    super.visitFieldDeclaration(node)
    const name = toString(node.name);
    if (!node.type) {
      throw new Error(`Field ${name} is missing a type declaration`);
    }

    const type = getTypeName(node.type);
    if (this.currentClass) {
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

  }

  visitClassDeclaration(node: ClassDeclaration): void {
    super.visitClassDeclaration(node)
    if (!node.members) {
      return;
    }

    this.currentClass = node;

    const name = getName(node);

    this.encodeStmts.delete(name);
    this.decodeCode.delete(name);
    this.visit(node.members);

    const encodedProp = `__encoded: string = ''`

    let encodeMethod = ``

    if (this.encodeStmts.has(name) && this.encodeStmts.get(name)) {
      encodeMethod = `
      __encode(): void {
        if (!this.__encoded) {
          ${// @ts-ignore
        this.encodeStmts.get(name).join("\n")};
          this.__encoded = this.__encoded.slice(0, this.__encoded.length - 1)
        }
      }
      `
    } else {
      encodeMethod = `
      __encode(): void {}
      `
    }

    const decodeMethod = `
    __decode(values: Map<string, string>): ${name} {
        const decoded: ${name} = {
          ${// @ts-ignore
      this.decodeCode.get(name) ? this.decodeCode.get(name).join("") : ''}
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
    new JSONTransformer().visit(node);
  }
  visitSource(source: Source) {
    const text = source.text
    this.globalStatements = []
    const foundRPNL = text.matchAll(replaceNextLineRegex)
    for (const ignored of foundRPNL) {
      // Calculate line coordinates from linecol
      const line = this.linecol.fromIndex(ignored.index!).line + 1
      // Add it into the set.
      this.replaceNextLines.add(line)
    }
    super.visitSource(source)
  }
}
/*
class Encoder extends Decorator {
  visitClassDeclaration(node: ClassDeclaration): void {
    JSONTransformer.visit(node);
  }

  get name(): string {
    return "json";
  }

  get sourceFilter() {
    return (_: any) => true;
  }
}

export = registerDecorator(new Encoder());*/

export = class MyTransform extends Transform {
  // Trigger the transform after parse.
  afterParse(parser: Parser): void {
    // Create new transform
    const transformer = new JSONTransformer();
    // Loop over every source
    for (const source of parser.sources) {
      // Ignore all lib (std lib). Visit everything else.
      if (!source.isLibrary && !source.internalPath.startsWith(`~lib/`)) {
        transformer.visit(source);
      }
    }
    let i = 0
    for (const source of transformer.sources) {
      //source.internalPath += `${i++}.ts`
      console.log(source.internalPath)
      if (i === 0) {
        parser.sources.push(source)
        i++
      }
    }
  }
}

function isanyArray(node: ArrayLiteralExpression): boolean {
  if (node.elementExpressions.length === 0) return false
  const firstKind = node.elementExpressions[0]?.kind
  const isBoolean = (toString(node.elementExpressions[0]!) === 'true' || toString(node.elementExpressions[0]!) === 'false')
  for (const chunk of node.elementExpressions) {
    if (isBoolean) {
      if (toString(chunk) !== 'true' || toString(chunk) !== 'false') true
    } else if (chunk.kind !== firstKind) return true
  }
  return false
}