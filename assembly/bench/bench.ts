import { bench, blackbox } from "as-bench/assembly/bench";
import { Sink } from "../src/sink";
import { JSON } from "..";

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

bench("Serialize Set Theoretical Representation", () => {
  blackbox<Sink>(JSON.serialize(set));
});
/*bench("Serialize Float", () => {
  blackbox<Sink>(JSON.serialize<f64>(1.2345));
});

bench("Serialize Float32", () => {
  blackbox<Sink>(JSON.serialize<f32>(1.2345));
});
bench("Serialize String", () => {
  blackbox<Sink>(JSON.serialize("hello world"));
});

bench("Serialize Integer", () => {
  blackbox<Sink>(JSON.serialize(12345));
});

bench("Parse Number: " + __atoi_fast<u32>("12345").toString(), () => {
  blackbox<u32>(__atoi_fast<u32>("12345"));
});*/