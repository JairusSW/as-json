import { Variant } from "as-variant/assembly";
import "wasi";
import { JSON, parseMap } from ".";


class Vec2 {
    x: f32;
    y: f32;
    static __Json__Deserialize(param: Map<string, JSON._Variant>): Vec2 {
        return {
            x: param.get("x").get<f32>(),
            y: param.get("y").get<f32>()
        }
    }
}

const vec: Vec2 = {
    x: -2.4,
    y: 3.1
}

console.log(isDefined(Vec2.__Json__Deserialize).toString())
const map = new Map<string, Variant>()
map.set("x", Variant.from<f32>(-2.4))
map.set("y", Variant.from<f32>(3.1))
console.log(Vec2.__Json__Deserialize(map).x.toString())
console.log(JSON.stringify(124354231))
