import { bench } from "as-bench/assembly";
import { JSON } from "..";
import { Vec3 } from "./schemas";
import { bs } from "../../modules/as-bs/assembly";
import { serializeString_SIMD } from "../serialize/simd/string";
import { serializeString } from "../serialize/simple/string";
import { deserializeString } from "../deserialize/simple/string";
import { bytes } from "../util";
import { deserializeString_SIMD } from "../deserialize/simd/string";

const vec: Vec3 = {
  x: 1,
  y: 2,
  z: 3
}

bs.ensureSize(4096);
// bench("Serialize Vector3", () => {
//   JSON.stringify(vec);
// });

// bench("Deserialize Vector3", () => {
//   JSON.parse<Vec3>('{"x":1,"y":2,"z":3}');
// });

// bench("Serialize String SIMD", () => {
//   serializeString_SIMD("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_=+{[}]|\\:;\"'?/>.<,'\"}");
//   bs.offset = changetype<usize>(bs.buffer);
//   bs.stackSize = 0;
// });

// bench("Serialize String", () => {
//   serializeString("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_=+{[}]|\\:;\"'?/>.<,'\"}");
//   bs.offset = changetype<usize>(bs.buffer);
//   bs.stackSize = 0;
// });

const src = '"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_=+{[}]|\\\\:;\\"\'?/>.<,\'\\"}"';
const srcStart = changetype<usize>(src);
const srcEnd = srcStart + bytes(src);
const out = changetype<usize>(new ArrayBuffer(256));
bench("Deserialize String", () => {
  deserializeString(srcStart, srcEnd, out);
});

bench("Deserialize String SIMD", () => {
  deserializeString_SIMD(srcStart, srcEnd, out);
})