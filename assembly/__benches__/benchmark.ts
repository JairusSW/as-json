import { JSON, parseBooleanArray, parseMap, parseNumberArray } from "..";
@json
class Vector {
    x: f32
    y: f32
}

const vec: Vector = blackbox<Vector>({
    x: 0.0,
    y: 0.0
})

bench("Stringify String", () => {
    blackbox(JSON.stringify(blackbox("Hello")))
})

bench("Stringify Boolean", () => {
    blackbox(JSON.stringify(blackbox(true)))
})

bench("Stringify Integer", () => {
    blackbox(JSON.stringify(blackbox(314)))
})

bench("Stringify Float", () => {
    blackbox(JSON.stringify(blackbox(3.14)))
})

bench("Stringify Vector", () => {
    blackbox(JSON.stringify(vec));
});

bench("Stringify Array", () => {
    blackbox(JSON.stringify(blackbox([1,2,3,4,5])))
})

bench("Parse String", () => {
    blackbox(JSON.parse<string>(blackbox("\"Hello\"")))
})

bench("Parse Boolean", () => {
    blackbox(JSON.parse<boolean>(blackbox("true")))
})

bench("Parse Integer", () => {
    blackbox(JSON.parse<i32>(blackbox("314")))
})

bench("Parse Float", () => {
    blackbox(JSON.parse<f32>(blackbox("3.14")))
})

bench("Parse Vector", () => {
    blackbox(parseMap<Map<string, f32>>((blackbox("{\"x\":0.0,\"y\":0.0}"))))
})

bench("Parse Boolean Array", () => {
    blackbox(parseBooleanArray<boolean[]>(blackbox("[true,false,true,false,true]")))
})

bench("Parse Integer Array", () => {
    blackbox(parseNumberArray<u32[]>(blackbox("[1,2,3,4,5]")))
})

bench("Parse Float Array", () => {
    blackbox(parseNumberArray<f32[]>(blackbox("[1.0,2.0,3.0,4.0,5.0]")))
})
