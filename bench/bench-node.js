import { readFileSync } from "fs";
import { WASI } from "wasi";
import { argv, env } from "node:process";

const wasm = readFileSync("./benchmark.wasm");

const wasi = new WASI({
  version: "preview1",
  args: argv,
  env,
  preopens: {},
});

const mod = new WebAssembly.Module(wasm);
const instance = new WebAssembly.Instance(mod, wasi.getImportObject());

wasi.start(instance);
