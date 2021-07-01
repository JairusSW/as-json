import { anyType } from "./anyType"

const arr = new Array<anyType>()

const strAny = new anyType()

strAny.set<string>('Hello!')

arr.push(strAny)

console.log(arr[0].get<string>())

//My internet turns off in 14 min. I'll push and you can make a fork and continue locally. Ok?