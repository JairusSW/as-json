import { JSON } from ".";

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

const serialized = JSON.stringify(new Vec3());
console.log("Serialized: " + serialized);
const deserialized = JSON.parseSafe<Vec3>(`{"x":1,"y":true,"z":3}`);
console.log("Deserialized: " + JSON.stringify(deserialized));
