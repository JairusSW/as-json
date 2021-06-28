const fs = require("fs");
const loader = require("@assemblyscript/loader");
const ConsoleImports = require("as-console/imports");
const Console = new ConsoleImports();
const imports = {
  ...Console.wasmImports,
};
const wasmModule = loader.instantiateSync(
  fs.readFileSync(__dirname + "/output/bench.wasm"),
  imports
);
Console.wasmExports = wasmModule.exports;
wasmModule.exports._start();

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

benchParse("object", '{"name":"Jairus","age":14}');
