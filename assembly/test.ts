import { deserializeString_SIMD } from "./deserialize/simd/string";
import { serializeString_SIMD } from "./serialize/simd/string";
const out = changetype<usize>(new ArrayBuffer(64));

const str = '""""""""';
const SPLAT_34 = i16x8.splat(34);
const sieve = i16x8.eq(v128.load(changetype<usize>(str)), SPLAT_34);
const mask = i16x8.bitmask(sieve);
console.log("0b" + bits(mask))
console.log((clz(mask)).toString());
console.log("Lane: " + (ctz(mask)).toString())

function bits(mask: u32): string {
    let out = ""
    for (let i = 31; i >= 0; i--) {
        const bit = (mask >> i) & 1;
        out += bit.toString();
    }
    return out;
}



const serialized = String.UTF16.decodeUnsafe(out, serializeString_SIMD(str, out));
const deserialized = String.UTF16.decodeUnsafe(out, deserializeString_SIMD(serialized, out));
console.log("Serialized:   " + serialized);

console.log("Deserialized: " + deserialized);