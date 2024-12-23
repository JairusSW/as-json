import { bs } from "../custom/bs";
import { serializeString_BS } from "../serialize/bs/string";
import { serializeString_SIMD } from "../serialize/simd/string";
import { serializeString } from "../serialize/simple/string";
import { bench } from "as-bench/assembly/bench"
const str = "hello wo";

bench("Serialize String (Simple)", () => {
  serializeString(str);
});

bench("Serialize String (BS)", () => {
    serializeString_BS(str);
    bs.reset();
});

const out = new ArrayBuffer(16);
bench("Serialize String (SIMD)", () => {
  serializeString_SIMD(str, changetype<usize>(out));
});
