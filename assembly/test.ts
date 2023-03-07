import { backSlashCode, quoteCode } from "./src/chars";
import { JSON } from "./src/json";
import { atoi_fast, unsafeCharCodeAt } from "./src/util";

// @json or @serializable work here
@json
class Vec3 {
  x: i32;
  y: i32;
  z: i32;
}

const vec: Vec3 = {
  x: 3,
  y: 1,
  z: 8
}

const serializedVec3 = JSON.stringify(vec);
console.log(serializedVec3);

const parsedVec3 = JSON.parse<Vec3>(serializedVec3);
console.log(JSON.stringify(parsedVec3));

console.log(`atoi_fast("429496729"): ${atoi_fast<i32>("429496729")}`);

console.log(`strtol("429496729"): ${i32.parse("429496729")}`);