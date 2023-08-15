import { bench, blackbox } from "as-bench/assembly/bench";
import { __atoi_fast } from "../assembly/src/util";
import { JSON } from "../assembly";

@json
class Vec3 {
    x: i32;
    y: i32;
    z: i32;
}

const vec: Vec3 = {
    x: 3,
    y: 1,
    z: 8,
}
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
*/
bench("Stringify Object (Vec3)", () => {
    blackbox<string>(JSON.stringify(vec));
});

bench("Parse Object (Vec3)", () => {
    blackbox<Vec3>(JSON.parse<Vec3>('{"x":0,"y":0,"z":0}'));
});

bench("Stringify Number Array", () => {
    blackbox<string>(JSON.stringify<i32[]>([1, 2, 3]));
});

bench("Parse Number Array", () => {
    blackbox<i32[]>(JSON.parse<i32[]>(blackbox("[1,2,3]")));
});

bench("Stringify String", () => {
    blackbox<string>(JSON.stringify(blackbox('Hello "World!')));
});

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