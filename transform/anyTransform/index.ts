import { Transform } from "assemblyscript/cli/transform";

import {
    Program
} from "assemblyscript";

export = class MyTransform extends Transform {
    afterInitialize(program: Program): void {
        program.filesByName.forEach((file) => {
            // 
            if (!file.source.isLibrary) {
                file.
             }
        })
    }
}