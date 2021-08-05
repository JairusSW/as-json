const fs = require("fs");
const loader = require("@assemblyscript/loader");
const { WASI } = require('wasi')
const wasiOptions = {}
const wasi = new WASI(wasiOptions)
const imports = {
    wasi_snapshot_preview1: wasi.wasiImport
};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/output/bench.wasm"), imports);
wasi.start(wasmModule)