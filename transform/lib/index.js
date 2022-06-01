import { IdentifierExpression, ClassDeclaration, CommonFlags, TypeName, NamedTypeNode, VariableLikeDeclarationStatement, DiagnosticCode, ObjectLiteralExpression, Expression, ParameterKind, Statement, } from "assemblyscript/dist/transform";
import { Transform } from "assemblyscript/dist/transform";
export default class MyTransform extends Transform {
    // @ts-ignore
    readFile(filename, baseDir) {
        return null;
    }
    afterParse(p) {
        p.sources.forEach((s) => {
            if (s.isLibrary)
                return;
            s.statements.forEach((s) => {
                var _a, _b, _c;
                if (s instanceof ClassDeclaration) {
                    let __DECOR;
                    if (__DECOR = (_a = s.decorators) === null || _a === void 0 ? void 0 : _a.find((d) => d.name instanceof IdentifierExpression && d.name.text == "json")) {
                        const __DEFAULT_RANGE = __DECOR.range;
                        const members = s.members.filter((e) => e instanceof VariableLikeDeclarationStatement);
                        members.forEach((e) => {
                            if (!e.type) {
                                p.error(DiagnosticCode.User_defined_0, e.range, "Type information must be specified for JSON serialization.", "");
                            }
                        });
                        const SimpleNames = ["u8", "u16", "string"];
                        const Param = Expression.createIdentifierExpression("param", __DEFAULT_RANGE);
                        const GenericMapType = Expression.createNamedType(Expression.createSimpleTypeName("string", __DEFAULT_RANGE), [
                            Expression.createNamedType(new TypeName(Expression.createIdentifierExpression("JSON", __DEFAULT_RANGE), Expression.createSimpleTypeName("_Variant", __DEFAULT_RANGE), __DEFAULT_RANGE), null, false, __DEFAULT_RANGE),
                        ], false, __DEFAULT_RANGE);
                        let kvr = [];
                        members.forEach((m) => {
                            if (m.type instanceof NamedTypeNode &&
                                m.type.name.next == null &&
                                SimpleNames.includes(m.type.name.identifier.text)) {
                                kvr.push([
                                    Expression.createIdentifierExpression(m.name.text, m.range),
                                    Expression.createCallExpression(Expression.createElementAccessExpression(Param, Expression.createIdentifierExpression("get", __DEFAULT_RANGE), __DEFAULT_RANGE), [m.type], [], __DEFAULT_RANGE),
                                ]);
                            }
                            else {
                                kvr.push([
                                    Expression.createIdentifierExpression(m.name.text, m.range),
                                    Expression.createCallExpression(Expression.createPropertyAccessExpression(m.type, Expression.createIdentifierExpression("__Json__Deserialize", __DEFAULT_RANGE), __DEFAULT_RANGE), [], [
                                        Expression.createCallExpression(Expression.createElementAccessExpression(Param, Expression.createIdentifierExpression("get", __DEFAULT_RANGE), __DEFAULT_RANGE), [GenericMapType], [], __DEFAULT_RANGE),
                                    ], __DEFAULT_RANGE),
                                ]);
                            }
                        });
                        const objectliteral = new ObjectLiteralExpression(kvr.map((e) => e[0]), kvr.map((e) => e[1]), __DEFAULT_RANGE);
                        console.log((_b = kvr[0]) === null || _b === void 0 ? void 0 : _b.map(e => !!e));
                        console.log((_c = kvr[1]) === null || _c === void 0 ? void 0 : _c.map(e => !!e));
                        s.members.push(Expression.createMethodDeclaration(Expression.createIdentifierExpression("__Json__Deserialize", __DEFAULT_RANGE), null, CommonFlags.STATIC, null, Expression.createFunctionType([
                            Expression.createParameter(ParameterKind.DEFAULT, Expression.createIdentifierExpression("param", __DEFAULT_RANGE), GenericMapType, null, __DEFAULT_RANGE),
                        ], Expression.createNamedType((console.log(s.name.text), Expression.createSimpleTypeName(s.name.text + '1', __DEFAULT_RANGE)), null, false, __DEFAULT_RANGE), null, false, __DEFAULT_RANGE), Statement.createBlockStatement([
                            Statement.createReturnStatement(objectliteral, __DEFAULT_RANGE),
                        ], __DEFAULT_RANGE), __DEFAULT_RANGE));
                    }
                }
            });
        });
    }
}
