import { bs } from "./custom/bs";
import { serialize } from "./serialize/simple";
console.log(load<u32>(changetype<usize>("{}")).toString())
// console.log(load<u64>(changetype<usize>("null")).toString())
// serializeString("hell\"o");
// console.log(bs.shrinkTo<string>());
bs.setBuffer(new ArrayBuffer(8))
serialize(["hello","world"]);
console.log(bs.shrinkTo<string>());
const map = new Map<string, Date>();
map.set("hello",new Date(0));
map.set("foo",new Date(0));
serialize(map);
console.log(bs.shrinkTo<string>())
// JSON.stringifyTo(a, b)
// console.log(JSON.stringifyTo(a, a));

// console.log("A: " + JSON.stringify(a).toString());
// console.log("B: " + b.toString());
// console.log("C: " + JSON.stringify(c));

// console.log(JSON.stringify(null, ""))

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
