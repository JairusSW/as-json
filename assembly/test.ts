import "wasi"
import { JSON, parseNumberArray } from "."

console.log(JSON.stringify(parseNumberArray<i32[]>("[1,2,3,4,5]")))