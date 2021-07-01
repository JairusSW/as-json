import { Transform } from "assemblyscript/cli/transform";

import {
    Program, VariableStatement, NamedTypeNode, NewExpression
} from "assemblyscript";

export = class MyTransform extends Transform {
    afterInitialize(program: Program): void {
        program.filesByName.forEach((file) => {
            program.managedClasses.forEach((c) => {
                console.log(c.name)
                if (c.name == "anyType") {
                    console.log(c.prototype.instanceMembers?.size);
                }
            })
            if (!file.source.isLibrary) {
                file.source.statements.forEach(statement => {
                    if (statement instanceof VariableStatement) {
                        statement.declarations.forEach(declaration => {
                            // console.log( NodeKind [declaration.kind ]);
                            // console.log(NodeKind[declaration.initializer?.kind??(()=>{throw new Error("1");})]);
                            if (declaration.initializer instanceof NewExpression) {
                                console.log(declaration.initializer.typeName.identifier.text)
                            }
                            if (declaration.type instanceof NamedTypeNode) {
                                console.log(declaration.type.name.identifier.text)
                            }
                        })

                    }
                })
            }
        })
    }
}
// you here?