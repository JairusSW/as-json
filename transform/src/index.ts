import {
  IdentifierExpression,
  Parser,
  ClassDeclaration,
  CommonFlags,
  TypeName,
  NamedTypeNode,
  VariableLikeDeclarationStatement,
  DiagnosticCode,
  ObjectLiteralExpression,
  Expression,
  Range,
  ParameterKind,
  Statement,
} from "assemblyscript/dist/transform";
import { Transform } from "assemblyscript/dist/transform";

export default class MyTransform extends Transform {
  // @ts-ignore
  readFile(filename: string, baseDir: string) {
    return null;
  }
  afterParse(p: Parser) {
    p.sources.forEach((s) => {
      if (s.isLibrary) return;
      s.statements.forEach((s) => {
        if (s instanceof ClassDeclaration) {
          let __DECOR;
          if (
            __DECOR=s.decorators?.find(
              (d) =>
                d.name instanceof IdentifierExpression && d.name.text == "json"
            )
          ) {
            const __DEFAULT_RANGE = __DECOR.range;
            const members = s.members.filter<VariableLikeDeclarationStatement>(
              (e): e is VariableLikeDeclarationStatement =>
                e instanceof VariableLikeDeclarationStatement
            );
            members.forEach((e) => {
              if (!e.type) {
                p.error(
                  DiagnosticCode.User_defined_0,
                  e.range,
                  "Type information must be specified for JSON serialization.",""
                );
              }
            });
            const SimpleNames = ["u8", "u16", "string"];
            const Param = Expression.createIdentifierExpression(
              "param",
              __DEFAULT_RANGE
            );
            const GenericMapType = Expression.createNamedType(
              Expression.createSimpleTypeName("string", __DEFAULT_RANGE),
              [
                Expression.createNamedType(
                  new TypeName(
                    Expression.createIdentifierExpression(
                      "JSON",
                      __DEFAULT_RANGE
                    ),
                    Expression.createSimpleTypeName(
                      "_Variant",
                      __DEFAULT_RANGE
                    ),
                    __DEFAULT_RANGE
                  ),
                  null,
                  false,
                  __DEFAULT_RANGE
                ),
              ],
              false,
              __DEFAULT_RANGE
            );
            let kvr: [IdentifierExpression, Expression][] = [];

            members.forEach((m) => {
              if (
                m.type instanceof NamedTypeNode &&
                m.type.name.next == null &&
                SimpleNames.includes(m.type.name.identifier.text)
              ) {
                kvr.push([
                  Expression.createIdentifierExpression(m.name.text, m.range),
                  Expression.createCallExpression(
                    Expression.createElementAccessExpression(
                      Param,
                      Expression.createIdentifierExpression(
                        "get",
                        __DEFAULT_RANGE
                      ),
                      __DEFAULT_RANGE
                    ),
                    [m.type!],
                    [],
                    __DEFAULT_RANGE
                  ),
                ]);
              } else {
                kvr.push([
                  Expression.createIdentifierExpression(m.name.text, m.range),
                  Expression.createCallExpression(
                    Expression.createPropertyAccessExpression(
                      m.type!,
                      Expression.createIdentifierExpression(
                        "__Json__Deserialize",
                        __DEFAULT_RANGE
                      ),
                      __DEFAULT_RANGE
                    ),
                    [],
                    [
                      Expression.createCallExpression(
                        Expression.createElementAccessExpression(
                          Param,
                          Expression.createIdentifierExpression(
                            "get",
                            __DEFAULT_RANGE
                          ),
                          __DEFAULT_RANGE
                        ),
                        [GenericMapType],
                        [],
                        __DEFAULT_RANGE
                      ),
                    ],
                    __DEFAULT_RANGE
                  ),
                ]);
              }
            });
            const objectliteral = new ObjectLiteralExpression(
              kvr.map((e) => e[0]),
              kvr.map((e) => e[1]),
              __DEFAULT_RANGE
            );
            console.log(kvr[0]?.map(e=>!!e))
            console.log(kvr[1]?.map(e=>!!e))
            s.members.push(
              Expression.createMethodDeclaration(
                Expression.createIdentifierExpression(
                  "__Json__Deserialize",
                  __DEFAULT_RANGE
                ),
                null,
                CommonFlags.STATIC,
                null,
                Expression.createFunctionType(
                  [
                    Expression.createParameter(
                      ParameterKind.DEFAULT,
                      Expression.createIdentifierExpression(
                        "param",
                        __DEFAULT_RANGE
                      ),
                      GenericMapType,
                      null,
                      __DEFAULT_RANGE
                    ),
                  ],
                  Expression.createNamedType(
                    (console.log(s.name.text),Expression.createSimpleTypeName(s.name.text+'1', __DEFAULT_RANGE)),
                    null,
                    false,
                    __DEFAULT_RANGE
                  ),
                  null,
                  false,
                  __DEFAULT_RANGE
                ),
                Statement.createBlockStatement(
                  [
                    Statement.createReturnStatement(
                      objectliteral,
                      __DEFAULT_RANGE
                    ),
                  ],
                  __DEFAULT_RANGE
                ),
                __DEFAULT_RANGE
              )
            );
          }
        }
      });
    });
  }
}
