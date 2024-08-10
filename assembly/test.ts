import { bs } from "./custom/bs";
import { serialize_simd } from "./serialize/string";

const out = new ArrayBuffer(1024);

serialize_simd("hello \"world abc", out);

console.log(String.UTF16.decode(out))