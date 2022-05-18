import { JSON, parseMap } from "..";
import { StringSink } from "as-string-sink/assembly";
@json
class Vector {
    x: f32
    y: f32
}

const vec: Vector = {
    x: 0.0,
    y: 0.0
}

bench("JSON Stringify String", () => {
    blackbox(JSON.stringify("Hello"))
})

bench("JSON Stringify Boolean", () => {
    blackbox(JSON.stringify(true))
})

bench("JSON Stringify Integer", () => {
    blackbox(JSON.stringify(314))
})

bench("JSON Stringify Float", () => {
    blackbox(JSON.stringify(3.14))
})

bench("JSON Stringify Vector", () => {
    blackbox(JSON.stringify(vec));
});

bench("JSON Stringify Array", () => {
    blackbox(JSON.stringify([1,2,3,4,5]))
})

bench("JSON Parse String", () => {
    blackbox(JSON.parse<string>("\"Hello\""))
})

bench("JSON Parse Boolean", () => {
    blackbox(JSON.parse<boolean>("true"))
})

bench("JSON Parse Integer", () => {
    blackbox(JSON.parse<i32>("314"))
})

bench("JSON Parse Float", () => {
    blackbox(JSON.parse<f32>("3.14"))
})

bench("JSON Parse Vector", () => {
    blackbox(parseMap<Map<string, f32>>(("{\"x\":0.0,\"y\":0.0}")))
})
/*
bench("JSON Parse Array", () => {
    blackbox(JSON.parse<i32[]>("[1,2,3,4,5]"))
})*/