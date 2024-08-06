import { IntegerLiteralExpression, Node, } from "assemblyscript/dist/assemblyscript.js";
import { Transform } from "assemblyscript/dist/transform.js";
import { toString } from "visitor-as/dist/utils.js";
import { Visitor } from "./visitor.js";
class AFAFTransform extends Visitor {
    constructor() {
        super(...arguments);
        this.topStmts = [];
        this.seenLits = new Set();
    }
    changeInt(_node) {
        if (!_node)
            return null;
        if (!(_node instanceof IntegerLiteralExpression))
            return null;
        const node = _node;
        const val = i64_to_string(node.value);
        if (this.seenLits.has(val))
            return Node.createIdentifierExpression("_" + val, node.range);
        const variable = Node.createVariableStatement(null, [
            Node.createVariableDeclaration(Node.createIdentifierExpression("_" + val, node.range), null, 8 /* CommonFlags.Const */, null, node, node.range)
        ], node.range);
        const reference = Node.createIdentifierExpression("_" + val, node.range);
        this.topStmts.push(variable);
        this.seenLits.add(val);
        return reference;
    }
    visitBinaryExpression(node) {
        super.visitBinaryExpression(node);
        const left = node.left;
        const right = node.right;
        node.left = this.changeInt(left) || node.left;
        node.right = this.changeInt(right) || node.right;
    }
    visitParenthesizedExpression(node) {
        super.visitParenthesizedExpression(node);
        node.expression = this.changeInt(node.expression) || node.expression;
    }
    visitCallExpression(node) {
        for (let i = 0; i < node.args.length; i++) {
            // @ts-ignore
            node.args[i] = this.changeInt(node.args[i]) || node.args[i];
        }
    }
    visitSource(node) {
        super.visitSource(node);
        this.seenLits.clear();
        for (const stmt of this.topStmts) {
            node.statements.unshift(stmt);
        }
        if (this.topStmts) {
            console.log(node.normalizedPath + "\n\n" + toString(node));
            this.topStmts = [];
        }
    }
}
export default class Transformer extends Transform {
    // Trigger the transform after parse.
    afterParse(parser) {
        // Create new transform
        const transformer = new AFAFTransform();
        // Sort the sources so that user scripts are visited last
        const sources = parser.sources
            .sort((_a, _b) => {
            const a = _a.internalPath;
            const b = _b.internalPath;
            if (a[0] === "~" && b[0] !== "~") {
                return -1;
            }
            else if (a[0] !== "~" && b[0] === "~") {
                return 1;
            }
            else {
                return 0;
            }
        });
        // Loop over every source
        for (const source of sources) {
            if (source.sourceKind === 1 /* SourceKind.UserEntry */)
                transformer.visit(source);
        }
    }
}
