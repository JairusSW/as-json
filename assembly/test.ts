import { backSlashCode, quoteCode } from "./src/chars";
import { JSON } from "./src/json";
import { atoi_fast, unsafeCharCodeAt } from "./src/util";

// @json or @serializable work here
@json
class Vec3 {
  x!: f32;
  y!: f32;
  z!: f32;

  @inline
  __JSON_Serialize(): string {
    return `{"x":${this.x.toString()},"y":${this.y.toString()},"z":${this.z.toString()}}`;
  }

  @inline
  __JSON_Deserialize(data: string, to: Vec3): Vec3 {
    let last = 1;
    let char = 0;
    let inStr = false;
    let key: string | null = null;
    let pos = 0;
    for (; pos < data.length - 1; pos++) {
      char = unsafeCharCodeAt(data, pos);
      if (inStr === false && char === quoteCode) {
        if (key != null) {
          if (key == "x") {
            to.x = f32.parse(data.slice(last, pos - 1))
          } else if (key == "y") {
            to.y = f32.parse(data.slice(last, pos - 1))
          } else if (key == "z") {
            to.z = f32.parse(data.slice(last, pos - 1))
          }
        }
        last = ++pos;
        inStr = true;
      } else if (char === quoteCode && unsafeCharCodeAt(data, pos - 1) != backSlashCode) {
        inStr = false;
        key = data.slice(last, pos);
        last = pos += 2;
      }
    }
    if (key != null) {
      if (key == "x") {
        to.x = f32.parse(data.slice(last, pos - 1))
      } else if (key == "y") {
        to.y = f32.parse(data.slice(last, pos - 1))
      } else if (key == "z") {
        to.z = f32.parse(data.slice(last, pos - 1))
      }
    }
    return to;
  }
}

const vec: Vec3 = {
  x: 3.4,
  y: 1.2,
  z: 8.3
}

const serializedVec3 = vec.__JSON_Serialize();
console.log(serializedVec3);

const parsedVec3 = vec.__JSON_Deserialize(serializedVec3, new Vec3());
console.log(parsedVec3.__JSON_Serialize());

console.log(`atoi_fast("429496729"): ${atoi_fast<i32>("429496729")}`);

console.log(`strtol("429496729"): ${i32.parse("429496729")}`);