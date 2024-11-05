import { bench, blackbox } from "as-bench/assembly/bench";
import { serializeString_SIMD } from "../serialize/simd/string";
import { serializeString } from "../serialize/simple/string";
import { serializeString_BS } from "../serialize/bs/string";
import { bs } from "../custom/bs";

// bench("Serialize String (Simple)", () => {
//     blackbox<string>(serializeString("h\\ello w"));
// });

// bench("Serialize String (BS)", () => {
//     serializeString_BS("h\\ello w");
//     bs.reset();
// });

const out = new ArrayBuffer(22);
bench("Serialize String (SIMD)", () => {
    blackbox<usize>(serializeString_SIMD("hello wo", changetype<usize>(out)));
});