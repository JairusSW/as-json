import { Variant } from "as-variant/assembly";
import "wasi";
import { JSON, parseMap } from ".";

// @json
class Vec {
    name: string;
    x: f32;
    y: f32;
    static __Json__Deserialize(param: Map<string,JSON._Variant>): Obj {
        return {
            name: param.get("name").get<string>(),
            x: param.get("x").get<f32>(),
            y: param.get("y").get<f32>()
        }
    }
}

const vec: Vec = {
    name: "Vector",
    x: -2.4,
    y: 3.1
}

console.log(Vec.__Json__Deserialize(parseMap<Map<string, Variant>>('{"name":"Vector","x":-2.4,"y":3.1}').name)
