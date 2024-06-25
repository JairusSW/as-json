import { ArrayLiteralExpression, AssertionExpression, BinaryExpression, CallExpression, ElementAccessExpression, FloatLiteralExpression, FunctionTypeNode, IdentifierExpression, NamedTypeNode, Node, ObjectLiteralExpression, Source, TypeParameterNode, BlockStatement, BreakStatement, ClassDeclaration, ClassExpression, CommaExpression, ContinueStatement, DecoratorNode, DoStatement, EmptyStatement, EnumDeclaration, EnumValueDeclaration, ExportDefaultStatement, ExportImportStatement, ExportMember, ExportStatement, ExpressionStatement, FieldDeclaration, ForStatement, FunctionDeclaration, FunctionExpression, IfStatement, ImportDeclaration, ImportStatement, IndexSignatureNode, InstanceOfExpression, IntegerLiteralExpression, InterfaceDeclaration, LiteralExpression, MethodDeclaration, NamespaceDeclaration, NewExpression, ParameterNode, ParenthesizedExpression, PropertyAccessExpression, RegexpLiteralExpression, ReturnStatement, StringLiteralExpression, SwitchCase, SwitchStatement, TemplateLiteralExpression, TernaryExpression, ThrowStatement, TryStatement, TypeDeclaration, TypeName, UnaryPostfixExpression, UnaryPrefixExpression, VariableDeclaration, VariableStatement, WhileStatement, } from "assemblyscript/dist/assemblyscript.js";
export class Visitor {
    constructor() {
        this.currentSource = null;
        this.depth = 0;
    }
    visit(node) {
        if (node == null) {
            return;
        }
        else if (node instanceof Array) {
            for (const element of node) {
                this.visit(element);
            }
        }
        else if (node instanceof Map) {
            for (const element of node.values()) {
                this.visit(element);
            }
            // @ts-ignore
        }
        else if (typeof node[Symbol.iterator] === "function") {
            // @ts-ignore
            for (const element of node) {
                this.visit(element);
            }
        }
        else if (node instanceof Node) {
            this._visit(node);
        }
        else {
            throw new Error("Could not visit invalid type!");
        }
    }
    _visit(node) {
        if (node instanceof Source) {
            this.visitSource(node);
        }
        else if (node instanceof NamedTypeNode) {
            this.visitNamedTypeNode(node);
        }
        else if (node instanceof FunctionTypeNode) {
            this.visitFunctionTypeNode(node);
        }
        else if (node instanceof TypeName) {
            this.visitTypeName(node);
        }
        else if (node instanceof TypeParameterNode) {
            this.visitTypeParameter(node);
        }
        else if (node instanceof IdentifierExpression) {
            this.visitIdentifierExpression(node);
        }
        else if (node instanceof AssertionExpression) {
            this.visitAssertionExpression(node);
        }
        else if (node instanceof BinaryExpression) {
            this.visitBinaryExpression(node);
        }
        else if (node instanceof CallExpression) {
            this.visitCallExpression(node);
        }
        else if (node instanceof ClassExpression) {
            this.visitClassExpression(node);
        }
        else if (node instanceof CommaExpression) {
            this.visitCommaExpression(node);
        }
        else if (node instanceof ElementAccessExpression) {
            this.visitElementAccessExpression(node);
        }
        else if (node instanceof FunctionExpression) {
            this.visitFunctionExpression(node);
        }
        else if (node instanceof InstanceOfExpression) {
            this.visitInstanceOfExpression(node);
        }
        else if (node instanceof LiteralExpression) {
            this.visitLiteralExpression(node);
        }
        else if (node instanceof NewExpression) {
            this.visitNewExpression(node);
        }
        else if (node instanceof ParenthesizedExpression) {
            this.visitParenthesizedExpression(node);
        }
        else if (node instanceof PropertyAccessExpression) {
            this.visitPropertyAccessExpression(node);
        }
        else if (node instanceof TernaryExpression) {
            this.visitTernaryExpression(node);
        }
        else if (node instanceof UnaryPostfixExpression) {
            this.visitUnaryPostfixExpression(node);
        }
        else if (node instanceof UnaryPrefixExpression) {
            this.visitUnaryPrefixExpression(node);
        }
        else if (node instanceof BlockStatement) {
            this.visitBlockStatement(node);
        }
        else if (node instanceof BreakStatement) {
            this.visitBreakStatement(node);
        }
        else if (node instanceof ContinueStatement) {
            this.visitContinueStatement(node);
        }
        else if (node instanceof DoStatement) {
            this.visitDoStatement(node);
        }
        else if (node instanceof EmptyStatement) {
            this.visitEmptyStatement(node);
        }
        else if (node instanceof ExportStatement) {
            this.visitExportStatement(node);
        }
        else if (node instanceof ExportDefaultStatement) {
            this.visitExportDefaultStatement(node);
        }
        else if (node instanceof ExportImportStatement) {
            this.visitExportImportStatement(node);
        }
        else if (node instanceof ExpressionStatement) {
            this.visitExpressionStatement(node);
        }
        else if (node instanceof ForStatement) {
            this.visitForStatement(node);
        }
        else if (node instanceof IfStatement) {
            this.visitIfStatement(node);
        }
        else if (node instanceof ImportStatement) {
            this.visitImportStatement(node);
        }
        else if (node instanceof ReturnStatement) {
            this.visitReturnStatement(node);
        }
        else if (node instanceof SwitchStatement) {
            this.visitSwitchStatement(node);
        }
        else if (node instanceof ThrowStatement) {
            this.visitThrowStatement(node);
        }
        else if (node instanceof TryStatement) {
            this.visitTryStatement(node);
        }
        else if (node instanceof VariableStatement) {
            this.visitVariableStatement(node);
        }
        else if (node instanceof WhileStatement) {
            this.visitWhileStatement(node);
        }
        else if (node instanceof ClassDeclaration) {
            this.visitClassDeclaration(node);
        }
        else if (node instanceof EnumDeclaration) {
            this.visitEnumDeclaration(node);
        }
        else if (node instanceof EnumValueDeclaration) {
            this.visitEnumValueDeclaration(node);
        }
        else if (node instanceof FieldDeclaration) {
            this.visitFieldDeclaration(node);
        }
        else if (node instanceof FunctionDeclaration) {
            this.visitFunctionDeclaration(node);
        }
        else if (node instanceof ImportDeclaration) {
            this.visitImportDeclaration(node);
        }
        else if (node instanceof InterfaceDeclaration) {
            this.visitInterfaceDeclaration(node);
        }
        else if (node instanceof MethodDeclaration) {
            this.visitMethodDeclaration(node);
        }
        else if (node instanceof NamespaceDeclaration) {
            this.visitNamespaceDeclaration(node);
        }
        else if (node instanceof TypeDeclaration) {
            this.visitTypeDeclaration(node);
        }
        else if (node instanceof VariableDeclaration) {
            this.visitVariableDeclaration(node);
        }
        else if (node instanceof DecoratorNode) {
            this.visitDecoratorNode(node);
        }
        else if (node instanceof ExportMember) {
            this.visitExportMember(node);
        }
        else if (node instanceof ParameterNode) {
            this.visitParameter(node);
        }
        else if (node instanceof SwitchCase) {
            this.visitSwitchCase(node);
        }
        else if (node instanceof IndexSignatureNode) {
            this.visitIndexSignature(node);
        }
        else {
            throw new Error("Could not visit invalid type!");
        }
    }
    visitSource(node) {
        this.currentSource = node;
        for (const stmt of node.statements) {
            this.depth++;
            this._visit(stmt);
            this.depth--;
        }
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
        if (node instanceof FloatLiteralExpression) {
            this.visitFloatLiteralExpression(node);
        }
        else if (node instanceof IntegerLiteralExpression) {
            this.visitIntegerLiteralExpression(node);
        }
        else if (node instanceof StringLiteralExpression) {
            this.visitStringLiteralExpression(node);
        }
        else if (node instanceof TemplateLiteralExpression) {
            this.visitTemplateLiteralExpression(node);
        }
        else if (node instanceof RegexpLiteralExpression) {
            this.visitRegexpLiteralExpression(node);
        }
        else if (node instanceof ArrayLiteralExpression) {
            this.visitArrayLiteralExpression(node);
        }
        else if (node instanceof ObjectLiteralExpression) {
            this.visitObjectLiteralExpression(node);
        }
        else {
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
    visitNullExperssion(node) { }
    visitConstructorExpression(node) { }
    visitNodeAndTerminate(statement) { }
    visitBlockStatement(node) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    }
    visitBreakStatement(node) {
        this.visit(node.label);
    }
    visitContinueStatement(node) {
        this.visit(node.label);
    }
    visitClassDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        if (node.isGeneric ? node.typeParameters != null : node.typeParameters == null) {
            this.visit(node.typeParameters);
            this.visit(node.extendsType);
            this.visit(node.implementsTypes);
            this.visit(node.members);
            this.depth--;
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
        this.depth++;
        this.visit(node.body);
        this.depth--;
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
        this.depth++;
        this.visit(node.members);
        this.depth--;
    }
    visitMethodDeclaration(node) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.visit(node.decorators);
        this.depth++;
        this.visit(node.body);
        this.depth--;
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
        this.depth++;
        this.visit(node.cases);
        this.depth--;
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
        this.depth++;
        this.visit(node.body);
        this.depth--;
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
}
