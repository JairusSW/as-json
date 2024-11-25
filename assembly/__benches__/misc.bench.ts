import { serializeString_SIMD } from "../serialize/simd/string";
import { serializeString } from "../serialize/simple/string";

const str = "hello wo"
bench("Serialize String (Simple)", () => {
    serializeString(str);
});

// bench("Serialize String (BS)", () => {
//     serializeString_BS("h\\ello w");
//     bs.reset();
// });

const out = new ArrayBuffer(16);
bench("Serialize String (SIMD)", () => {
    serializeString_SIMD(str, changetype<usize>(out));
});