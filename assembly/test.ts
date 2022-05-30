import { Variant } from "as-variant/assembly";
import "wasi";
import { JSON } from ".";

// @json
class Obj {
    hello: string;
    static __Json__Deserialize(param: Map<string,JSON._Variant> ): Obj {
        return {
            hello: param.get("hello").get<string>()
        }
    }
}

const obj: Obj = {
    hello: "world"
}

console.log(Obj.__Json__Deserialize(new Map<string, Variant>().set("hello", Variant.from("world"))).hello)
