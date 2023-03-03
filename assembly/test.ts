import { u128 } from "as-bignum/assembly";
import {
  JSON
} from ".";

const exp = `["abcdefg","st\\"ring\\" w\\"\\"ith quotes\\"","string \\t\\r\\"with ran\\tdom spa\\nces and \\nnewlines\\n\\n\\n","string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\""]`;

///console.log(exp);
/*console.log(JSON.stringify([
  "abcdefg",
  'st"ring" w""ith quotes"',
  'string \t\r"with ran\tdom spa\nces and \nnewlines\n\n\n',
  'string with colon : comma , brace [ ] bracket { } and quote " and other quote "',
]));*/

console.log("abcdefg");
console.log('st"ring" w""ith quotes"');
console.log('string \t\r"with ran\tdom spa\nces and \nnewlines\n\n\n');
console.log('string with colon : comma , brace [ ] bracket { } and quote " and other quote "');

console.log(JSON.stringify("abcdefg"));
console.log(JSON.stringify('st"ring" w""ith quotes"'));
console.log(JSON.stringify('string \t\r"with ran\tdom spa\nces and \nnewlines\n\n\n'));
console.log(JSON.stringify('string with colon : comma , brace [ ] bracket { } and quote " and other quote "'));

console.log(JSON.stringify("Hello W\"orld!"));
// @ts-ignore
@JSON
class Vec3 {
  x: f32 = 3.4;
  y: f32 = 1.2;
  z: f32 = 8.3;
}

// @ts-ignore
@JSON
class Stats extends Vec3 {
  wins: u128
  loss: u128
}

// @ts-ignore
@json
class Player {
  firstName: string;
  lastName: string;
  lastActive: i32[];
  age: i32;
  isVerified: boolean;
  stats: Stats
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [
    8,
    27,
    2022
  ],
  age: 23,
  isVerified: true,
  stats: {
    wins: u128.fromString("443"),
    loss: u128.fromString("693")
  }
};

const serializedPlayer = JSON.stringify<Player>(player);
console.log("Serialized Player: " + serializedPlayer);
const deserializedPlayer = JSON.parse<Player>(serializedPlayer);
console.log("Deserialized Player: " + JSON.stringify(deserializedPlayer));