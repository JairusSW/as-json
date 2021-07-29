"use strict";
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
const as_1 = require("visitor-as/as");
const visitor_as_1 = require("visitor-as");
// -- Imports
class UnknownTransform extends visitor_as_1.BaseVisitor {
    sources = [];
    ignoredLines = new Set();
    // Method transform.
    visitMethodDeclaration(dec) {
        super.visitMethodDeclaration(dec);
        // @ts-ignore
        console.log(dec);
        console.log('TypeParameters: ', dec.typeParameters);
    }
    // VisitSource utility.
    visitSource(source) {
        // Visit each source
        super.visitSource(source);
    }
}
module.exports = class MyTransform extends as_1.Transform {
    // Trigger the transform after parse.
    afterParse(parser) {
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
