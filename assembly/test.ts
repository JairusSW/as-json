import { anyType } from "./anyType"

const arr = new Array<anyType>()

const strAny = new anyType()

strAny.set<string>('Hello!')

arr.push(strAny)

console.log(arr[0].get<string>())