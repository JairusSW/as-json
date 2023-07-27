import { JSON } from "./src/json";
import { atoi_fast, parseSciInteger } from "./src/util";
import * as a from "util/number";
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
    z: 8.3,
  },
  isVerified: true,
};

const vec: Vec3 = {
  x: 3,
  y: 1,
  z: 8,
};

const serializedPlayer = JSON.stringify<Player>(player);
console.log(serializedPlayer);
const parsedPlayer = JSON.parse<Player>(serializedPlayer);
console.log(JSON.stringify(parsedPlayer));

const serializedVec3 = JSON.stringify(vec);
console.log(serializedVec3);

const parsedVec3 = JSON.parse<Vec3>(serializedVec3);
console.log(JSON.stringify(parsedVec3));

console.log("atoi:");
console.log("123 - " + parseSciInteger<i32>("123").toString());
console.log("1230 - " + parseSciInteger<i32>("123e1").toString());
console.log("12300 - " + parseSciInteger<i32>("123e2").toString());
console.log("123000 - " + parseSciInteger<i32>("123e3").toString());
console.log("32 - " + parseSciInteger<i32>("123e-1").toString());

const str = changetype<string>(new ArrayBuffer(6));
console.log("istr:");
console.log("123 - " + istr8(123));
console.log("32 - " + istr8(32));
console.log("3 - " + istr8(3));

console.log(Uint8Array.wrap(changetype<ArrayBuffer>(istr8(12))).join(" "));
console.log(load<u32>(changetype<usize>(istr8(12))).toString());
@inline function istr8<
  T extends number
>(int: T): string {
  if (int >= 100) {
    const str = changetype<string>(__new(6, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 4);
    return str;
  } else if (int >= 10) {
    const str = changetype<string>(__new(4, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 2);
    return str;
  } else {
    const str = changetype<string>(__new(2, idof<String>()));
    store<u16>(changetype<usize>(str), (int % 10) + 48);
    return str;
  }
}

export function istr16<T extends number>(int: T): string {
  if (int >= 10_000) {
    const str = changetype<string>(__new(10, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 8);
    return str;
  } else if (int >= 1_000) {
    const str = changetype<string>(__new(8, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 6);
    return str;
  } else if (int >= 100) {
    const str = changetype<string>(__new(6, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 4);
    return str;
  } else if (int >= 10) {
    const str = changetype<string>(__new(4, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 2);
    return str;
  } else {
    const str = changetype<string>(__new(2, idof<String>()));
    store<u16>(changetype<usize>(str), (int % 10) + 48);
    return str;
  }
}

export function istr32<T extends number>(int: T): string {
  if (int >= 1_000_000_000) {
    const str = changetype<string>(__new(22, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 10000000000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 1000000000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 100000000) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 10000000) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), ((int / 1000000) % 10) + 48, 8);
    store<u16>(changetype<usize>(str), ((int / 100000) % 10) + 48, 10);
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48, 12);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 14);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 16);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 18);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 20);
    return str;
  } else if (int >= 100_000_000) {
    const str = changetype<string>(__new(20, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 1000000000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 100000000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 10000000) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 1000000) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), ((int / 100000) % 10) + 48, 8);
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48, 10);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 12);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 14);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 16);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 18);
    return str;
  } else if (int >= 10_000_000) {
    const str = changetype<string>(__new(18, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 100000000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 10000000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 1000000) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 100000) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48, 8);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 10);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 12);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 14);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 16);
    return str;
  } else if (int >= 10_000_000) {
    const str = changetype<string>(__new(16, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 10000000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 1000000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 100000) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 8);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 10);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 12);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 14);
    return str;
  } else if (int >= 1_000_000) {
    const str = changetype<string>(__new(14, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 1000000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 100000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 8);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 10);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 12);
    return str;
  } else if (int >= 100_000) {
    const str = changetype<string>(__new(12, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 100000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 8);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 10);
    return str;
  } else if (int >= 10_000) {
    const str = changetype<string>(__new(10, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 10000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 6);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 8);
    return str;
  } else if (int >= 1_000) {
    const str = changetype<string>(__new(8, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 1000) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 4);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 6);
    return str;
  } else if (int >= 100) {
    const str = changetype<string>(__new(6, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 100) % 10) + 48);
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48, 2);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 4);
    return str;
  } else if (int >= 10) {
    const str = changetype<string>(__new(4, idof<String>()));
    store<u16>(changetype<usize>(str), ((int / 10) % 10) + 48);
    store<u16>(changetype<usize>(str), (int % 10) + 48, 2);
    return str;
  } else {
    const str = changetype<string>(__new(2, idof<String>()));
    store<u16>(changetype<usize>(str), (int % 10) + 48);
    return str;
  }
}

export function istr64<T extends number>(int: T): string {
  const val = new ArrayBuffer(6);
  store<u16>(changetype<usize>(val), (int % 10) + 48, 4);
  if ((int = (int / 10) as T) > 0)
    store<u16>(changetype<usize>(val), (int % 10) + 48, 2);
  else return changetype<string>(val);
  if ((int = (int / 10) as T) > 0)
    store<u16>(changetype<usize>(val), (int % 10) + 48);
  return changetype<string>(val);
}

// 0 = 48
// 1 = 49
// 2 = 50
// 3 = 51
// 4 = 52
// 5 = 53
// 6 = 54
// 7 = 55
// 8 = 56
// 9 = 57

console.log(JSON.stringify("h\\i from gray\bson"));
