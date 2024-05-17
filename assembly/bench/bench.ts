import { JSON } from "..";
import { _deserializeString, deserializeString } from "../deserialize/string";
import { ProductValue } from "../product";
import { serializeUnknown } from "../serialize/unknown";
import { Sink } from "../src/sink";

import { bench, blackbox } from "as-bench/assembly/bench";
import { __atoi_fast, __atoi_fast_safe } from "../src/util";

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

@unmanaged
class Vec3 {
  x: f64;
  y: f64;
  z: f64;
  @inline __JSON_Serialize(out: Sink | null = null): Sink {
    if (!out) {
      out = Sink.withCapacity(25);
    }

    out.write(this.__JSON_Serialize_Unsafe());

    return out;
  }
  @inline __JSON_Serialize_Unsafe(): string {
    return `{"x":${JSON.serialize<f64>(this.x)},"y":${JSON.serialize<f64>(this.y)},"z":${JSON.serialize<f64>(this.z)}}`;
  }
}

const vec: Vec3 = {
  x: 3.4,
  y: 1.2,
  z: -5.6
}

const map = new Map<string, JSON.Value>();
map.set("x", JSON.Value.from<f64>(3.4));
map.set("y", JSON.Value.from<f64>(1.2));
map.set("z", JSON.Value.from<f64>(-5.6));
/*
bench("Serialize Set Theoretical Representation", () => {
  blackbox<Sink>(serializeUnknown(set));
});
*//*
bench("Serialize Vector 3 Struct", () => {
  blackbox<string>(vec.__JSON_Serialize_Unsafe());
});
bench("Serialize String (Sink)", () => {
  blackbox<Sink>(JSON.serialize<string>("hello world"));
});
bench("Serialize String (No Sink)", () => {
  blackbox<string>(JSON.serialize<string>("hello world").toString());
});
bench("Parse String (Raw)", () => {
  blackbox<string>(_deserializeString("\"hello world\""));
});
bench("Parse String (Product)", () => {
  blackbox<ProductValue>(JSON.parse<string>("\"hello world\""));
});
bench("Parse String (Unwrap)", () => {
  blackbox<string>(JSON.parse<string>("\"hello world\"").unwrap<string>());
});*/

bench("ATOI (Unsafe)", () => {
  blackbox<u32>(__atoi_fast<u32>("1234567890"));
});

bench("ATOI (Safe)", () => {
  blackbox<u32>(__atoi_fast_safe<u32>("1234567890"));
});