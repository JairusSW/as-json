import { backSlashCode, quoteCode } from "./src/chars";
import { JSON } from "./src/json";
import { atoi_fast, parseJSONInt, unsafeCharCodeAt } from "./src/util";

@json
class Vec3 {
  x!: f32;
  y!: f32;
  z!: f32;
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
    z: 8.3
  },
  isVerified: true
};

const vec: Vec3 = {
  x: 3,
  y: 1,
  z: 8
}

const serializedPlayer = JSON.stringify<Player>(player);
console.log(serializedPlayer);
const parsedPlayer = JSON.parse<Player>(serializedPlayer);
console.log(JSON.stringify(parsedPlayer));

const serializedVec3 = JSON.stringify(vec);
console.log(serializedVec3);

const parsedVec3 = JSON.parse<Vec3>(serializedVec3);
console.log(JSON.stringify(parsedVec3));

console.log(`atoi_fast("429496729"): ${atoi_fast<i32>("429496729")}`);

console.log(`strtol("429496729"): ${i32.parse("429496729")}`);

console.log(parseJSONInt<i32>("321").toString());
console.log(parseJSONInt<i32>("321e1").toString());
console.log(parseJSONInt<i32>("321e2").toString());
console.log(parseJSONInt<i32>("321e3").toString());
console.log(parseJSONInt<i32>("321e-1").toString());