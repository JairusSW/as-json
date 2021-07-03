import { JSON, jsonType } from "."

let dynamicArray = JSON.parse<jsonType[]>('["Hello",12345,"haha",true]')

console.log(dynamicArray[0].get<string>())

console.log(dynamicArray[1].get<i32>().toString())

console.log(dynamicArray[2].get<string>())

console.log(dynamicArray[3].get<boolean>().toString())