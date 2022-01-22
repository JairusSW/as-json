const fs = require("fs");
const loader = require("@assemblyscript/loader");
const { WASI } = require("wasi");
const wasiOptions = {};
const wasi = new WASI(wasiOptions);
const imports = {
  wasi_snapshot_preview1: wasi.wasiImport,
};
const wasmModule = loader.instantiateSync(
  fs.readFileSync(__dirname + "/output/bench.wasm"),
  imports
);
wasi.start(wasmModule);

function bench(title, code) {
  let ops = 100_000;
  const start = Date.now();
  while (ops--) {
    code();
  }
  const time = Date.now() - start;
  if (time <= 0) {
    console.log(
      `${title}: ~${100_000 * 1000}.00 ops/s | ${(time * 100) / 100}ms`
    );
  } else {
    console.log(
      `${title}: ~${
        Math.round(((100_000 * 1000) / time) * 100) / 100
      } ops/s | ${(time * 100) / 100}ms`
    );
  }
}

const jsonData = {
  hello: "world",
};

Object;

bench("JSON Stringify String", () => {
  JSON.stringify("Hello World");
});

bench("JSON Parse String", () => {
  JSON.parse('"Hello World"');
});

bench("JSON Stringify Integer", () => {
  JSON.stringify(14);
});

bench("JSON Parse Integer", () => {
  JSON.parse("14");
});

bench("JSON Stringify Float", () => {
  JSON.stringify(7.3);
});

bench("JSON Parse Float", () => {
  JSON.parse("7.3");
});

bench("JSON Stringify Boolean", () => {
  JSON.stringify(true);
});

bench("JSON Parse Boolean", () => {
  JSON.parse("true");
});

bench("JSON Stringify Array", () => {
  JSON.stringify([true, false, true]);
});

bench("JSON Parse Array", () => {
  JSON.parse("[true,false,true]");
});

bench("JSON Stringify Object", () => {
  JSON.stringify(jsonData);
});

bench("JSON Parse Object", () => {
  JSON.parse('{"hello":"world"}');
});

bench("JSON Stringify Dynamic Object", () => {
  JSON.stringify(jsonData);
});

bench("JSON Parse Object", () => {
  JSON.parse('{"hello":"world"}');
});

bench("JSON Stringify Dynamic Array", () => {
  JSON.stringify(["Welcome to dynamic arrays", true]);
});

bench("JSON Parse Dynamic Array", () => {
  JSON.parse('["Welcome to dynamic arrays",true]');
});

bench("JSON Stringify Dynamic Array", () => {
  JSON.stringify(["hello", "world"]);
});
bench("JSON Parse Dynamic Array", () => {
  JSON.parse('["hello","hello"]');
});
