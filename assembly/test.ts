import { JSON } from "."
import { serializeString_SIMD } from "./serialize/simd/string";
const a = memory.data<u16>([
  92, 117, 48, 48
])
@json
class Vec3 {
  public x: i32 = 0;
  public y: i32 = 0;
  public z: i32 = 0;
}

// @json
// class Base {
//   public bam: string = "harekogkeorgke"
// }

// @json
// class Foo extends Base {
//   public bar: JSON.Raw = "\"this is ok\'"
//   public baz: i32 = 0;
//   public pos: Vec3<Vec3<i32>> = {
//     x: 1,
//     y: 2,
//     z: {
//       x: 1,
//       y: 2,
//       z: 3
//     }
//   }
//   // ^ this is not okay
// }
const out = new ArrayBuffer(128);
const len = serializeString_SIMD("h\ne\tllo wor\"ld", changetype<usize>(out));
const serialized = String.UTF16.decodeUnsafe(changetype<usize>(out), out.byteLength);
console.log("Serialized: " + serialized);
console.log(load<u64>(a).toString())
// const deserialized = JSON.parseSafe<Vec3>(`{"x":1,"y":true,"z":3}`);
// console.log("Deserialized: " + JSON.stringify(deserialized));