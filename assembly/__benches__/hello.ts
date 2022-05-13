import { JSON } from "..";

@json
class Vector {
    x: f32
    y: f32
}

const vec: Vector = {
    x: 0.0,
    y: 0.0
}

const arr = [1, 2, 3, 4, 5]

bench("JSON Stringify Vector", () => {
    blackbox(JSON.stringify(vec));
});

bench("JSON Stringify String", () => {
    blackbox(JSON.stringify("Hello World"))
})

bench("JSON Stringify Array", () => {
    blackbox(JSON.stringify(arr))
})