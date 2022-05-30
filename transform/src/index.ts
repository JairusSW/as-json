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
                  "Type information must be specified for JSON serialization."
                );
              }
            });
            const SimpleNames = ["u8", "u16"];
            const Param = Expression.createIdentifierExpression(
              "param",
              new Range(0, 0)
            );
            const GenericMapType = Expression.createNamedType(
              Expression.createSimpleTypeName("", new Range(0, 0)),
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
                kvr.push([
                  Expression.createIdentifierExpression(m.name.text, m.range),
                  Expression.createCallExpression(
                    Expression.createElementAccessExpression(
                      Param,
                      Expression.createIdentifierExpression(
                        "get",
                        new Range(0, 0)
                      ),
                      new Range(0, 0)
                    ),
                    [m.type!],
                    [],
                    new Range(0, 0)
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
                        new Range(0, 0)
                      ),
                      new Range(0, 0)
                    ),
                    [],
                    [
                      Expression.createCallExpression(
                        Expression.createElementAccessExpression(
                          Param,
                          Expression.createIdentifierExpression(
                            "get",
                            new Range(0, 0)
                          ),
                          new Range(0, 0)
                        ),
                        [GenericMapType],
                        [],
                        new Range(0, 0)
                      ),
                    ],
                    new Range(0, 0)
                  ),
                ]);
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
                CommonFlags.NONE,
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
  afterInitialize(program: Program): void {
    // initializer(program);
    // console.log(program.managedClasses);
    //program.filesByName.forEach((e) => {
    //   console.log(e.name);
    //});
    program.elementsByName.forEach((c) => {
      //program.elementsByName.forEach((e) => {});
      if (c instanceof ClassPrototype) {
        if (
          !!c.decoratorNodes?.find((e) => {
            /** detect decorator */
            return (
              e.name instanceof IdentifierExpression && e.name.text == "json"
            );
          })
        ) {
          //   console.log({ ...c, program: {}, parent: {} });

          c.members?.forEach((m) => {
            //console.log(ElementKind[m.kind]);
            if (m instanceof FieldPrototype) {
              console.log(m.name);
            }
          });
          let fnBody = new BlockStatement(
            [
              new VariableStatement(
                null,
                [
                  new VariableDeclaration(
                    new IdentifierExpression(
                      "_str",
                      false,
                      c.declaration.range
                    ),
                    null,
                    CommonFlags.LET,
                    null,
                    new StringLiteralExpression("{", c.declaration.range),
                    c.declaration.range
                  ),
                ],
                c.declaration.range
              ),
            ],
            c.declaration.range
          );
          const escapeChars = (e: string) => {
            let outChars = "";
            let cchhar = "";
            for (let i = 0; i < e.length; i++) {
              cchhar = e.charAt(i);

              if (cchhar == '"') {
                outChars += `\\"` + cchhar;
              } else {
                outChars += cchhar;
              }
            }
            return outChars;
          };
          let i = 0;
          const size = c.instanceMembers!.size;
          let d;
          for (const field of c.instanceMembers!.values()) {
            // Leave out trailing commas
            if (i < size - 1) {
              d = new StringLiteralExpression(",", c.declaration.range);
            } else {
              d = new StringLiteralExpression("", c.declaration.range);
            }
            if (field instanceof FieldPrototype) {
              fnBody.statements.push(
                new ExpressionStatement(
                  new BinaryExpression(
                    Token.PLUS_EQUALS,
                    new IdentifierExpression(
                      "_str",
                      false,
                      c.declaration.range
                    ),
                    new BinaryExpression(
                      Token.PLUS,
                      new StringLiteralExpression(
                        '"' + escapeChars(field.name) + '":',
                        c.declaration.range
                      ),
                      new BinaryExpression(
                        Token.PLUS,
                        new CallExpression(
                          new PropertyAccessExpression(
                            new IdentifierExpression(
                              "JSON",
                              false,
                              c.declaration.range
                            ),
                            new IdentifierExpression(
                              "stringify",
                              false,
                              c.declaration.range
                            ),
                            c.declaration.range
                          ),
                          null,
                          [
                            new PropertyAccessExpression(
                              new ThisExpression(c.declaration.range),
                              new IdentifierExpression(
                                field.name,
                                false,
                                c.declaration.range
                              ),
                              c.declaration.range
                            ),
                          ],
                          c.declaration.range
                        ),
                        d,
                        c.declaration.range
                      ),
                      c.declaration.range
                    ),
                    c.declaration.range
                  )
                )
              );
            }
            i++;
          }
          fnBody.statements.push(
            new ReturnStatement(
              new BinaryExpression(
                Token.PLUS,
                new IdentifierExpression("_str", false, c.declaration.range),
                new StringLiteralExpression("}", c.declaration.range),
                c.declaration.range
              ),
              c.declaration.range
            )
          );
          let __JSON_Serialize = new FunctionPrototype(
            "__JSON_Serialize",
            c,
            new MethodDeclaration(
              new IdentifierExpression(
                "__JSON_Serialize",
                false,
                c.declaration.range
              ),
              null,
              CommonFlags.INSTANCE,
              null,
              new FunctionTypeNode(
                [],
                new NamedTypeNode(
                  new TypeName(
                    new IdentifierExpression(
                      "string",
                      false,
                      c.declaration.range
                    ),
                    null,
                    c.declaration.range
                  ),
                  null,
                  false,
                  c.declaration.range
                ),
                null,
                false,
                c.declaration.range
              ),
              fnBody,
              c.declaration.range
            )
          );
          c.instanceMembers?.set("__JSON_Serialize", __JSON_Serialize);
          (c.declaration as ClassDeclaration).members.push(
            __JSON_Serialize.declaration
          );
          //c.instanceMembers?.forEach((m) => {
          //console.log(ElementKind[m.kind]);
          //if (m instanceof FieldPrototype) {
          // console.log(m.name);
          //}
          //});
        }
      }
    });
  }
}
