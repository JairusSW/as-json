import "wasi"
import { json, JSON, parseArray } from "./index";
import { JSONArray, JSONValue } from "./jsonType";
/*
@json
class vec {
  x: f64;
  y: f64;
}

@json
class player {
  name: string;
  position: vec;
  houseCoords: vec;
}

let myPlayer: player = {
  name: "Bobby",
  position: {
    x: 10,
    y: 20
  },
  houseCoords: {
    x: -10.1,
    y: 2000.4
  }
}

@json
class JSONSchema {
  firstName: string
  lastName: string
  age: i32
}

const data: JSONSchema = {
  firstName: 'Emmet',
  lastName: 'Smith',
  age: 23
}

console.log(JSON.stringify(myPlayer))

let foo = JSONValue.from("hello, json types!")
console.log(JSON.stringify(foo))
const arr = new JSONArray()
arr.push(JSONValue.from("string!"))
arr.push(JSONValue.from(314))
arr.push(JSONValue.from(3.14))
arr.push(JSONValue.from(-314))
arr.push(JSONValue.from<boolean>(true))
arr.push(JSONValue.from<boolean>(false))
foo = JSONValue.from(arr)
console.log(JSON.stringify(foo))

console.log(JSON.stringify(JSON.parse<JSONValue>("\"hello\"")))
*/
console.log(JSON.stringify(parseArray<string[]>('[ "hello" , "pillow" ]')))
console.log(JSON.stringify(parseArray<string[]>('["hello","pillow"]')))

console.log(JSON.stringify(parseArray<i32[]>('[ 1 , 2,3, 4 ]')))
console.log(JSON.stringify(parseArray<i32[]>('[1,2,3,4]')))