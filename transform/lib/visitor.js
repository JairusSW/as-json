export class Visitor {
    currentSource = null;
    depth = 0;
    visit(node) {
        if (node == null)
            return;
        if (node instanceof Array) {
            node.map((node) => this.visit(node));
        }
        else {
            this._visit(node);
        }
    }
    _visit(node) {
        switch (node.kind) {
            case 0:
                this.visitSource(node);
                break;
            case 1:
                this.visitNamedTypeNode(node);
                break;
            case 2:
                this.visitFunctionTypeNode(node);
                break;
            case 3:
                this.visitTypeName(node);
                break;
            case 4:
                this.visitTypeParameter(node);
                break;
            case 6:
                this.visitIdentifierExpression(node);
                break;
            case 7:
                this.visitAssertionExpression(node);
                break;
            case 8:
                this.visitBinaryExpression(node);
                break;
            case 9:
                this.visitCallExpression(node);
                break;
            case 10:
                this.visitClassExpression(node);
                break;
            case 11:
                this.visitCommaExpression(node);
                break;
            case 12:
                this.visitElementAccessExpression(node);
                break;
            case 14:
                this.visitFunctionExpression(node);
                break;
            case 15:
                this.visitInstanceOfExpression(node);
                break;
            case 16:
                this.visitLiteralExpression(node);
                break;
            case 17:
                this.visitNewExpression(node);
                break;
            case 20:
                this.visitParenthesizedExpression(node);
                break;
            case 21:
                this.visitPropertyAccessExpression(node);
                break;
            case 22:
                this.visitTernaryExpression(node);
                break;
            case 27:
                this.visitUnaryPostfixExpression(node);
                break;
            case 28:
                this.visitUnaryPrefixExpression(node);
                break;
            case 30:
                this.visitBlockStatement(node);
                break;
            case 31:
                this.visitBreakStatement(node);
                break;
            case 32:
                this.visitContinueStatement(node);
                break;
            case 33:
                this.visitDoStatement(node);
                break;
            case 34:
                this.visitEmptyStatement(node);
                break;
            case 35:
                this.visitExportStatement(node);
                break;
            case 36:
                this.visitExportDefaultStatement(node);
                break;
            case 37:
                this.visitExportImportStatement(node);
                break;
            case 38:
                this.visitExpressionStatement(node);
                break;
            case 39:
                this.visitForStatement(node);
                break;
            case 41:
                this.visitIfStatement(node);
                break;
            case 42:
                this.visitImportStatement(node);
                break;
            case 43:
                this.visitReturnStatement(node);
                break;
            case 44:
                this.visitSwitchStatement(node);
                break;
            case 45:
                this.visitThrowStatement(node);
                break;
            case 46:
                this.visitTryStatement(node);
                break;
            case 47:
                this.visitVariableStatement(node);
                break;
            case 49:
                this.visitWhileStatement(node);
                break;
            case 51:
                this.visitClassDeclaration(node);
                break;
            case 52:
                this.visitEnumDeclaration(node);
                break;
            case 53:
                this.visitEnumValueDeclaration(node);
                break;
            case 54:
                this.visitFieldDeclaration(node);
                break;
            case 55:
                this.visitFunctionDeclaration(node);
                break;
            case 56:
                this.visitImportDeclaration(node);
                break;
            case 57:
                this.visitInterfaceDeclaration(node);
                break;
            case 58:
                this.visitMethodDeclaration(node);
                break;
            case 59:
                this.visitNamespaceDeclaration(node);
                break;
            case 60:
                this.visitTypeDeclaration(node);
                break;
            case 61:
                this.visitVariableDeclaration(node);
                break;
            case 62:
                this.visitDecoratorNode(node);
                break;
            case 63:
                this.visitExportMember(node);
                break;
            case 64:
                this.visitSwitchCase(node);
                break;
            case 65:
                this.visitIndexSignature(node);
                break;
            case 18:
                this.visitNullExpression(node);
                break;
            case 25: {
                this.visitTrueExpression(node);
                break;
            }
            case 13: {
                this.visitFalseExpression(node);
                break;
            }
            case 29: {
                this.visitCompiledExpression(node);
                break;
            }
            case 26: {
                this.visitConstructorExpression(node);
                break;
            }
            case 66: {
                this.visitComment(node);
                break;
            }
            case 40: {
                this.visitForOfStatement(node);
                break;
            }
            case 50: {
                this.visitModuleDeclaration(node);
                break;
            }
            case 19: {
                this.visitOmittedExpression(node);
                break;
            }
            case 5: {
                this.visitParameter(node);
                break;
            }
            case 23: {
                this.visitSuperExpression(node);
                break;
            }
            case 24: {
                this.visitThisExpression(node);
                break;
            }
            case 48: {
                this.visitVoidStatement(node);
                break;
            }
            default:
                throw new Error("Could not visit invalid type!");
        }
    }
    visitSource(node) {
        this.currentSource = node;
        this.visit(node.statements);
        this.currentSource = null;
    }
    visitTypeNode(node) { }
    visitTypeName(node) {
        this.visit(node.identifier);
        this.visit(node.next);
    }
    visitNamedTypeNode(node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    }
    visitFunctionTypeNode(node) {
        this.visit(node.parameters);
        this.visit(node.returnType);
        this.visit(node.explicitThisType);
    }
    visitTypeParameter(node) {
        this.visit(node.name);
        this.visit(node.extendsType);
        this.visit(node.defaultType);
    }
    visitIdentifierExpression(node) { }
    visitArrayLiteralExpression(node) {
        this.visit(node.elementExpressions);
    }
    visitObjectLiteralExpression(node) {
        this.visit(node.names);
        this.visit(node.values);
    }
    visitAssertionExpression(node) {
        this.visit(node.toType);
        this.visit(node.expression);
    }
    visitBinaryExpression(node) {
        this.visit(node.left);
        this.visit(node.right);
    }
    visitCallExpression(node) {
        this.visit(node.expression);
        this.visitArguments(node.typeArguments, node.args);
    }
    visitArguments(typeArguments, args) {
        this.visit(typeArguments);
        this.visit(args);
    }
    visitClassExpression(node) {
        this.visit(node.declaration);
    }
    visitCommaExpression(node) {
        this.visit(node.expressions);
    }
    visitElementAccessExpression(node) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    }
    visitFunctionExpression(node) {
        this.visit(node.declaration);
    }
    visitLiteralExpression(node) {
        switch (node.literalKind) {
            case 0:
                this.visitFloatLiteralExpression(node);
                break;
            case 1:
                this.visitIntegerLiteralExpression(node);
                break;
            case 2:
                this.visitStringLiteralExpression(node);
                break;
            case 3:
                this.visitTemplateLiteralExpression(node);
                break;
            case 4:
                this.visitRegexpLiteralExpression(node);
                break;
            case 5:
                this.visitArrayLiteralExpression(node);
                break;
            case 6:
                this.visitObjectLiteralExpression(node);
                break;
            default:
                throw new Error("Invalid LiteralKind at visitLiteralExpression(): " + node.literalKind);
        }
    }
    visitFloatLiteralExpression(node) { }
    visitInstanceOfExpression(node) {
        this.visit(node.expression);
        this.visit(node.isType);
    }
    visitIntegerLiteralExpression(node) { }
    visitStringLiteral(str, singleQuoted = false) { }
    visitStringLiteralExpression(node) {
        this.visitStringLiteral(node.value);
    }
    visitTemplateLiteralExpression(node) { }
    visitRegexpLiteralExpression(node) { }
    visitNewExpression(node) {
        this.visit(node.typeArguments);
        this.visitArguments(node.typeArguments, node.args);
        this.visit(node.args);
    }
    visitParenthesizedExpression(node) {
        this.visit(node.expression);
    }
    visitPropertyAccessExpression(node) {
        this.visit(node.property);
        this.visit(node.expression);
    }
    visitTernaryExpression(node) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    }
    visitUnaryExpression(node) {
        this.visit(node.operand);
    }
    visitUnaryPostfixExpression(node) {
        this.visit(node.operand);
    }
    visitUnaryPrefixExpression(node) {
        this.visit(node.operand);
    }
    visitSuperExpression(node) { }
    visitFalseExpression(node) { }
    visitTrueExpression(node) { }
    visitThisExpression(node) { }
    visitNullExpression(node) { }
    visitConstructorExpression(node) { }
    visitNodeAndTerminate(statement) { }
    visitBlockStatement(node) {
        this.visit(node.statements);
    }
    visitBreakStatement(node) {
        this.visit(node.label);
    }
    visitContinueStatement(node) {
        this.visit(node.label);
    }
    visitClassDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        if (node.isGeneric ? node.typeParameters != null : node.typeParameters == null) {
            this.visit(node.typeParameters);
            this.visit(node.extendsType);
            this.visit(node.implementsTypes);
            this.visit(node.members);
        }
        else {
            throw new Error("Expected to type parameters to match class declaration, but found type mismatch instead!");
        }
    }
    visitDoStatement(node) {
        this.visit(node.condition);
        this.visit(node.body);
    }
    visitEmptyStatement(node) { }
    visitEnumDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    }
    visitEnumValueDeclaration(node) {
        this.visit(node.name);
        this.visit(node.initializer);
    }
    visitExportImportStatement(node) {
        this.visit(node.name);
        this.visit(node.externalName);
    }
    visitExportMember(node) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    }
    visitExportStatement(node) {
        this.visit(node.path);
        this.visit(node.members);
    }
    visitExportDefaultStatement(node) {
        this.visit(node.declaration);
    }
    visitExpressionStatement(node) {
        this.visit(node.expression);
    }
    visitFieldDeclaration(node) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
        this.visit(node.decorators);
    }
    visitForStatement(node) {
        this.visit(node.initializer);
        this.visit(node.condition);
        this.visit(node.incrementor);
        this.visit(node.body);
    }
    visitFunctionDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.visit(node.body);
    }
    visitIfStatement(node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        this.visit(node.ifFalse);
    }
    visitImportDeclaration(node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    }
    visitImportStatement(node) {
        this.visit(node.namespaceName);
        this.visit(node.declarations);
    }
    visitIndexSignature(node) {
        this.visit(node.keyType);
        this.visit(node.valueType);
    }
    visitInterfaceDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.implementsTypes);
        this.visit(node.extendsType);
        this.visit(node.members);
    }
    visitMethodDeclaration(node) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.visit(node.decorators);
        this.visit(node.body);
    }
    visitNamespaceDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    }
    visitReturnStatement(node) {
        this.visit(node.value);
    }
    visitSwitchCase(node) {
        this.visit(node.label);
        this.visit(node.statements);
    }
    visitSwitchStatement(node) {
        this.visit(node.condition);
        this.visit(node.cases);
    }
    visitThrowStatement(node) {
        this.visit(node.value);
    }
    visitTryStatement(node) {
        this.visit(node.bodyStatements);
        this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    }
    visitTypeDeclaration(node) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    }
    visitVariableDeclaration(node) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
    }
    visitVariableStatement(node) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    }
    visitWhileStatement(node) {
        this.visit(node.condition);
        this.visit(node.body);
    }
    visitVoidStatement(node) { }
    visitComment(node) { }
    visitDecoratorNode(node) {
        this.visit(node.name);
        this.visit(node.args);
    }
    visitParameter(node) {
        this.visit(node.name);
        this.visit(node.implicitFieldDeclaration);
        this.visit(node.initializer);
        this.visit(node.type);
    }
    visitCompiledExpression(node) { }
    visitForOfStatement(node) {
        this.visit(node.body);
        this.visit(node.variable);
        this.visit(node.iterable);
    }
    visitModuleDeclaration(node) { }
    visitOmittedExpression(node) { }
}
//# sourceMappingURL=visitor.js.map