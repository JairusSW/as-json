import { JSON } from ".";

// import { Buffer } from "./custom/buffer";
// import { serializeString_SIMD } from "./serialize/simd/string";

// @json
// class Vec3<T> {
//   public x: i32 = 0;
//   public y: i32 = 0;
//   public z: T;
// }

let a = "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000a\u000b\u000c\u000d\u000e\u000f\u000f\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f";
const b = "world";
JSON.stringifyTo(a, a)
// console.log(JSON.stringifyTo(a, a));

console.log("A: " + a.toString());
console.log("B: " + b.toString());

// console.log(new Vec3<i32>().__SERIALIZE())

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