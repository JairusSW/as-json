import { bs } from "./custom/bs";
import { serialize_simple } from "./serialize/simple";
import { VecBase } from "./types";
import { bytes } from "./util/bytes";

@json
class Vec3 {
    base: VecBase = new VecBase();
    x: i32 = 1;
    y: i32 = 2;
    z: i32 = 3;
    __SERIALIZE_BS(ptr: usize, staticSize: bool): void {
        store<u64>(bs.offset, 27303493649956987, 0); // {"ba
        store<u64>(bs.offset, 16325694684725363, 8); // se":
        bs.offset += 16;
        serialize_simple<VecBase>(load<VecBase>(ptr, offsetof<this>("base")), staticSize);
        store<u64>(bs.offset, 9570664606466092, 0); // ,"x"
        store<u16>(bs.offset, 58, 8); // :
        bs.offset += 10;
        serialize_simple<i32>(load<i32>(ptr, offsetof<this>("x")), staticSize);
        store<u64>(bs.offset, 9570668901433388, 0); // ,"y"
        store<u16>(bs.offset, 58, 8); // :
        bs.offset += 10;
        serialize_simple<i32>(load<i32>(ptr, offsetof<this>("y")), staticSize);
        store<u64>(bs.offset, 9570673196400684, 0); // ,"z"
        store<u16>(bs.offset, 58, 8); // :
        bs.offset += 10;
        serialize_simple<i32>(load<i32>(ptr, offsetof<this>("z")), staticSize);
        store<u16>(bs.offset, 125, 0); // }
        bs.offset += 2;
    }
}

function strToNum(data: string): void {
    console.log(data);
    let srcPtr = changetype<usize>(data);
    let n = bytes(data);
    while (n >= 8) {
        console.log("  i64: " + load<u64>(srcPtr).toString());
        n -= 8;
    }
    while (n >= 4) {
        console.log("  i32: " + load<u32>(srcPtr).toString());
        n -= 4;
    }
    while (n >= 2) {
        console.log("  i16: " + load<u16>(srcPtr).toString());
        n -= 16;
    }
    while (n >= 0) {
        console.log("  i8: " + load<u8>(srcPtr).toString());
        n -= 1;
    }
}

console.log(load<u32>(changetype<usize>("{}")).toString())
strToNum(',"z":')
const vec: Vec3 = {
    base: {
        base: 9
    },
    x: 1,
    y: 2,
    z: 3
}

bs.ensureSize(1024);
vec.__SERIALIZE_BS(changetype<usize>(vec), true);
let out = __new(bs.offset - bs.buffer, idof<string>())
const serialized = bs.shrinkTo<string>();
console.log("Serialized: " + serialized);

bench("Serialize Object (New)", () => {
    vec.__SERIALIZE_BS(changetype<usize>(vec), true);
    bs.out<string>();
});

// __reset()

// bench("Serialize Object (Old)", () => {
//     vec.__SERIALIZE(changetype<usize>(vec));
// });


function bench(desc: string, routine: () => void): void {
    const start = Date.now();
    const totalOps = 20_000_000;
    let ops = totalOps;
    while (--ops) routine();
    const elapsed = Date.now() - start;
    const opsPerSecond = Math.round(f64(totalOps) / (f64(elapsed) / 1000.0))
    console.log(desc + ": " + elapsed.toString() + "ms @ " + opsPerSecond.toString() + "ops/s");
}
// const deserialized = JSON.parse<Foo>(serialized);
// console.log("Deserialized: " + JSON.stringify(deserialized));
