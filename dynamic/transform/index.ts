/**
 * The primary transform file.
 * Inserts __coverDeclare(...) and __cover(id) to facilitate code coverage.
 * __coverDeclare raises the expected count of instances while
 * __cover raises the executed count.
 * To get results, it goes like this:
 * Uncovered: expected - executed
 * Covered: executed
 * Along with this, we get file coordinates that give us information about where the statement occured.
 * If you have any questions, please contact Joshua Tenner or Jairus Tanaka for information.
 * Also, please view the Contributing Guidelines before submitting changes.
 * Have fun!
 */

// Import visitor-as
import {
    ArrowKind,
    BinaryExpression,
    BlockStatement,
    CommaExpression,
    ExpressionStatement,
    FunctionDeclaration,
    IfStatement,
    MethodDeclaration,
    NodeKind,
    ParameterNode,
    ParenthesizedExpression,
    Parser,
    ReturnStatement,
    Source,
    Statement,
    SwitchCase,
    TernaryExpression,
    Token,
    Transform,
} from "visitor-as/as";

import {  BaseVisitor } from "visitor-as";

// -- Imports
class UnknownTransform extends BaseVisitor {
    public sources: Source[] = [];
    public ignoredLines = new Set<number>();

    // Method transform.
    visitMethodDeclaration(dec: MethodDeclaration): void {
        super.visitMethodDeclaration(dec);
        // @ts-ignore
        console.log(dec)
        console.log('TypeParameters: ', dec.typeParameters!)
    }
    // VisitSource utility.
    visitSource(source: Source) {
        // Visit each source
        super.visitSource(source);
    }
}

// Transform class
export = class MyTransform extends Transform {
    // Trigger the transform after parse.
    afterParse(parser: Parser): void {
        // Create new transform
        const transformer = new UnknownTransform();
        // Loop over every source
        // @ts-ignore
        for (const source of parser.sources) {
            // Ignore all lib (std lib). Visit everything else.
            if (!source.isLibrary && !source.internalPath.startsWith(`~lib/`)) {
                transformer.visit(source);
            }
        }
    }
};
