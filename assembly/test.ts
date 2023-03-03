import { u128 } from "as-bignum/assembly";
import {
  JSON
} from ".";
import { unsafeCharCodeAt } from "./src/util";
import { backSlashCode, quoteCode } from "./src/chars";

const exp = `["abcdefg","st\\"ring\\" w\\"\\"ith quotes\\"","string \\t\\r\\"with ran\\tdom spa\\nces and \\nnewlines\\n\\n\\n","string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\""]`;

/*console.log(JSON.stringify([
  "abcdefg",
  'st"ring" w""ith quotes"',
  'string \t\r"with ran\tdom spa\nces and \nnewlines\n\n\n',
  'string with colon : comma , brace [ ] bracket { } and quote " and other quote "',
]));*/

const str = "\\\""

function parseString(data: string): string {
  let result = "";
  let last = 1;
  let char = 0;
  for (let i = 1; i < data.length - 1; i++) {
    // \\"
    if (unsafeCharCodeAt(data, i) === backSlashCode) {
      char = unsafeCharCodeAt(data, ++i);
      result += data.slice(last, i - 1)
      if (char === 34) {
        result += "\"";
        last = ++i;
      } else if (char === 110) {
        result += "\n";
        last = ++i;
        // 92 98 114 116 102 117
      } else if (char >= 92 && char <= 117) {
        if (char === 92) {
          result += "\\";
          last = ++i;
        } else if (char === 98) {
          result += "\b";
          last = ++i;
        } else if (char === 102) {
          result += "\f";
          last = ++i;
        } else if (char === 114) {
          result += "\r";
          last = ++i;
        } else if (char === 116) {
          result += "\t";
          last = ++i;
        } else if (char === 117 && load<u64>(changetype<usize>(data) + <usize>((i + 1) << 1)) === 27584753879220272) {
          result += "\u000b";
          i += 4;
          last = ++i;
        }
      }
    }
  }
  result += data.slice(last, data.length - 1);
  return result;
}

console.log(parseString("\"Hello W\\\"orld!\""));
console.log(parseString("\"Hello New \\nWorld!\""));
console.log(parseString("\"\\t TAB Hello World!\""));
console.log(JSON.stringify(parseString("\"U000B \\u000b Hello World!\"")));
console.log(load<u32>(changetype<usize>(str)).toString());
console.log(load<u8>(changetype<usize>(str)).toString());
console.log(load<u8>(changetype<usize>(str) + <usize>2).toString());

console.log("abcdefg");
console.log('st"ring" w""ith quotes"');
console.log('string \t\r"with ran\tdom spa\nces and \nnewlines\n\n\n');
console.log('string with colon : comma , brace [ ] bracket { } and quote " and other quote "');

console.log(JSON.stringify("abcdefg"));
console.log(JSON.stringify('st"ring" w""ith quotes"'));
console.log(JSON.stringify('string \t\r"with ran\tdom spa\nces and \nnewlines\n\n\n'));
console.log(JSON.stringify('string with colon : comma , brace [ ] bracket { } and quote " and other quote "'));

console.log(JSON.stringify("Hello W\"orld!"));

console.log("U000B: \u000b")
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