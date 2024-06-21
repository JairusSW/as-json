import { JSON } from ".";

// @json or @serializable work here
@json
class Vec3 {
  x: f64 | null = 1.0;
}

const vec = new Vec3();
console.log(vec.x!.toString());