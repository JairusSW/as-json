import { ArrayLiteralExpression, AssertionExpression, BinaryExpression, CallExpression, ElementAccessExpression, FloatLiteralExpression, FunctionTypeNode, IdentifierExpression, NamedTypeNode, Node, ObjectLiteralExpression, Source, TypeParameterNode, BlockStatement, BreakStatement, ClassDeclaration, ClassExpression, CommaExpression, ContinueStatement, DecoratorNode, DoStatement, EmptyStatement, EnumDeclaration, EnumValueDeclaration, ExportDefaultStatement, ExportImportStatement, ExportMember, ExportStatement, ExpressionStatement, FieldDeclaration, ForStatement, FunctionDeclaration, FunctionExpression, IfStatement, ImportDeclaration, ImportStatement, IndexSignatureNode, InstanceOfExpression, IntegerLiteralExpression, InterfaceDeclaration, LiteralExpression, MethodDeclaration, NamespaceDeclaration, NewExpression, ParameterNode, ParenthesizedExpression, PropertyAccessExpression, RegexpLiteralExpression, ReturnStatement, StringLiteralExpression, SwitchCase, SwitchStatement, TemplateLiteralExpression, TernaryExpression, ThrowStatement, TryStatement, TypeDeclaration, TypeName, UnaryPostfixExpression, UnaryPrefixExpression, VariableDeclaration, VariableStatement, WhileStatement, NodeKind, TypeNode, Expression, LiteralKind, UnaryExpression, SuperExpression, FalseExpression, TrueExpression, ThisExpression, NullExpression, ConstructorExpression, Statement, VoidStatement, CompiledExpression, CommentNode, Module, OmittedExpression, ForOfStatement, ModuleDeclaration } from "assemblyscript/dist/assemblyscript.js";

