import {
    ArrayLiteralExpression,
    AssertionExpression,
    BinaryExpression,
    CallExpression,
    ElementAccessExpression,
    FloatLiteralExpression,
    FunctionTypeNode,
    IdentifierExpression,
    NamedTypeNode,
    Node,
    ObjectLiteralExpression,
    Source,
    TypeNode,
    TypeParameterNode,
    BlockStatement,
    BreakStatement,
    ClassDeclaration,
    ClassExpression,
    CommaExpression,
    ConstructorExpression,
    ContinueStatement,
    DecoratorNode,
    DoStatement,
    EmptyStatement,
    EnumDeclaration,
    EnumValueDeclaration,
    ExportDefaultStatement,
    ExportImportStatement,
    ExportMember,
    ExportStatement,
    Expression,
    ExpressionStatement,
    FalseExpression,
    FieldDeclaration,
    ForStatement,
    FunctionDeclaration,
    FunctionExpression,
    IfStatement,
    ImportDeclaration,
    ImportStatement,
    IndexSignatureNode,
    InstanceOfExpression,
    IntegerLiteralExpression,
    InterfaceDeclaration,
    LiteralExpression,
    MethodDeclaration,
    NamespaceDeclaration,
    NewExpression,
    NullExpression,
    ParameterNode,
    ParenthesizedExpression,
    PropertyAccessExpression,
    RegexpLiteralExpression,
    ReturnStatement,
    Statement,
    StringLiteralExpression,
    SuperExpression,
    SwitchCase,
    SwitchStatement,
    TemplateLiteralExpression,
    TernaryExpression,
    ThisExpression,
    ThrowStatement,
    TrueExpression,
    TryStatement,
    TypeDeclaration,
    TypeName,
    UnaryExpression,
    UnaryPostfixExpression,
    UnaryPrefixExpression,
    VariableDeclaration,
    VariableStatement,
    VoidStatement,
    WhileStatement,
} from "assemblyscript/dist/assemblyscript.js";

export declare type Collection<T extends unknown> =
    | Node
    | T[]
    | Map<string, T | T[] | Iterable<T>>
    | Iterable<T>;

