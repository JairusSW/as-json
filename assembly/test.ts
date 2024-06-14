import { Box } from "as-container";
import { JSON } from ".";
import { deserializeObject } from "./deserialize/object";
@json
class Vec3 {
  @omitnull()
  xx: Box<f64> | null = Box.from<f64>(0.0);
  yy: Box<f64> | null = Box.from<f64>(0.0);
  zz: Box<f64> | null = Box.from<f64>(0.0);
}

const vec: Vec3 = {
  xx: null,
  yy: Box.from(2.0),
  zz: null//Box.from(3.0)
}

console.log(JSON.stringify(vec));

console.log(JSON.stringify(deserializeObject<Vec3>("{\"xx\":1.0,\"yy\":2.0,\"zz\":3.0}", true)));

console.log(load<u32>(changetype<usize>("xx")).toString())