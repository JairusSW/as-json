import { itoa_fast } from "./custom/itoa";

const out = changetype<usize>(new ArrayBuffer(40));
itoa_fast(out, 1234567890);
console.log(String.UTF16.decodeUnsafe(out, 20));