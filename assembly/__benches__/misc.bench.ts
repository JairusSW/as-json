import { bench } from "as-bench/assembly/bench";
import { bs } from "../../modules/bs";
import { deserializeString_SIMD } from "../deserialize/simd/string";
import { deserializeString } from "../deserialize/simple/string";
import { bytes } from "../util/bytes";
const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()\\\"\t\r\f\n\u0000';
const str2 = '"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()\\\\\\"\\t\\r\\f\\n\\u0000"';
const srcStart = changetype<usize>(str);
const srcEnd = srcStart + bytes(str);
bs.ensureSize(2048);
bench("Deserialize String (Simple)", () => {
  deserializeStrin(str2);
});
// bench("Deserialize String (SIMD)", () => {
//   (str2, bs.buffer);
// });
bench("Deserialize String (SIMD)", () => {
  deserializeString_SIMD(str2, srcStart, srcEnd, __new(158, idof<string>()));
});
