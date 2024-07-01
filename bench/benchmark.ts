import { bench, blackbox } from "as-bench/assembly/bench";
import { __atoi_fast } from "../assembly/util";
import { JSON } from "../assembly";

import { bl } from "../assembly/bl";
import { serializeString, serializeStringBL } from "../assembly/serialize/string";
import { serializeInteger, serializeIntegerBL } from "../assembly/serialize/integer";
import { serializeFloatBL } from "../assembly/serialize/float";

const out = new ArrayBuffer(65536);
@json
class Vec3 {
    x: i32;
    y: i32;
    z: i32;
    __SERIALIZE_BL(): void {
        bl.write_128_u(i16x8(123, 34, 120, 34, 58, 49, 44, 34)); /* {"x":1," */
        bl.write_128_u(i16x8(121, 34, 58, 50, 44, 34, 122, 34)); /* y":2,"z" */
        bl.write_32_u(3342394); /* :3 */
        bl.write_16_u(125); /* } */
    }
}

console.log(load<i32>(changetype<usize>("12")).toString())
const vec: Vec3 = {
    x: 3,
    y: 1,
    z: 8,
}

bench("Serialize String (New)", () => {
    serializeStringBL("hello world");
    bl._out(changetype<usize>(out))
    bl.reset();
});

bench("Serialize String (Old)", () => {
    serializeString("hello world");
});

bench("Serialize Vec3 (New)", () => {
    vec.__SERIALIZE_BL();
    bl._out(changetype<usize>(out))
    bl.reset();
});

bench("Serialize Vec3 (Old)", () => {
    blackbox(JSON.stringify(vec));
});

bench("Serialize Integer", () =>{
    serializeIntegerBL<i32>(12345);
    bl._out(changetype<usize>(out))
    bl.reset();
});

bench("Serialize Float", () => {
    serializeFloatBL<f64>(1.2345);
    bl._out(changetype<usize>(out))
    bl.reset();
})