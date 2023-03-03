import { JSON } from "..";

@json
class Vec3 {
  x: f32;
  y: f32;
  z: f32;
}

const vec: Vec3 = blackbox<Vec3>({
  x: 0.0,
  y: 0.0,
  z: 0.0
});

bench("Stringify Object (Vec3)", () => {
  blackbox(JSON.stringify(vec));
});/*

bench("Parse Object (Vec3)", () => {
  blackbox(JSON.parse<Vec3>(blackbox('{"x":0.0,"y":0.0,"z":0.0}')));
});*/

bench("Stringify Array", () => {
  blackbox(JSON.stringify(blackbox([1, 2, 3, 4, 5])));
});

bench("Parse Array", () => {
  blackbox(JSON.parse<i32[]>(blackbox("[1,2,3,4]")));
});
/*
bench("Stringify Nested Array", () => {
  blackbox(
    JSON.stringify<string[][]>(
      blackbox([
        ["a", "b", "c"]
      ])
    )
  );
});

bench("Parse Nested Array", () => {
  blackbox(JSON.parse<string[][]>(blackbox('[["a","b","c"]]')));
});*/

bench("Stringify String", () => {
  blackbox(JSON.stringify(blackbox("Hello \"World!")));
});

bench("Parse String", () => {
  blackbox(JSON.parse<string>(blackbox('"Hello \"World!"')));
});
/*
bench("Stringify Boolean", () => {
  blackbox(JSON.stringify(blackbox(true)));
});

bench("Parse Boolean", () => {
  blackbox(JSON.parse<boolean>(blackbox("true")));
});

bench("Stringify Integer", () => {
  blackbox(JSON.stringify(blackbox(314)));
});

bench("Parse Integer", () => {
  blackbox(JSON.parse<i32>(blackbox("314")));
});

bench("Stringify Float", () => {
  blackbox(JSON.stringify(blackbox(3.14)));
});

bench("Parse Float", () => {
  blackbox(JSON.parse<f32>(blackbox("3.14")));
});*/