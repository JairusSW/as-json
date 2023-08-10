import { snip_fast } from "./src/util";

import { JSON } from "./src/json";
@json
class Vec3 {
  x!: f64;
  y!: f64;
  z!: f64;
}

@json
class Player {
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  age!: i32;
  pos!: Vec3 | null;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3,
  },
  isVerified: true,
};

const vec: Vec3 = {
  x: 3,
  y: 1,
  z: 8,
};

function canSerde<T>(data: T, toBe: string = ""): void {
  if (!toBe) toBe = JSON.stringify<T>(data);
  const deserialized = JSON.stringify<T>(JSON.parse<T>(JSON.stringify(data)));
  if (deserialized != toBe) {
    console.log("Expected: " + toBe);
    console.log("Actual:   " + deserialized);
  } else {
    console.log("Passed Test")
  }
}

canSerde<Player>({
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3,
  },
  isVerified: true,
}, '{"firstName":"Emmet","lastName":"West","lastActive":[8,27,2022],"age":23,"pos":{"x":3.4,"y":1.2,"z":8.3},"isVerified":true}');
const serializedPlayer = JSON.stringify<Player>(player);
console.log(serializedPlayer);
const parsedPlayer = JSON.parse<Player>(serializedPlayer);
console.log(JSON.stringify(parsedPlayer));

const serializedVec3 = JSON.stringify(vec);
console.log(serializedVec3);

const parsedVec3 = JSON.parse<Vec3>(serializedVec3);
console.log(JSON.stringify(parsedVec3));

console.log("snip:");
console.log("1234 <-> " + snip_fast<i32>("1234").toString());
console.log("-1234 <-> " + snip_fast<i32>("-1234").toString());
console.log("12340 <-> " + snip_fast<i32>("1234e1").toString());
console.log("123400 <-> " + snip_fast<i32>("1234e2").toString());
console.log("1234000 <-> " + snip_fast<i32>("1234e3").toString());
console.log("12 <-> " + snip_fast<i32>("123e-1").toString());
console.log("123 <-> " + snip_fast<i32>("123").toString());
console.log("-12340 <-> " + snip_fast<i32>("-1234e1").toString());
console.log("-1234500 <-> " + snip_fast<i32>("-12345e2").toString());
console.log("-123456000 <-> " + snip_fast<i32>("-123456e3").toString());
console.log("-12 <-> " + snip_fast<i32>("-123e-1").toString());
console.log("-123 <-> " + snip_fast<i32>("-123").toString());
console.log(snip_fast<i32>("1000").toString());
console.log(snip_fast<i32>("-1000").toString());
console.log(JSON.stringify([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]));