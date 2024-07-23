import { bench } from "as-bench/assembly/bench";
import { serializeString } from "../assembly/serialize/string";
import { bs } from "../assembly/custom/bs";

@json
class Vec3 {
  x: i32;
  y: i32;
  z: i32;
  __SERIALIZE_BS(): void {
    bs.write_128_u(i16x8(123, 34, 120, 34, 58, 49, 44, 34)); /* {"x":1," */
    bs.write_128_u(i16x8(121, 34, 58, 50, 44, 34, 122, 34)); /* y":2,"z" */
    bs.write_32_u(3342394); /* :3 */
    bs.write_16_u(125); /* } */
  }
}
const out = memory.data(1000);
const vec: Vec3 = {
  x: 3,
  y: 1,
  z: 8,
};
bench("Stringify Vec3", () => {
  vec.__SERIALIZE_BS();
  //bs.reset()
});
bench("Stringify String", () => {
  serializeString("Hello World");
});
/*
bench("Parse Number SNIP", () => {
    blackbox<i32>(snip_fast<i32>("12345"));
});

bench("Parse Number ATOI", () => {
    blackbox<i32>(__atoi_fast<i32>("12345"));
})

bench("Parse Number STDLIB", () => {
    blackbox<i32>(i32.parse("12345"));
});

bench("Stringify Object (Vec3)", () => {
    blackbox<string>(JSON.stringify(vec));
});

bench("Parse Object (Vec3)", () => {
    blackbox<Vec3>(JSON.parse<Vec3>('{"x":0,"y":0,"z":0}'));
});/*

bench("Stringify Number Array", () => {
    blackbox<string>(JSON.stringify<i32[]>([1, 2, 3]));
});

bench("Parse Number Array", () => {
    blackbox<i32[]>(JSON.parse<i32[]>(blackbox("[1,2,3]")));
});

bench("Stringify String", () => {
    blackbox<string>(JSON.stringify(blackbox('Hello "World!')));
});

bench("Parse Number ATOI", () => {
    blackbox<i32>(__atoi_fast<i32>("12345"));
})

bench("Parse String", () => {
    blackbox<string>(JSON.parse<string>(blackbox('"Hello "World!"')));
});
/*
bench("Stringify Boolean Array", () => {
    blackbox(JSON.stringify<boolean[]>([true, false, true]));
});

bench("Stringify String Array", () => {
    blackbox(JSON.stringify<string[]>(["a", "b", "c"]));
});*/
