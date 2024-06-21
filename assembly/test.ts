// @json or @serializable work here
@json
class Vec3 {
  x: f64 | null = 1.0;
  b: boolean | null = true;
}

const vec: Vec3 = {
  x: 3.0,
  b: null
}

vec.x = null;
vec.x = 9;

console.log(vec.x!.toString());
if (vec.b) {
  console.log(vec.b!.toString());
} else {
  console.log("vec.b is null!")
}