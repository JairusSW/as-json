import { deserializeString_SIMD } from "../deserialize/simd/string";
import { serializeString_SIMD } from "../serialize/simd/string";
import { bench } from "as-bench/assembly/index"
const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()\\\"\t\r\f\n\u0000';
const str2 = '"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()\\\\\\"\\t\\r\\f\\n\\u0000"';

// bench("Serialize String (Simple)", () => {
//   serializeString(str);
// });

// bench("Serialize String (BS)", () => {
//     serializeString_BS(str);
//     bs.reset();
// });

const out = new ArrayBuffer(256);
bench("Serialize String (SIMD)", () => {
  // ~5.07GB/s
  serializeString_SIMD(str, changetype<usize>(out));
});

bench("Deserialize String (SIMD)", () => {
  // ~4.03GB/s
  deserializeString_SIMD(str2, changetype<usize>(out));
});