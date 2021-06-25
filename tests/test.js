const fs = require("fs");
const loader = require("@assemblyscript/loader");
const ConsoleImports = require('as-console/imports')
const Console = new ConsoleImports()
const imports = {
    ...Console.wasmImports
};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/output/test.wasm"), imports);
Console.wasmExports = wasmModule.exports
wasmModule.exports._start()
