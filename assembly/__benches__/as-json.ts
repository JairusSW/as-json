bench("1+1", () => {
  blackbox("1+1".split("+w"))
})
/*import { JSON } from "..";

@json
class Vec2 {
  x: f32;
  y: f32;
}

const vec: Vec2 = blackbox<Vec2>({
  x: 0.0,
  y: 0.0,
});

bench("Stringify Object (Vec2)", () => {
  blackbox(JSON.stringify(vec));
});

bench("Parse Object (Vec2)", () => {
  blackbox(JSON.parse<Vec2>(blackbox('{"x":0.0,"y":0.0}')));
});

bench("Stringify Array", () => {
  blackbox(JSON.stringify(blackbox([1, 2, 3, 4, 5])));
});

bench("Parse Array", () => {
  blackbox(JSON.parse<i32[]>(blackbox("[1,2,3,4]")));
});

bench("Stringify Nested Array", () => {
  blackbox(
    JSON.stringify<string[][]>(
      blackbox([
        ["a", "b", "c"],
        ["d", "e", "f"],
      ])
    )
  );
});

bench("Parse Nested Array", () => {
  blackbox(JSON.parse<string[][]>(blackbox('[["a","b","c"],["d","e","f"]]')));
});

bench("Stringify String", () => {
  blackbox(JSON.stringify(blackbox("Hello")));
});

bench("Parse String", () => {
  blackbox(JSON.parse<string>(blackbox('"Hello"')));
});

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
});
*/