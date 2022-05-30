import {
  ClassPrototype,
  IdentifierExpression,
  ImportStatement,
  Parser,
  Program,
  FieldPrototype,
  ClassDeclaration,
  MethodDeclaration,
  CommonFlags,
  FunctionTypeNode,
  TypeName,
  BlockStatement,
  FunctionPrototype,
  NamedTypeNode,
  ReturnStatement,
  StringLiteralExpression,
  VariableDeclaration,
  VariableStatement,
  BinaryExpression,
  ExpressionStatement,
  Token,
  PropertyAccessExpression,
  CallExpression,
  ThisExpression,
  VariableLikeDeclarationStatement,
  DiagnosticCode,
  ObjectLiteralExpression,
  Expression,
  Range,
  ParameterKind,
  Statement,
} from "assemblyscript";
import { Transform } from "assemblyscript/transform";

export default class MyTransform extends Transform {
  readFile(filename: string, baseDir: string) {
    return null;
  }
  afterParse(p: Parser) {
    p.sources.forEach((s) => {
      if (s.isLibrary) return;
      s.statements.forEach((s) => {
        if (s instanceof ClassDeclaration) {
          if (
            s.decorators?.find(
              (d) =>
                d.name instanceof IdentifierExpression && d.name.text == "json"
            )
          ) {

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
              new Range(0, 0)
            );
            const GenericMapType = Expression.createNamedType(
              Expression.createSimpleTypeName("string", new Range(0, 0)),
              [
                Expression.createNamedType(
                  new TypeName(
                    Expression.createIdentifierExpression(
                      "JSON",
                      new Range(0, 0)
                    ),
                    Expression.createSimpleTypeName(
                      "_Variant",
                      new Range(0, 0)
                    ),
                    new Range(0, 0)
                  ),
                  null,
                  false,
                  new Range(0, 0)
                ),
              ],
              false,
              new Range(0, 0)
            );
            let kvr: [IdentifierExpression, Expression][] = [];

            members.forEach((m) => {
              if (
                m.type instanceof NamedTypeNode &&
                m.type.name.next == null &&
                SimpleNames.includes(m.type.name.identifier.text)
              ) {
                // kvr.push([
                //   Expression.createIdentifierExpression(m.name.text, m.range),
                //   Expression.createCallExpression(
                //     Expression.createElementAccessExpression(
                //       Param,
                //       Expression.createIdentifierExpression(
                //         "get",
                //         new Range(0, 0)
                //       ),
                //       new Range(0, 0)
                //     ),
                //     [m.type!],
                //     [],
                //     new Range(0, 0)
                //   ),
                // ]);
              } else {
                // kvr.push([
                //   Expression.createIdentifierExpression(m.name.text, m.range),
                //   Expression.createCallExpression(
                //     Expression.createPropertyAccessExpression(
                //       m.type!,
                //       Expression.createIdentifierExpression(
                //         "__Json__Deserialize",
                //         new Range(0, 0)
                //       ),
                //       new Range(0, 0)
                //     ),
                //     [],
                //     [
                //       Expression.createCallExpression(
                //         Expression.createElementAccessExpression(
                //           Param,
                //           Expression.createIdentifierExpression(
                //             "get",
                //             new Range(0, 0)
                //           ),
                //           new Range(0, 0)
                //         ),
                //         [GenericMapType],
                //         [],
                //         new Range(0, 0)
                //       ),
                //     ],
                //     new Range(0, 0)
                //   ),
                // ]);
              }
            });
            const objectliteral = new ObjectLiteralExpression(
              kvr.map((e) => e[0]),
              kvr.map((e) => e[1]),
              new Range(0, 0)
            );
            s.members.push(
              Expression.createMethodDeclaration(
                Expression.createIdentifierExpression(
                  "__Json__Deserialize",
                  new Range(0, 0)
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
                        new Range(0, 0)
                      ),
                      GenericMapType,
                      null,
                      new Range(0, 0)
                    ),
                  ],
                  Expression.createNamedType(
                    Expression.createSimpleTypeName("this", new Range(0, 0)),
                    null,
                    false,
                    new Range(0, 0)
                  ),
                  null,
                  false,
                  new Range(0, 0)
                ),
                Statement.createBlockStatement(
                  [
                    Statement.createReturnStatement(
                      objectliteral,
                      new Range(0, 0)
                    ),
                  ],
                  new Range(0, 0)
                ),
                new Range(0, 0)
              )
            );
          }
        }
      });
    });
  }
}
