import { JSON, parseBooleanArray, parseMap, parseNumberArray } from "..";
@json
class Vector {
    x: f32
    y: f32
}

const vec: Vector = {
    x: 0.0,
    y: 0.0
}

bench("Stringify String", () => {
    blackbox(JSON.stringify("Hello"))
})

bench("Stringify Boolean", () => {
    blackbox(JSON.stringify(true))
})

bench("Stringify Integer", () => {
    blackbox(JSON.stringify(314))
})

bench("Stringify Float", () => {
    blackbox(JSON.stringify(3.14))
})

bench("Stringify Vector", () => {
    blackbox(JSON.stringify(vec));
});

bench("Stringify Array", () => {
    blackbox(JSON.stringify([1,2,3,4,5]))
})

bench("Parse String", () => {
    blackbox(JSON.parse<string>("\"Hello\""))
})

bench("Parse Boolean", () => {
    blackbox(JSON.parse<boolean>("true"))
})

bench("Parse Integer", () => {
    blackbox(JSON.parse<i32>("314"))
})

bench("Parse Float", () => {
    blackbox(JSON.parse<f32>("3.14"))
})

bench("Parse Vector", () => {
    blackbox(parseMap<Map<string, f32>>(("{\"x\":0.0,\"y\":0.0}")))
})

bench("Parse Boolean Array", () => {
    blackbox(parseBooleanArray<boolean[]>("[true,false,true,false,true]"))
})

bench("Parse Integer Array", () => {
    blackbox(parseNumberArray<u32[]>("[1,2,3,4,5]"))
})

bench("Parse Float Array", () => {
    blackbox(parseNumberArray<f32[]>("[1.0,2.0,3.0,4.0,5.0]"))
})
