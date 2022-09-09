import "wasi";
import { JSON, parseArrayArray, parseObjectArray } from ".";
import { removeWhitespace } from "./util";

// @ts-ignore
@json
class Vec2 {
  x: f32;
  y: f32;
}

// @ts-ignore
@json
class Player {
  firstName: string;
  lastName: string;
  lastActive: i32[];
  age: i32;
  pos: Vec2;
}

const data: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: -3.4,
    y: 1.2,
  },
};

const stringified = JSON.stringify<Player>(data);
console.log("Vec2 Stringify: " + stringified);
const parsed = JSON.parse<Player>(stringified);
console.log("Vec2 Parse: " + JSON.stringify<Player>(parsed));
console.log(
  `Parsed String Array: ${JSON.stringify(
    JSON.parse<string[]>(`\n[ "hello" ,  "world" ]  `)
  )}`
);

console.log(
  `Parsed Boolean Array: ${JSON.stringify(
    JSON.parse<boolean[]>(`\n[ false ,  true ]  `)
  )}`
);

console.log(
  `Parsed Number Array: ${JSON.stringify(
    JSON.parse<i32[]>(`[ 1 , 2\n ,3\n\t ]`)
  )}`
);

console.log(
  JSON.stringify<Vec2>(
    load<Vec2>(changetype<usize>(data), offsetof<Player>("pos"))
  )
);

console.log(
  JSON.stringify<string[][]>(
    parseArrayArray<string[][]>('[["a","b","c"],["d","e","f"]]')
  )
);

console.log(
  JSON.stringify<Player[][]>(
    parseObjectArray<Player[][]>(
      '[{"firstName":"Emmet","lastName":"West","lastActive":[8,7],"age":23,"pos":{"x":-3.4000000953674318,"y":1.2000000476837159}}]'
    )
  )
);
