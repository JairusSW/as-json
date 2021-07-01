"use strict";
const transform_1 = require("assemblyscript/cli/transform");
const assemblyscript_1 = require("assemblyscript");
module.exports = class MyTransform extends transform_1.Transform {
    afterInitialize(program) {
        program.filesByName.forEach((file) => {
            program.managedClasses.forEach((c) => {
                console.log(c.name);
                if (c.name == "anyType") {
                    console.log(c.prototype.instanceMembers?.size);
                }
            });
            if (!file.source.isLibrary) {
                file.source.statements.forEach(statement => {
                    if (statement instanceof assemblyscript_1.VariableStatement) {
                        statement.declarations.forEach(declaration => {
                            // console.log( NodeKind [declaration.kind ]);
                            // console.log(NodeKind[declaration.initializer?.kind??(()=>{throw new Error("1");})]);
                            if (declaration.initializer instanceof assemblyscript_1.NewExpression) {
                                console.log(declaration.initializer.typeName.identifier.text);
                            }
                            if (declaration.type instanceof assemblyscript_1.NamedTypeNode) {
                                console.log(declaration.type.name.identifier.text);
                            }
                        });
                    }
                });
            }
        });
    }
};
// you here?
