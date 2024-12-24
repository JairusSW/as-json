import { bs } from "../custom/bs";
import { deserializeString_SIMD } from "../deserialize/simd/string";
import { serializeString_BS } from "../serialize/bs/string";
import { serializeString_SIMD } from "../serialize/simd/string";
import { serializeString } from "../serialize/simple/string";
import { bench } from "as-bench/assembly/index"
const str = "hello wo";
const str2 = "\"hello wo\"";

// bench("Serialize String (Simple)", () => {
//   serializeString(str);
// });

// bench("Serialize String (BS)", () => {
//     serializeString_BS(str);
//     bs.reset();
// });

const out = new ArrayBuffer(16);
bench("Serialize String (SIMD)", () => {
  serializeString_SIMD(str, changetype<usize>(out));
});

bench("Deserialize String (SIMD)", () => {
  deserializeString_SIMD(str2, changetype<usize>(out));
});