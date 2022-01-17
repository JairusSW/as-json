import {
  Class,
  ClassPrototype,
  IdentifierExpression,
  ImportStatement,
  NodeKind,
  Parser,
  Program,
  Compiler,
  PropertyPrototype,
  ElementKind,
  FieldPrototype,
  FieldDeclaration,
  Tokenizer,
  Source,
  SourceKind,
  ClassDeclaration,
  MethodDeclaration,
  ExportMember,
  CommonFlags,
  FunctionTypeNode,
  TypeNode,
  TypeName,
  BlockStatement,
  FunctionPrototype,
  NamedTypeNode,
  ReturnStatement,
  StringLiteralExpression,
  VariableDeclaration,
  VariableStatement,
  Statement,
  BinaryExpression,
  ExpressionStatement,
  Token,
  PropertyAccessExpression,
  CallExpression,
  ThisExpression,
  Expression,
} from "assemblyscript";
import { Transform } from "assemblyscript/cli/transform";

// @ts-ignore CommonJS export is needed for AS transforms (we should add support for ESM upstream)

export = //
class MyTransform extends Transform {
  readFile(filename: string, baseDir: string) {
    return null;
  }
  afterParse(p: Parser) {
    p.sources.forEach((s) => {
      if (s.isLibrary) return;
      s.statements.forEach((s) => {
        if (s instanceof ImportStatement) {
          //   console.log(s.internalPath);
          // console.log(s.path.value.charAt(s.path.value.length - 1));
          if (s.path.value.charAt(s.path.value.length - 1) == "~") {
            s.path.value = s.path.value.slice(0, s.path.value.length - 1);
            s.internalPath = s.internalPath.slice(0, s.internalPath.length - 1);
          }
        }
      });
    });
  }
  afterInitialize(program: Program): void {
    // initializer(program);
    // console.log(program.managedClasses);
    program.filesByName.forEach((e) => {
      //   console.log(e.name);
    });
    program.elementsByName.forEach((c) => {
      program.elementsByName.forEach((e) => {});
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
            console.log(ElementKind[m.kind]);
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

          for (const field of c.instanceMembers!.values()) {
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
                        new StringLiteralExpression(",", c.declaration.range),
                        c.declaration.range
                      ),
                      c.declaration.range
                    ),
                    c.declaration.range
                  )
                )
              );
            }
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
          let mem = new FunctionPrototype(
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
          c.instanceMembers?.set("__JSON_Serialize", mem);
          (c.declaration as ClassDeclaration).members.push(mem.declaration);
          c.instanceMembers?.forEach((m) => {
            console.log(ElementKind[m.kind]);
            if (m instanceof FieldPrototype) {
              console.log(m.name);
            }
          });
        }
      }
    });
  }
};
