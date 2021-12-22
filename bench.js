const benchmark = require("benchmark");
const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = {};
const wasm = fs.readFileSync('./simd.wasm')
WebAssembly.instantiate(wasm, imports).then((m) => {
  m.instance.exports.test()
})