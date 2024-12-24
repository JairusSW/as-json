import { Parser, Tokenizer, Source, } from "assemblyscript/dist/assemblyscript.js";
import { ASTBuilder } from "./builder.js";
export class SimpleParser {
    static get parser() {
        return new Parser();
    }
    static getTokenizer(s, file = "index.ts") {
        return new Tokenizer(new Source(0, file, s));
    }
    static parseExpression(s) {
        const res = this.parser.parseExpression(this.getTokenizer(s));
        if (res == null) {
            throw new Error("Failed to parse the expression: '" + s + "'");
        }
        return res;
    }
    static parseStatement(s, topLevel = false) {
        const res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
        if (res == null) {
            throw new Error("Failed to parse the statement: '" + s + "'");
        }
        return res;
    }
    static parseTopLevelStatement(s, namespace) {
        const res = this.parser.parseTopLevelStatement(this.getTokenizer(s), namespace);
        if (res == null) {
            throw new Error("Failed to parse the top level statement: '" + s + "'");
        }
        return res;
    }
    static parseClassMember(s, _class) {
        let res = this.parser.parseClassMember(this.getTokenizer(s, _class.range.source.normalizedPath), _class);
        if (res == null) {
            throw new Error("Failed to parse the class member: '" + s + "'");
        }
        return res;
    }
}
let isStdlibRegex = /\~lib\/(?:array|arraybuffer|atomics|builtins|crypto|console|compat|dataview|date|diagnostics|error|function|iterator|map|math|number|object|process|reference|regexp|set|staticarray|string|symbol|table|typedarray|vector|rt\/?|bindings\/|shared\/typeinfo)|util\/|uri|polyfills|memory/;
export function isStdlib(s) {
    let source = s instanceof Source ? s : s.range.source;
    return isStdlibRegex.test(source.internalPath);
}
export function toString(node) {
    return ASTBuilder.build(node);
}
//# sourceMappingURL=util.js.map