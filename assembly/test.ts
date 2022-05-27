import "wasi"
import { JSON } from "."
@json
class Obj {
    hello: "world"
}
const obj: Obj = {
    hello: "world"
}
console.log(JSON.stringify(obj))