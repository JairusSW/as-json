import { Variant } from "as-variant/assembly";
import "wasi";
import { JSON, parseMap } from ".";

@json
class Vec {
    x: f32;
    y: f32;
    // static __Json__Deserialize(param: Map<string,JSON._Variant>): Obj {
    //     return {
    //         name: param.get("name").get<string>(),
    //         x: param.get("x").get<f32>(),
    //         y: param.get("y").get<f32>()
    //     }
    // }
}

const vec: Vec = {
    x: -2.4,
    y: 3.1
}

console.log("ya boi")
console.log(isDefined(Vec.__Json__Deserialize).toString())
const map = new Map<string, Variant>()
map.set("x", Variant.from<f32>(-2.4))
map.set("y", Variant.from<f32>(3.1))
console.log(Vec.__Json__Deserialize(map).x.toString())
