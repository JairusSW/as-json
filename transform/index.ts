import { TypeNode, ClassDeclaration, FieldDeclaration, VariableStatement, TypeParameterNode, TypeName, TypeDeclaration, Transform, ObjectLiteralExpression, FunctionDeclaration, Parser, Source, FunctionExpression, FunctionTypeNode } from "visitor-as/as";
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

class JSONTransformer extends BaseVisitor {
  public currentClass?: ClassDeclaration;
  public encodeStmts = new Map<string, string[]>()
  public decodeCode = new Map<string, string[]>()
  public lastType: string = ''
  public sources: Source[] = []
  /*
    visitTypeDeclaration(node: TypeDeclaration): void {
      const type = node.range.source.text.slice(node.range.start, node.range.end)
      console.log(`Type: ${type}`)
      this.lastType = type
    }
  
    visitObjectLiteralExpression(node: ObjectLiteralExpression): void {
      const keys = new Array<string>()
      const values = new Array<any>()
      let schemaClass = `class __schema${nanoid().replaceAll('-', '').replaceAll('_', '')} {\n`
      let keysLength = node.names.length
      while (keysLength--) {
        const key = node.names[keysLength]?.text!
        keys.unshift(key)
      }
      let valuesLength = node.values.length
      while (valuesLength--) {
        // @ts-ignore
        const value = removeJSONWhitespace(toString(node.values[valuesLength]))
        values.unshift(value)
      }
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const value = values[i]
        schemaClass += `\t${key}: ${getType(value)}\n`
      }
      schemaClass += '}'
      console.log('Values: ', values)
      console.log('Keys: ', keys)
      console.log('Class: ', schemaClass)
    }
  
    visitVariableStatement(node: VariableStatement): void {
      //console.log(node)
      if (toString(node.declarations[0]?.name!).includes('__schema')) return
      const replaceStatement = SimpleParser.parseStatement(`const testObject: __schema = {
      string: 'A string!',
      float: 3.14,
      integer: 314
      }`) as VariableStatement
  
      node = replaceStatement
  
      console.log(node.range.source.text.slice(node.range.start, node.range.end))
      this.sources.push(node.range.source)
    }
  */
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
    super.visitSource(source)
  }
}

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

export = registerDecorator(new Encoder());/*

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
    let i = 0;
    for (const source of transformer.sources) {
      source.internalPath += `${i++}.ts`;
      parser.sources.push(source);
      console.log(source.internalPath)
    }
  }
}

function getType(data: string): string {
  const start: string = data.charAt(0)
  if (start == '"' || start == '\'' || start == '`') return `string`
  else if (start == 't' || start == 'f') return `boolean`
  else if (start == '{') return `object`
  else if (start == '[') return `array`
  else if (start == 'n') return `null`
  else if (data.includes('.')) return `f64`
  else return `i32`
}

function removeJSONWhitespace(data: string): string {
  let result = ''
  let instr = false
  for (let i = 0; i < data.length; i++) {
    const char = data[i]
    if (char === '"' && data[i - 1] === '\\') {
      instr = instr ? false : true
    }
    if (instr === true) {
      result += char
    } else if (instr === false && char !== ' ' && char !== '\\' && char !== 'n') {
      result += char
    }
  }
  return result
}*/