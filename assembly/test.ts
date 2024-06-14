import { Box } from "as-container";
import { JSON } from ".";
import { deserializeObject } from "./deserialize/object";
@json
class Vec3 {
  @omitnull()
  www: Box<f64> | null = Box.from<f64>(0.0);
  x: Box<f64> | null = Box.from<f64>(0.0);
  yy: Box<f64> | null = Box.from<f64>(0.0);
  zzzz: Box<f64> | null = Box.from<f64>(0.0);
}

const vec: Vec3 = {
  www: Box.from(5.0),
  x: null,
  yy: Box.from(2.0),
  zzzz: null//Box.from(4.0)
}

console.log(JSON.stringify(vec));

console.log(JSON.stringify(deserializeObject<Vec3>("{\"wwww\":0.0,\"x\":1.0,\"yy\":2.0,\"zzzz\":3.0}", true)));

console.log(load<u64>(changetype<usize>("zzzz")).toString())