export class Visitor {
    public currentSource: Source | null = null;
    public depth = 0;
    visit<T extends unknown>(node: T | T[] | Map<string, T | T[] | Iterable<T>> | Iterable<T>): void {
        if (node == null) {
            return;
        } else if (node instanceof Array) {
            for (const element of node) {
                this.visit(element);
            }
        } else if (node instanceof Map) {
            for (const element of node.values()) {
                this.visit(element);
            }
            // @ts-ignore
        } else if (typeof node[Symbol.iterator] === "function") {
            // @ts-ignore
            for (const element of node) {
                this.visit(element);
            }
        } else if (node instanceof Node) {
            this._visit(node);
        } else {
            throw new Error("Could not visit invalid type!");
        }
    }
    private _visit(node: Node): void {
        if (node instanceof Source) {
            this.visitSource(node);
        } else if (node instanceof NamedTypeNode) {
            this.visitNamedTypeNode(node);
        } else if (node instanceof FunctionTypeNode) {
            this.visitFunctionTypeNode(node);
        } else if (node instanceof TypeName) {
            this.visitTypeName(node);
        } else if (node instanceof TypeParameterNode) {
            this.visitTypeParameter(node);
        } else if (node instanceof IdentifierExpression) {
            this.visitIdentifierExpression(node);
        } else if (node instanceof AssertionExpression) {
            this.visitAssertionExpression(node);
        } else if (node instanceof BinaryExpression) {
            this.visitBinaryExpression(node);
        } else if (node instanceof CallExpression) {
            this.visitCallExpression(node);
        } else if (node instanceof ClassExpression) {
            this.visitClassExpression(node);
        } else if (node instanceof CommaExpression) {
            this.visitCommaExpression(node);
        } else if (node instanceof ElementAccessExpression) {
            this.visitElementAccessExpression(node);
        } else if (node instanceof FunctionExpression) {
            this.visitFunctionExpression(node);
        } else if (node instanceof InstanceOfExpression) {
            this.visitInstanceOfExpression(node);
        } else if (node instanceof LiteralExpression) {
            this.visitLiteralExpression(node);
        } else if (node instanceof NewExpression) {
            this.visitNewExpression(node);
        } else if (node instanceof ParenthesizedExpression) {
            this.visitParenthesizedExpression(node);
        } else if (node instanceof PropertyAccessExpression) {
            this.visitPropertyAccessExpression(node);
        } else if (node instanceof TernaryExpression) {
            this.visitTernaryExpression(node);
        } else if (node instanceof UnaryPostfixExpression) {
            this.visitUnaryPostfixExpression(node);
        } else if (node instanceof UnaryPrefixExpression) {
            this.visitUnaryPrefixExpression(node);
        } else if (node instanceof BlockStatement) {
            this.visitBlockStatement(node);
        } else if (node instanceof BreakStatement) {
            this.visitBreakStatement(node);
        } else if (node instanceof ContinueStatement) {
            this.visitContinueStatement(node);
        } else if (node instanceof DoStatement) {
            this.visitDoStatement(node);
        } else if (node instanceof EmptyStatement) {
            this.visitEmptyStatement(node);
        } else if (node instanceof ExportStatement) {
            this.visitExportStatement(node);
        } else if (node instanceof ExportDefaultStatement) {
            this.visitExportDefaultStatement(node);
        } else if (node instanceof ExportImportStatement) {
            this.visitExportImportStatement(node);
        } else if (node instanceof ExpressionStatement) {
            this.visitExpressionStatement(node);
        } else if (node instanceof ForStatement) {
            this.visitForStatement(node);
        } else if (node instanceof IfStatement) {
            this.visitIfStatement(node);
        } else if (node instanceof ImportStatement) {
            this.visitImportStatement(node);
        } else if (node instanceof ReturnStatement) {
            this.visitReturnStatement(node);
        } else if (node instanceof SwitchStatement) {
            this.visitSwitchStatement(node);
        } else if (node instanceof ThrowStatement) {
            this.visitThrowStatement(node);
        } else if (node instanceof TryStatement) {
            this.visitTryStatement(node);
        } else if (node instanceof VariableStatement) {
            this.visitVariableStatement(node);
        } else if (node instanceof WhileStatement) {
            this.visitWhileStatement(node);
        } else if (node instanceof ClassDeclaration) {
            this.visitClassDeclaration(node);
        } else if (node instanceof EnumDeclaration) {
            this.visitEnumDeclaration(node);
        } else if (node instanceof EnumValueDeclaration) {
            this.visitEnumValueDeclaration(node);
        } else if (node instanceof FieldDeclaration) {
            this.visitFieldDeclaration(node);
        } else if (node instanceof FunctionDeclaration) {
            this.visitFunctionDeclaration(node);
        } else if (node instanceof ImportDeclaration) {
            this.visitImportDeclaration(node);
        } else if (node instanceof InterfaceDeclaration) {
            this.visitInterfaceDeclaration(node);
        } else if (node instanceof MethodDeclaration) {
            this.visitMethodDeclaration(node);
        } else if (node instanceof NamespaceDeclaration) {
            this.visitNamespaceDeclaration(node);
        } else if (node instanceof TypeDeclaration) {
            this.visitTypeDeclaration(node);
        } else if (node instanceof VariableDeclaration) {
            this.visitVariableDeclaration(node);
        } else if (node instanceof DecoratorNode) {
            this.visitDecoratorNode(node);
        } else if (node instanceof ExportMember) {
            this.visitExportMember(node);
        } else if (node instanceof ParameterNode) {
            this.visitParameter(node);
        } else if (node instanceof SwitchCase) {
            this.visitSwitchCase(node);
        } else if (node instanceof IndexSignatureNode) {
            this.visitIndexSignature(node);
        } else {
            throw new Error("Could not visit invalid type!");
        }
    }
    visitSource(node: Source): void {
        this.currentSource = node;
        for (const stmt of node.statements) {
            this.depth++;
            this._visit(stmt);
            this.depth--;
        }
        this.currentSource = null;
    }
    visitTypeNode(node: TypeNode): void { }
    visitTypeName(node: TypeName): void {
        this.visit(node.identifier);
        this.visit(node.next);
    }
    visitNamedTypeNode(node: NamedTypeNode): void {
        this.visit(node.name);
        this.visit(node.typeArguments);
    }
    visitFunctionTypeNode(node: FunctionTypeNode): void {
        this.visit(node.parameters);
        this.visit(node.returnType);
        this.visit(node.explicitThisType);
    }
    visitTypeParameter(node: TypeParameterNode): void {
        this.visit(node.name);
        this.visit(node.extendsType);
        this.visit(node.defaultType);
    }
    visitIdentifierExpression(node: IdentifierExpression): void { }
    visitArrayLiteralExpression(node: ArrayLiteralExpression) {
        this.visit(node.elementExpressions);
    }
    visitObjectLiteralExpression(node: ObjectLiteralExpression) {
        this.visit(node.names);
        this.visit(node.values);
    }
    visitAssertionExpression(node: AssertionExpression) {
        this.visit(node.toType);
        this.visit(node.expression);
    }
    visitBinaryExpression(node: BinaryExpression) {
        this.visit(node.left);
        this.visit(node.right);
    }
    visitCallExpression(node: CallExpression) {
        this.visit(node.expression);
        this.visitArguments(node.typeArguments, node.args);
    }
    visitArguments(typeArguments: TypeNode[] | null, args: Expression[]) {
        this.visit(typeArguments);
        this.visit(args);
    }
    visitClassExpression(node: ClassExpression) {
        this.visit(node.declaration);
    }
    visitCommaExpression(node: CommaExpression) {
        this.visit(node.expressions);
    }
    visitElementAccessExpression(node: ElementAccessExpression) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    }
    visitFunctionExpression(node: FunctionExpression) {
        this.visit(node.declaration);
    }
    visitLiteralExpression(node: LiteralExpression) {
        if (node instanceof FloatLiteralExpression) {
            this.visitFloatLiteralExpression(node);
        } else if (node instanceof IntegerLiteralExpression) {
            this.visitIntegerLiteralExpression(node);
        } else if (node instanceof StringLiteralExpression) {
            this.visitStringLiteralExpression(node);
        } else if (node instanceof TemplateLiteralExpression) {
            this.visitTemplateLiteralExpression(node);
        } else if (node instanceof RegexpLiteralExpression) {
            this.visitRegexpLiteralExpression(node);
        } else if (node instanceof ArrayLiteralExpression) {
            this.visitArrayLiteralExpression(node);
        } else if (node instanceof ObjectLiteralExpression) {
            this.visitObjectLiteralExpression(node);
        } else {
            throw new Error(
                "Invalid LiteralKind at visitLiteralExpression(): " + node.literalKind,
            );
        }
    }
    visitFloatLiteralExpression(node: FloatLiteralExpression) { }
    visitInstanceOfExpression(node: InstanceOfExpression) {
        this.visit(node.expression);
        this.visit(node.isType);
    }
    visitIntegerLiteralExpression(node: IntegerLiteralExpression) { }
    visitStringLiteral(str: string, singleQuoted: boolean = false) { }
    visitStringLiteralExpression(node: StringLiteralExpression) {
        this.visitStringLiteral(node.value);
    }
    visitTemplateLiteralExpression(node: TemplateLiteralExpression) { }
    visitRegexpLiteralExpression(node: RegexpLiteralExpression) { }
    visitNewExpression(node: NewExpression) {
        this.visit(node.typeArguments);
        this.visitArguments(node.typeArguments, node.args);
        this.visit(node.args);
    }
    visitParenthesizedExpression(node: ParenthesizedExpression) {
        this.visit(node.expression);
    }
    visitPropertyAccessExpression(node: PropertyAccessExpression) {
        this.visit(node.property);
        this.visit(node.expression);
    }
    visitTernaryExpression(node: TernaryExpression) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    }
    visitUnaryExpression(node: UnaryExpression) {
        this.visit(node.operand);
    }
    visitUnaryPostfixExpression(node: UnaryPostfixExpression) {
        this.visit(node.operand);
    }
    visitUnaryPrefixExpression(node: UnaryPrefixExpression) {
        this.visit(node.operand);
    }
    visitSuperExpression(node: SuperExpression) { }
    visitFalseExpression(node: FalseExpression) { }
    visitTrueExpression(node: TrueExpression) { }
    visitThisExpression(node: ThisExpression) { }
    visitNullExperssion(node: NullExpression) { }
    visitConstructorExpression(node: ConstructorExpression) { }
    visitNodeAndTerminate(statement: Statement) { }
    visitBlockStatement(node: BlockStatement) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    }
    visitBreakStatement(node: BreakStatement) {
        this.visit(node.label);
    }
    visitContinueStatement(node: ContinueStatement) {
        this.visit(node.label);
    }
    visitClassDeclaration(node: ClassDeclaration, isDefault: boolean = false) {
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        if (
            node.isGeneric ? node.typeParameters != null : node.typeParameters == null
        ) {
            this.visit(node.typeParameters);
            this.visit(node.extendsType);
            this.visit(node.implementsTypes);
            this.visit(node.members);
            this.depth--;
        } else {
            throw new Error(
                "Expected to type parameters to match class declaration, but found type mismatch instead!",
            );
        }
    }
    visitDoStatement(node: DoStatement) {
        this.visit(node.condition);
        this.visit(node.body);
    }
    visitEmptyStatement(node: EmptyStatement) { }
    visitEnumDeclaration(node: EnumDeclaration, isDefault: boolean = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    }
    visitEnumValueDeclaration(node: EnumValueDeclaration) {
        this.visit(node.name);
        this.visit(node.initializer);
    }
    visitExportImportStatement(node: ExportImportStatement) {
        this.visit(node.name);
        this.visit(node.externalName);
    }
    visitExportMember(node: ExportMember) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    }
    visitExportStatement(node: ExportStatement) {
        this.visit(node.path);
        this.visit(node.members);
    }
    visitExportDefaultStatement(node: ExportDefaultStatement) {
        this.visit(node.declaration);
    }
    visitExpressionStatement(node: ExpressionStatement) {
        this.visit(node.expression);
    }
    visitFieldDeclaration(node: FieldDeclaration) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
        this.visit(node.decorators);
    }
    visitForStatement(node: ForStatement) {
        this.visit(node.initializer);
        this.visit(node.condition);
        this.visit(node.incrementor);
        this.visit(node.body);
    }
    visitFunctionDeclaration(
        node: FunctionDeclaration,
        isDefault: boolean = false,
    ) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.depth++;
        this.visit(node.body);
        this.depth--;
    }
    visitIfStatement(node: IfStatement) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        this.visit(node.ifFalse);
    }
    visitImportDeclaration(node: ImportDeclaration) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    }
    visitImportStatement(node: ImportStatement) {
        this.visit(node.namespaceName);
        this.visit(node.declarations);
    }
    visitIndexSignature(node: IndexSignatureNode) {
        this.visit(node.keyType);
        this.visit(node.valueType);
    }
    visitInterfaceDeclaration(
        node: InterfaceDeclaration,
        isDefault: boolean = false,
    ) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.implementsTypes);
        this.visit(node.extendsType);
        this.depth++;
        this.visit(node.members);
        this.depth--;
    }
    visitMethodDeclaration(node: MethodDeclaration) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.visit(node.decorators);
        this.depth++;
        this.visit(node.body);
        this.depth--;
    }
    visitNamespaceDeclaration(
        node: NamespaceDeclaration,
        isDefault: boolean = false,
    ) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    }
    visitReturnStatement(node: ReturnStatement) {
        this.visit(node.value);
    }
    visitSwitchCase(node: SwitchCase) {
        this.visit(node.label);
        this.visit(node.statements);
    }
    visitSwitchStatement(node: SwitchStatement) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.cases);
        this.depth--;
    }
    visitThrowStatement(node: ThrowStatement) {
        this.visit(node.value);
    }
    visitTryStatement(node: TryStatement) {
        this.visit(node.bodyStatements);
        this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    }
    visitTypeDeclaration(node: TypeDeclaration) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    }
    visitVariableDeclaration(node: VariableDeclaration) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
    }
    visitVariableStatement(node: VariableStatement) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    }
    visitWhileStatement(node: WhileStatement) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.body);
        this.depth--;
    }
    visitVoidStatement(node: VoidStatement) { }
    visitComment(node: Comment) { }
    visitDecoratorNode(node: DecoratorNode) {
        this.visit(node.name);
        this.visit(node.args);
    }
    visitParameter(node: ParameterNode) {
        this.visit(node.name);
        this.visit(node.implicitFieldDeclaration);
        this.visit(node.initializer);
        this.visit(node.type);
    }
}
