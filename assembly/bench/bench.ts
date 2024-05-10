import { JSON } from "..";
import { serializeUnknown } from "../serialize/unknown";
import { Sink } from "../src/sink";

import { bench, blackbox } from "as-bench/assembly/bench";

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
*/
bench("Serialize Vector 3 Struct", () => {
  blackbox<string>(vec.__JSON_Serialize_Unsafe());
});