// import { JSON } from "./index"

@json
class Vec3<T> {
  public x: i32 = 0;
  public y: i32 = 0;
  public z: T;
}

console.log(new Vec3<i32>().__SERIALIZE())

// @json
// class Base {
//   public bam: string = "harekogkeorgke"s
// }

// @json
// class Foo extends Base {
//   public bar: string = "\"this is ok\'"
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

// const serialized = JSON.stringify(new Foo());
// console.log("Serialized: " + serialized);
// const deserialized = JSON.parse<Foo>(serialized);
// console.log("Deserialized: " + JSON.stringify(deserialized));