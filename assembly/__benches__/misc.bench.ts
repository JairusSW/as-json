import { bench, blackbox } from "as-bench/assembly/bench";
import { serialize_simd_v1 } from "../serialize/simd/string";
import { serializeString } from "../serialize/simple/string";
import { serializeString_BS } from "../serialize/bs/string";
import { bs } from "../custom/bs";

bench("Serialize String (Simple)", () => {
    blackbox<string>(serializeString("h\\ello wor\"ld"));
});

bench("Serialize String (BS)", () => {
    serializeString_BS("h\\ello wor\"ld");
    bs.reset();
});

bench("Serialize String (SIMD)", () => {
    const out = new ArrayBuffer(34);
    blackbox<usize>(serialize_simd_v1("h\\ello wor\"ld", changetype<usize>(out)));
});