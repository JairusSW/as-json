import { ClassPrototype, IdentifierExpression, ImportStatement, FieldPrototype, MethodDeclaration, CommonFlags, FunctionTypeNode, TypeName, BlockStatement, FunctionPrototype, NamedTypeNode, ReturnStatement, StringLiteralExpression, VariableDeclaration, VariableStatement, BinaryExpression, ExpressionStatement, Token, PropertyAccessExpression, CallExpression, ThisExpression, } from "assemblyscript";
import { Transform } from "assemblyscript/transform";
export default class MyTransform extends Transform {
    readFile(filename, baseDir) {
        return null;
    }
    afterParse(p) {
        //console.log("Using as-json transform");
        p.sources.forEach((s) => {
            if (s.isLibrary)
                return;
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
    afterInitialize(program) {
        // initializer(program);
        // console.log(program.managedClasses);
        //program.filesByName.forEach((e) => {
        //   console.log(e.name);
        //});
        program.elementsByName.forEach((c) => {
            var _a, _b, _c;
            //program.elementsByName.forEach((e) => {});
            if (c instanceof ClassPrototype) {
                if (!!((_a = c.decoratorNodes) === null || _a === void 0 ? void 0 : _a.find((e) => {
                    /** detect decorator */
                    return (e.name instanceof IdentifierExpression && e.name.text == "json");
                }))) {
                    //   console.log({ ...c, program: {}, parent: {} });
                    (_b = c.members) === null || _b === void 0 ? void 0 : _b.forEach((m) => {
                        //console.log(ElementKind[m.kind]);
                        if (m instanceof FieldPrototype) {
                            console.log(m.name);
                        }
                    });
                    let fnBody = new BlockStatement([
                        new VariableStatement(null, [
                            new VariableDeclaration(new IdentifierExpression("_str", false, c.declaration.range), null, CommonFlags.LET, null, new StringLiteralExpression("{", c.declaration.range), c.declaration.range),
                        ], c.declaration.range),
                    ], c.declaration.range);
                    const escapeChars = (e) => {
                        let outChars = "";
                        let cchhar = "";
                        for (let i = 0; i < e.length; i++) {
                            cchhar = e.charAt(i);
                            if (cchhar == '"') {
                                outChars += `\\"` + cchhar;
                            }
                            else {
                                outChars += cchhar;
                            }
                        }
                        return outChars;
                    };
                    let i = 0;
                    const size = c.instanceMembers.size;
                    let d;
                    for (const field of c.instanceMembers.values()) {
                        // Leave out trailing commas
                        if (i < size - 1) {
                            d = new StringLiteralExpression(",", c.declaration.range);
                        }
                        else {
                            d = new StringLiteralExpression("", c.declaration.range);
                        }
                        if (field instanceof FieldPrototype) {
                            fnBody.statements.push(new ExpressionStatement(new BinaryExpression(Token.PLUS_EQUALS, new IdentifierExpression("_str", false, c.declaration.range), new BinaryExpression(Token.PLUS, new StringLiteralExpression('"' + escapeChars(field.name) + '":', c.declaration.range), new BinaryExpression(Token.PLUS, new CallExpression(new PropertyAccessExpression(new IdentifierExpression("JSON", false, c.declaration.range), new IdentifierExpression("stringify", false, c.declaration.range), c.declaration.range), null, [
                                new PropertyAccessExpression(new ThisExpression(c.declaration.range), new IdentifierExpression(field.name, false, c.declaration.range), c.declaration.range),
                            ], c.declaration.range), d, c.declaration.range), c.declaration.range), c.declaration.range)));
                        }
                        i++;
                    }
                    fnBody.statements.push(new ReturnStatement(new BinaryExpression(Token.PLUS, new IdentifierExpression("_str", false, c.declaration.range), new StringLiteralExpression("}", c.declaration.range), c.declaration.range), c.declaration.range));
                    let __JSON_Serialize = new FunctionPrototype("__JSON_Serialize", c, new MethodDeclaration(new IdentifierExpression("__JSON_Serialize", false, c.declaration.range), null, CommonFlags.INSTANCE, null, new FunctionTypeNode([], new NamedTypeNode(new TypeName(new IdentifierExpression("string", false, c.declaration.range), null, c.declaration.range), null, false, c.declaration.range), null, false, c.declaration.range), fnBody, c.declaration.range));
                    (_c = c.instanceMembers) === null || _c === void 0 ? void 0 : _c.set("__JSON_Serialize", __JSON_Serialize);
                    c.declaration.members.push(__JSON_Serialize.declaration);
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
;
