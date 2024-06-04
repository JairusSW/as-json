import { bench, blackbox } from "as-bench/assembly/bench";
import { Sink } from "../src/sink";
import { JSON } from "..";
import { serializeString } from "../serialize/string";

const set = JSON.Value.from([
  JSON.Value.from([]),
  JSON.Value.from([
    JSON.Value.from([])
  ]),
  JSON.Value.from([
    JSON.Value.from([]),
    JSON.Value.from([
      JSON.Value.from([])
    ]),
  ]),
]);

const page = Sink.withCapacity(65536);
/*
bench("Serialize Integer", () => {
  blackbox<Sink>(JSON.serialize(12345, page));
});


bench("Serialize Set Theoretical Representation", () => {
  blackbox<Sink>(JSON.serialize(set,page));
  page.reset();
});
bench("Serialize Float", () => {
  blackbox<Sink>(JSON.serialize<f64>(1.2345, page));
  page.reset();
});

bench("Serialize Float32", () => {
  blackbox<Sink>(JSON.serialize<f32>(1.2345, page));
  page.reset();
});*/
bench("Serialize String", () => {
  blackbox<Sink>(serializeString("hello world", page));
});
/*
bench("Parse Number: " + snip_fast<u32>("12345").toString(), () => {
  blackbox<u32>(snip_fast<u32>("12345"));
});*/