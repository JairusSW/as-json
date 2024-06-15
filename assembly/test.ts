import { JSON } from ".";
import { deserializeObjectArray } from "./deserialize/array/object";
import { serializeArray } from "./serialize/array";

@json
class Base {}

@json
class Vec1 extends Base {
  x: f32 = 0.0;
}
@json
class Vec2 extends Vec1 {
  y: f32 = 0.0;
}
@json
class Vec3 extends Vec2 {
  z: f32 = 0.0;
}

const arr: Base[] = [
  new Vec1(),
  new Vec2(),
  new Vec3()
];

console.log(JSON.stringify(arr));