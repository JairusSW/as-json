const kati = require("../../NodeJS/Kati");
const wasmModule = require('./index')
function benchParseJSON() {
  const start = Date.now();
  for (let i = 0; i < 500_000; i++) {
    JSON.parse(`{"firstName":"Jairus","lastName":"Tanaka","age":14}`);
  }
  console.log(`JSON (JS) Parse: ${Date.now() - start}ms`);
}
function benchStringifyJSON() {
  const start = Date.now();
  for (let i = 0; i < 500_000; i++) {
    JSON.stringify({
      firstName: "Jairus",
      lastName: "Tanaka",
      age: 14
    });
  }
  console.log(`JSON (JS) Stringify: ${Date.now() - start}ms`);
}
benchStringifyJSON();
benchParseJSON();

wasmModule._start()