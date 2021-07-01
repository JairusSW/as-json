"use strict";
const transform_1 = require("assemblyscript/cli/transform");
module.exports = class MyTransform extends transform_1.Transform {
    afterInitialize(program) {
        //reloading my vscode...
        program.filesByName.forEach((file) => {
            file.source.statements.forEach((s) => {
                console.log(s.name);
            });
        });
    }
};
