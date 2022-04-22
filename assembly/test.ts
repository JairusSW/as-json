import { stringify } from "as-console/assembly/wasi";
import "wasi"
import { JSON, json, parseObject } from "./index";

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
  lastName: 'Hutchison',
  age: 23
}

parseObject('{"firstName":"Emmet","lastName":"Hutchison","age":23}')

console.log(JSON.stringify(myPlayer))

const map = new Map<string, string>() 

map.set("firstName", "Emmet")
map.set("lastName", "Hutchison")
map.set("age", "23")

console.log(JSON.stringify(map))

console.log(JSON.stringify(JSON.parse<Map<string, string>>('{"firstName":"Emmet","lastName":"Hutchison","age":"23"}')))