export class Visitor {
    public currentSource: Source | null = null;
    public depth: number = 0;
    visit(node: Node | Node[]): void {
        if (node == null) return;
        if (node instanceof Array) {
            node.map((node) => this.visit(node));
        } else {
            // @ts-ignore
            this._visit(node);
        }
    }
    _visit(node: Node) {
        switch (node.kind) {
            case NodeKind.Source:
                this.visitSource(node as Source);
                break;
            case NodeKind.NamedType:
                this.visitNamedTypeNode(node as NamedTypeNode);
                break;
            case NodeKind.FunctionType:
                this.visitFunctionTypeNode(node as FunctionTypeNode);
                break;
            case NodeKind.TypeName:
                this.visitTypeName(node as TypeName);
                break;
            case NodeKind.TypeParameter:
                this.visitTypeParameter(node as TypeParameterNode);
                break;
            case NodeKind.Identifier:
                this.visitIdentifierExpression(node as IdentifierExpression);
                break;
            case NodeKind.Assertion:
                this.visitAssertionExpression(node as AssertionExpression);
                break;
            case NodeKind.Binary:
                this.visitBinaryExpression(node as BinaryExpression);
                break;
            case NodeKind.Call:
                this.visitCallExpression(node as CallExpression);
                break;
            case NodeKind.Class:
                this.visitClassExpression(node as ClassExpression);
                break;
            case NodeKind.Comma:
                this.visitCommaExpression(node as CommaExpression);
                break;
            case NodeKind.ElementAccess:
                this.visitElementAccessExpression(node as ElementAccessExpression);
                break;
            case NodeKind.Function:
                this.visitFunctionExpression(node as FunctionExpression);
                break;
            case NodeKind.InstanceOf:
                this.visitInstanceOfExpression(node as InstanceOfExpression);
                break;
            case NodeKind.Literal:
                this.visitLiteralExpression(node as LiteralExpression);
                break;
            case NodeKind.New:
                this.visitNewExpression(node as NewExpression);
                break;
            case NodeKind.Parenthesized:
                this.visitParenthesizedExpression(node as ParenthesizedExpression);
                break;
            case NodeKind.PropertyAccess:
                this.visitPropertyAccessExpression(node as PropertyAccessExpression);
                break;
            case NodeKind.Ternary:
                this.visitTernaryExpression(node as TernaryExpression);
                break;
            case NodeKind.UnaryPostfix:
                this.visitUnaryPostfixExpression(node as UnaryPostfixExpression);
                break;
            case NodeKind.UnaryPrefix:
                this.visitUnaryPrefixExpression(node as UnaryPrefixExpression);
                break;
            case NodeKind.Block:
                this.visitBlockStatement(node as BlockStatement);
                break;
            case NodeKind.Break:
                this.visitBreakStatement(node as BreakStatement);
                break;
            case NodeKind.Continue:
                this.visitContinueStatement(node as ContinueStatement);
                break;
            case NodeKind.Do:
                this.visitDoStatement(node as DoStatement);
                break;
            case NodeKind.Empty:
                this.visitEmptyStatement(node as EmptyStatement);
                break;
            case NodeKind.Export:
                this.visitExportStatement(node as ExportStatement);
                break;
            case NodeKind.ExportDefault:
                this.visitExportDefaultStatement(node as ExportDefaultStatement);
                break;
            case NodeKind.ExportImport:
                this.visitExportImportStatement(node as ExportImportStatement);
                break;
            case NodeKind.Expression:
                this.visitExpressionStatement(node as ExpressionStatement);
                break;
            case NodeKind.For:
                this.visitForStatement(node as ForStatement);
                break;
            case NodeKind.If:
                this.visitIfStatement(node as IfStatement);
                break;
            case NodeKind.Import:
                this.visitImportStatement(node as ImportStatement);
                break;
            case NodeKind.Return:
                this.visitReturnStatement(node as ReturnStatement);
                break;
            case NodeKind.Switch:
                this.visitSwitchStatement(node as SwitchStatement);
                break;
            case NodeKind.Throw:
                this.visitThrowStatement(node as ThrowStatement);
                break;
            case NodeKind.Try:
                this.visitTryStatement(node as TryStatement);
                break;
            case NodeKind.Variable:
                this.visitVariableStatement(node as VariableStatement);
                break;
            case NodeKind.While:
                this.visitWhileStatement(node as WhileStatement);
                break;
            case NodeKind.ClassDeclaration:
                this.visitClassDeclaration(node as ClassDeclaration);
                break;
            case NodeKind.EnumDeclaration:
                this.visitEnumDeclaration(node as EnumDeclaration);
                break;
            case NodeKind.EnumValueDeclaration:
                this.visitEnumValueDeclaration(node as EnumValueDeclaration);
                break;
            case NodeKind.FieldDeclaration:
                this.visitFieldDeclaration(node as FieldDeclaration);
                break;
            case NodeKind.FunctionDeclaration:
                this.visitFunctionDeclaration(node as FunctionDeclaration);
                break;
            case NodeKind.ImportDeclaration:
                this.visitImportDeclaration(node as ImportDeclaration);
                break;
            case NodeKind.InterfaceDeclaration:
                this.visitInterfaceDeclaration(node as InterfaceDeclaration);
                break;
            case NodeKind.MethodDeclaration:
                this.visitMethodDeclaration(node as MethodDeclaration);
                break;
            case NodeKind.NamespaceDeclaration:
                this.visitNamespaceDeclaration(node as NamespaceDeclaration);
                break;
            case NodeKind.TypeDeclaration:
                this.visitTypeDeclaration(node as TypeDeclaration);
                break;
            case NodeKind.VariableDeclaration:
                this.visitVariableDeclaration(node as VariableDeclaration);
                break;
            case NodeKind.Decorator:
                this.visitDecoratorNode(node as DecoratorNode);
                break;
            case NodeKind.ExportMember:
                this.visitExportMember(node as ExportMember);
                break;
            case NodeKind.SwitchCase:
                this.visitSwitchCase(node as SwitchCase);
                break;
            case NodeKind.IndexSignature:
                this.visitIndexSignature(node as IndexSignatureNode);
                break;
            case NodeKind.Null:
                this.visitNullExpression(node as NullExpression);
                break;
            case NodeKind.True: {
                this.visitTrueExpression(node as TrueExpression);
                break;
            }
            case NodeKind.False: {
                this.visitFalseExpression(node as FalseExpression);
                break;
            }
            case NodeKind.Compiled: {
                this.visitCompiledExpression(node as CompiledExpression);
                break;
            }
            case NodeKind.Constructor: {
                this.visitConstructorExpression(node as ConstructorExpression);
                break;
            }
            case NodeKind.Comment: {
                this.visitComment(node as CommentNode);
                break;
            }
            case NodeKind.ForOf: {
                this.visitForOfStatement(node as ForOfStatement);
                break;
            }
            case NodeKind.Module: {
                this.visitModuleDeclaration(node as ModuleDeclaration);
                break;
            }
            case NodeKind.Omitted: {
                this.visitOmittedExpression(node as OmittedExpression);
                break;
            }
            case NodeKind.Parameter: {
                this.visitParameter(node as ParameterNode);
                break;
            }
            case NodeKind.Super: {
                this.visitSuperExpression(node as SuperExpression);
                break;
            }
            case NodeKind.This: {
                this.visitThisExpression(node as ThisExpression);
                break;
            }
            case NodeKind.Void: {
                this.visitVoidStatement(node as VoidStatement);
                break;
            }
            default:
                throw new Error("Could not visit invalid type!");
        }
    }
    visitSource(node: Source): void {
        this.currentSource = node;
        this.visit(node.statements);
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
        switch (node.literalKind) {
            case LiteralKind.Float:
                this.visitFloatLiteralExpression(node as FloatLiteralExpression);
                break;
            case LiteralKind.Integer:
                this.visitIntegerLiteralExpression(node as IntegerLiteralExpression);
                break;
            case LiteralKind.String:
                this.visitStringLiteralExpression(node as StringLiteralExpression);
                break;
            case LiteralKind.Template:
                this.visitTemplateLiteralExpression(node as TemplateLiteralExpression);
                break;
            case LiteralKind.RegExp:
                this.visitRegexpLiteralExpression(node as RegexpLiteralExpression);
                break;
            case LiteralKind.Array:
                this.visitArrayLiteralExpression(node as ArrayLiteralExpression);
                break;
            case LiteralKind.Object:
                this.visitObjectLiteralExpression(node as ObjectLiteralExpression);
                break;
            default:
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
    visitNullExpression(node: NullExpression) { }
    visitConstructorExpression(node: ConstructorExpression) { }
    visitNodeAndTerminate(statement: Statement) { }
    visitBlockStatement(node: BlockStatement) {
        this.visit(node.statements);
    }
    visitBreakStatement(node: BreakStatement) {
        this.visit(node.label);
    }
    visitContinueStatement(node: ContinueStatement) {
        this.visit(node.label);
    }
    visitClassDeclaration(node: ClassDeclaration, isDefault: boolean = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        if (
            node.isGeneric ? node.typeParameters != null : node.typeParameters == null
        ) {
            this.visit(node.typeParameters);
            this.visit(node.extendsType);
            this.visit(node.implementsTypes);
            this.visit(node.members);
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
        this.visit(node.body);
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
        this.visit(node.members);
    }
    visitMethodDeclaration(node: MethodDeclaration) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.visit(node.decorators);
        this.visit(node.body);
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
        this.visit(node.cases);
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
        this.visit(node.body);
    }
    visitVoidStatement(node: VoidStatement) { }
    visitComment(node: CommentNode) { }
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
    visitCompiledExpression(node: CompiledExpression) { }
    visitForOfStatement(node: ForOfStatement) {
        this.visit(node.body);
        this.visit(node.variable);
        this.visit(node.iterable);
    }
    visitModuleDeclaration(node: ModuleDeclaration) { }
    visitOmittedExpression(node: OmittedExpression) { }
}