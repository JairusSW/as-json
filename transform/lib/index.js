"use strict";
const as_1 = require("visitor-as/as");
const visitor_as_1 = require("visitor-as");
const utils_1 = require("visitor-as/dist/utils");
function getTypeName(type) {
    let _type = utils_1.getName(type);
    const OR_NULL = /\|.*null/;
    if (type.isNullable && !OR_NULL.test(_type)) {
        _type = `${_type} | null`;
    }
    return _type;
}
// Replace Next Line
const replaceNextLineRegex = /^\W*\/\/ <replace next line>.*$/gm;
class JSONTransformer extends visitor_as_1.BaseVisitor {
    currentClass;
    encodeStmts = new Map();
    decodeCode = new Map();
    lastType = '';
    sources = [];
    globalStatements = [];
    replaceNextLines = new Set();
    /*visitBinaryExpression(node: BinaryExpression): void {
      super.visitBinaryExpression(node)
      const leftText = node.range.source.text.slice(node.left.range.start, node.left.range.end)
      if (node.operator === Token.EQUALS && leftText.includes('[') && leftText[leftText.length - 1] === ']') {
        const replaceExpression = SimpleParser.parseExpression(`${leftText.split('[')[0]}[u32(changetype<usize>(${leftText.slice(leftText.indexOf('[') + 1, leftText.length - 1)}))]`)
        node.left = replaceExpression
        this.sources.push(replaceExpression.range.source)
      }
    }*/
    visitElementAccessExpression(node) {
        super.visitElementAccessExpression(node);
        if (utils_1.toString(node.expression) === 'o') {
            const replacer = visitor_as_1.SimpleParser.parseExpression(`u32(changetype<usize>(${utils_1.toString(node.elementExpression)}))`);
            node.elementExpression = replacer;
            this.sources.push(replacer.range.source);
            console.log(utils_1.toString(node));
        }
    }
    visitArrayLiteralExpression(node) {
        super.visitArrayLiteralExpression(node);
        if (isanyArray(node)) {
            for (let i = 0; i < node.elementExpressions.length; i++) {
                const expr = node.elementExpressions[i];
                // @ts-ignore
                let replacement;
                // @ts-ignore
                if (expr.elementExpressions) {
                    // @ts-ignore
                    this.convertToAnyArray(expr.elementExpressions);
                }
                // @ts-ignore
                replacement = visitor_as_1.SimpleParser.parseExpression(`unknown.wrap(${utils_1.toString(expr)})`);
                node.elementExpressions[i] = replacement;
                this.sources.push(replacement.range.source);
            }
        }
    }
    convertToAnyArray(exprs) {
        for (let i = 0; i < exprs.length; i++) {
            const expr = exprs[i];
            // @ts-ignore
            let replacement;
            // @ts-ignore
            if (expr.elementExpressions) {
                // @ts-ignore
                this.convertToAnyArray(expr.exprs);
            }
            // @ts-ignore
            replacement = visitor_as_1.SimpleParser.parseExpression(`unknown.wrap(${utils_1.toString(expr)})`);
            exprs[i] = replacement;
            this.sources.push(replacement.range.source);
        }
    }
    visitFieldDeclaration(node) {
        super.visitFieldDeclaration(node);
        const name = utils_1.toString(node.name);
        if (!node.type) {
            throw new Error(`Field ${name} is missing a type declaration`);
        }
        const type = getTypeName(node.type);
        if (this.currentClass) {
            const className = this.currentClass.name.text;
            if (!this.encodeStmts.has(className))
                this.encodeStmts.set(className, []);
            if (!this.decodeCode.has(className))
                this.decodeCode.set(className, []);
            // @ts-ignore
            this.encodeStmts.get(className).push(`this.__encoded += '' + '"' + '${name}' + '"' + ':' + JSON.stringify<${type}>(this.${name}) + ',';`);
            // @ts-ignore
            this.decodeCode.get(className).push(`${name}: JSON.parse<${type}>(unchecked(values.get('${name}'))),\n`);
        }
    }
    visitClassDeclaration(node) {
        super.visitClassDeclaration(node);
        if (!node.members) {
            return;
        }
        this.currentClass = node;
        const name = utils_1.getName(node);
        this.encodeStmts.delete(name);
        this.decodeCode.delete(name);
        this.visit(node.members);
        const encodedProp = `__encoded: string = ''`;
        let encodeMethod = ``;
        if (this.encodeStmts.has(name) && this.encodeStmts.get(name)) {
            encodeMethod = `
      __encode(): void {
        if (!this.__encoded) {
          ${ // @ts-ignore
            this.encodeStmts.get(name).join("\n")};
          this.__encoded = this.__encoded.slice(0, this.__encoded.length - 1)
        }
      }
      `;
        }
        else {
            encodeMethod = `
      __encode(): void {}
      `;
        }
        const decodeMethod = `
    __decode(values: Map<string, string>): ${name} {
        const decoded: ${name} = {
          ${ // @ts-ignore
        this.decodeCode.get(name) ? this.decodeCode.get(name).join("") : ''}
        }
      return decoded
    }
    `;
        const encodedPropMember = visitor_as_1.SimpleParser.parseClassMember(encodedProp, node);
        node.members.push(encodedPropMember);
        const encodeMember = visitor_as_1.SimpleParser.parseClassMember(encodeMethod, node);
        node.members.push(encodeMember);
        const decodeMember = visitor_as_1.SimpleParser.parseClassMember(decodeMethod, node);
        node.members.push(decodeMember);
    }
    static visit(node) {
        new JSONTransformer().visit(node);
    }
    visitSource(source) {
        const text = source.text;
        this.globalStatements = [];
        const foundRPNL = text.matchAll(replaceNextLineRegex);
        for (const ignored of foundRPNL) {
            // Calculate line coordinates from linecol
            const line = this.linecol.fromIndex(ignored.index).line + 1;
            // Add it into the set.
            this.replaceNextLines.add(line);
        }
        super.visitSource(source);
    }
}
function isanyArray(node) {
    if (node.elementExpressions.length === 0)
        return false;
    const firstKind = node.elementExpressions[0]?.kind;
    const isBoolean = (utils_1.toString(node.elementExpressions[0]) === 'true' || utils_1.toString(node.elementExpressions[0]) === 'false');
    for (const chunk of node.elementExpressions) {
        if (isBoolean) {
            if (utils_1.toString(chunk) !== 'true' || utils_1.toString(chunk) !== 'false')
                true;
        }
        else if (chunk.kind !== firstKind)
            return true;
    }
    return false;
}
module.exports = class MyTransform extends as_1.Transform {
    // Trigger the transform after parse.
    afterParse(parser) {
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
            //source.internalPath += `${i++}.ts`
            console.log(source.internalPath);
            if (i === 0) {
                parser.sources.push(source);
                i++;
            }
        }
    }
};
