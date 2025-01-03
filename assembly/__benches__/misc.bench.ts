import { deserializeString_SIMD } from "../deserialize/simd/string";
import { serializeString_SIMD } from "../serialize/simd/string";
import { bench } from "as-bench/assembly/index";
import { serialize_simple } from "../serialize/simple";
import { bs } from "as-bs";
const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()\\\"\t\r\f\n\u0000';
const str2 = '"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()\\\\\\"\\t\\r\\f\\n\\u0000"';

// bench("Serialize String (Simple)", () => {
//   serializeString(str);
// });

// bench("Serialize String (BS)", () => {
//     serializeString_BS(str);
//     bs.reset();
// });

@json
class Vec3 {
  x: i32 = 1;
  y: i32 = 2;
  z: i32 = 3;

  __SERIALIZE(ptr: usize = 0): string {
      if (ptr == 0) ptr = changetype<usize>(this);
      let out = `{"x":${load<i32>(ptr, offsetof<this>("x")).toString()},"y":${load<i32>(ptr, offsetof<this>("y")).toString()},"z":${load<i32>(ptr, offsetof<this>("z")).toString()},`;
      store<u16>(changetype<usize>(out) + ((out.length - 1) << 1), 125);
      return out;
    }

  __SERIALIZE_BS(ptr: usize = 0): void {
    ptr = ptr || changetype<usize>(this);
    bs.ensureSize(128);
    store<u64>(bs.offset, 9570664606466171);
    store<u16>(bs.offset, 58, 8);
    bs.offset += 10;

    serialize_simple<i32>(load<i32>(ptr, offsetof<this>("x")));

    store<u64>(bs.offset, 9570668901433388);
    store<u16>(bs.offset, 58, 8);
    bs.offset += 10;

    serialize_simple<i32>(load<i32>(ptr, offsetof<this>("y")));

    store<u64>(bs.offset, 9570673196400684);
    store<u16>(bs.offset, 58, 8);
    bs.offset += 10;

    serialize_simple<i32>(load<i32>(ptr, offsetof<this>("z")));

    store<u16>(bs.offset, 125);
    bs.offset += 2;
  }
}

const vec: Vec3 = {
  x: 1,
  y: 2,
  z: 3
}

bench("Serialize Object (New)", () => {
  vec.__SERIALIZE_BS(changetype<usize>(vec));
  bs.out<string>();
});

// bench("Serialize Object (Old)", () => {
//   vec.__SERIALIZE(changetype<usize>(vec));
// });
// }

// const out = new ArrayBuffer(256);
// bench("Serialize String (SIMD)", () => {
//   // ~5.07GB/s
//   serializeString_SIMD(str, changetype<usize>(out));
// });

// bench("Deserialize String (SIMD)", () => {
//   // ~4.03GB/s
//   deserializeString_SIMD(str2, changetype<usize>(out));
// });
