import "wasi";
import { JSON } from ".";
import { removeWhitespace } from "./util";

// @ts-ignore
@json
class Vec2 {
  x: f32
  y: f32
}

// @ts-ignore
@json
class Player {
  firstName: string
  lastName: string
  lastActive: i32[]
  age: i32
  pos: Vec2
}

const data: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: -3.4,
    y: 1.2
  }
}

const stringified = JSON.stringify<Player>(data);
// {
//  "firstName": "Emmet",
//  "lastName": "West",
// "lastActive": [8, 27, 2022],
//  "age": 23,
//  "pos": {
//    "x": -3.4000000953674318,
//    "y": 1.2000000476837159
//  }
// }
console.log(`Stringified: ${stringified}`);
console.log(`Whitespace: ${removeWhitespace(`{
    "firstName": "Emmet",
    "lastName": "West",
   "lastActive": [8, 27, 2022],
    "age": 23,
    "pos": {
      "x": -3.4000000953674318,
      "y": 1.2000000476837159
    }
  }`)}`)
const parsed = JSON.parse<Player>(`{
    "firstName": "Emmet",
    "lastName": "West",
   "lastActive": [8, 27, 2022],
    "age": 23,
    "pos": {
      "x": -3.4000000953674318,
      "y": 1.2000000476837159
    }
  }`);
// Player {
//  firstName: "Emmet",
//  lastName: "West",
//  lastActive: [8, 27, 2022],
//  age: 23,
//  pos: {
//    x: -3.4000000953674318,
//    y: 1.2000000476837159
//  }
// }
console.log(`Parsed: ${JSON.stringify(parsed)}`);
