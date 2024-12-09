import { JSON } from "."

@json
class Vec3 {
  public x: i32 = 1;
  public y: i32 = 2;
  public z: i32 = 3;
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
const val = JSON.Value.from(new Vec3());

// const serialized = JSON.stringify(new Vec3());
console.log("Serialized: " + val.toString());
console.log(JSON.stringify(JSON.Value.from([val, val])));
// const deserialized = JSON.parseSafe<Vec3>(`{"x":1,"y":true,"z":3}`);
// console.log("Deserialized: " + JSON.stringify(deserialized));