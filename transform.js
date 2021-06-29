"use strict";
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
class MethodInjector extends visitor_as_1.BaseVisitor {
    currentClass;
    encodeStmts = [];
    decodeCode = [];
    visitFieldDeclaration(node) {
        const name = utils_1.toString(node.name);
        if (!node.type) {
            throw new Error(`Field ${name} is missing a type declaration`);
        }
        const type = getTypeName(node.type);
        this.encodeStmts.push(`this.__encoded += '' + '"' + '${name}' + '"' + ':' + JSON.stringify<${type}>(this.${name}) + ',';`);
        this.decodeCode.push(`${name}: JSON.parse<${type}>(values[${this.decodeCode.length}]),\n`);
    }
    visitClassDeclaration(node) {
        if (!node.members) {
            return;
        }
        this.currentClass = node;
        const name = utils_1.getName(node);
        this.encodeStmts = [];
        this.decodeCode = [];
        this.visit(node.members);
        const encodedProp = `__encoded: string = ''`;
        const encodeMethod = `
    __encode(): void {
      // Pre-compile (faster)
      if (!this.__encoded) {
        ${this.encodeStmts.join("\n")};
        this.__encoded = unchecked(this.__encoded.slice(0, this.__encoded.length - 1))
      }
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
        const encodedPropMember = visitor_as_1.SimpleParser.parseClassMember(encodedProp, node);
        node.members.push(encodedPropMember);
        const encodeMember = visitor_as_1.SimpleParser.parseClassMember(encodeMethod, node);
        node.members.push(encodeMember);
        const decodeMember = visitor_as_1.SimpleParser.parseClassMember(decodeMethod, node);
        node.members.push(decodeMember);
    }
    static visit(node) {
        new MethodInjector().visit(node);
    }
}
class Encoder extends visitor_as_1.Decorator {
    visitClassDeclaration(node) {
        MethodInjector.visit(node);
    }
    get name() {
        return "json";
    }
    get sourceFilter() {
        return (_) => true;
    }
}
module.exports = visitor_as_1.registerDecorator(new Encoder());
