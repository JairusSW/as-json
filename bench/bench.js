const fs = require("fs");
const { WASI } = require('wasi')

const wasiOptions = {
    args: process.argv,
    env: process.env
}

const wasi = new WASI(wasiOptions)
const imports = {
  wasi_snapshot_preview1: wasi.wasiImport
};
WebAssembly.instantiate(
  fs.readFileSync(__dirname + "/output/bench.wasm"),
  imports
).then(wasmModule => {
  wasi.start(wasmModule)
})

function benchStringify(name, data) {
  // Pre-run
  let preRuns = 100_000;
  while (preRuns--) {
    JSON.stringify(data);
  }
  // Bench
  const start = Date.now();
  let runs = 100_000;
  while (runs--) {
    JSON.stringify(data);
  }
  console.log(`Stringify (JS) ${name}: ~${Date.now() - start}ms`);
}

function benchParse(name, data) {
  // Pre-run
  let preRuns = 100_000;
  while (preRuns--) {
    JSON.parse(data);
  }
  // Bench
  const start = Date.now();
  let runs = 100_000;
  while (runs--) {
    JSON.parse(data);
  }
  console.log(`Parse (JS) ${name}: ~${Date.now() - start}ms`);
}

benchStringify("string", "Hello World");

benchStringify("number", 123);

benchStringify("boolean", true);

benchStringify("array", [1, 2, 3, 4, 5]);

benchStringify("object", {
  name: "Jairus",
  age: 14,
});

benchParse("string", '"Hello World"');

benchParse("number", '123');

benchParse("boolean", 'true');

benchParse("array", '[1,2,3,4,5]');

benchParse("object", '{"age":14}');
