const fs = require("fs");
const loader = require("@assemblyscript/loader");
const { WASI } = require("wasi");
const ConsoleImport = require('as-console/imports')
const Console = new ConsoleImport()
const wasiOptions = {};
const wasi = new WASI(wasiOptions);
const imports = {
  wasi_snapshot_preview1: wasi.wasiImport,
  ...Console.wasmImports
};
const wasmModule = loader.instantiateSync(
  fs.readFileSync(__dirname + "/output/test.wasm"),
  imports
);
Console.wasmExports = wasmModule.exports
wasi.start(wasmModule);
