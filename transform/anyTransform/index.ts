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
    BinaryExpression,
    Parser,
    Source,
    Statement,
    Token,
    Transform,
    NodeKind,
} from "visitor-as/as";

import { BaseVisitor } from "visitor-as";
// @ts-ignore
import linecol from "line-column";
import { PropertyAccessExpression } from "assemblyscript";

// Ignored Regex
const ignoredRegex = /^\W*\/\/ @as-covers: ignore.*$/gm;
// -- Imports
class CoverTransform extends BaseVisitor {
    private linecol: any = 0;
    private globalStatements: Statement[] = [];
    public sources: Source[] = [];
    public ignoredLines = new Set<number>();
    // Declare properties.
    visitBinaryExpression(expr: BinaryExpression): void {
        super.visitBinaryExpression(expr);
        const name = expr.range.source.normalizedPath;

        const left = expr.left as PropertyAccessExpression

        const right = expr.right

        if (expr.operator == Token.EQUALS) {
            const leftType = left.range.source.simplePath
            // Crude workaround.
            //if (leftType === 'anyType') {
            console.log('LeftType: ', expr.range.source.text.slice(left.range.start, left.range.end))
            console.log('RightType: ', expr.range.source.text.slice(right.range.start, right.range.end))
            console.log('Left: ', left)
            console.log('Right: ', right)
            // }
        }
    }

    // VisitSource utility.
    visitSource(source: Source) {
        // Grab the file text
        const text: string = source.text;
        // Create globalStatements array.
        this.globalStatements = [];
        // Create linecol function. (Base it off of the file text)
        this.linecol = linecol(text);
        /*// Find @as-covers: ignore comments (Regex)
        const foundIgnores = text.matchAll(ignoredRegex);
        // Loop over all the found results
        for (const ignored of foundIgnores) {
            // Calculate line coordinates from linecol
            const line = this.linecol.fromIndex(ignored.index!).line + 1;
            // Add it into the set.
            this.ignoredLines.add(line);
        }*/
        // Visit each source
        super.visitSource(source);
        // Push global statements to that source.
        source.statements.unshift(...this.globalStatements);
    }
}

// Transform class
export = class MyTransform extends Transform {
    // Trigger the transform after parse.
    afterParse(parser: Parser): void {
        // Create new transform
        const transformer = new CoverTransform();
        // Loop over every source
        for (const source of parser.sources) {
            // Ignore all lib (std lib). Visit everything else.
            if (!source.isLibrary && !source.internalPath.startsWith(`~lib/`)) {
                transformer.visit(source);
            }
        }
        // Create different file names to prevent interference (increment)
        let i = 0;
        for (const source of transformer.sources) {
            source.internalPath += `${i++}.ts`;
            parser.sources.push(source);
            // Modify file names (incremental)
        }
    }
};
