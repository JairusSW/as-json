import { wasi_console } from "@assemblyscript/wasi-shim/assembly/wasi_console";
import {
  JSON
} from ".";
@json
class Player {
  firstName: string;
  lastName: string;
  lastActive: i32[];
  age: i32;
  pos: Vec3 | null;
  isVerified: boolean;
  stats: Stats
}

@json
class Contacts {
  type: string
  player: string
}

const player = JSON.createObjectUnsafe<Player>()

player.firstName = "John";
player.lastName = "West";
player.age = 23;

const contact: Contacts = {
  player: JSON.stringify(player),
  type: "friends"
}

let stringifiedContact = JSON.stringify(contact);
console.log("Input (Should see backslashes logged): " + stringifiedContact);
const contacts = JSON.parse<Contacts>(stringifiedContact)
console.log("Player: " + contacts.player);
console.log("Type: " + contacts.type);
const parsedPlayer = JSON.parse<Player>(contacts.player);
console.log("Final Player: " + JSON.stringify(parsedPlayer));
console.log("Final Result (Contacts): " + JSON.stringify(contacts));/*
/*
// @ts-ignore
@json
class Stats {
  wins: u128
  loss: u128
}*/
// @ts-ignore
@json
class Vec3 {
  x: f32;
  y: f32;
  z: f32;
}
// @ts-ignore
@json
class Test {
  data: string
}
const vec: Vec3 = {
  x: 3.4,
  y: 1.2,
  z: 8.3
}
const test: Test = {
  data: JSON.stringify(vec)
}
/*
// @ts-ignore
@json
class Player {
  firstName: string;
  lastName: string;
  lastActive: i32[];
  age: i32;
  pos: Vec3 | null;
  isVerified: boolean;
  stats: Stats
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
  isVerified: true,
  stats: {
    wins: u128.fromString("443"),
    loss: u128.fromString("693")
  }
};
*//*
const serializedPlayer = JSON.stringify<Test>(test);
wasi_console.log("Serialized Player: " + serializedPlayer);
const deserializedPlayer = JSON.parse<Test>(serializedPlayer);
wasi_console.log("Deserialized Player: " + JSON.stringify(deserializedPlayer));
wasi_console.log("Deserialize Vec3: " + JSON.stringify(JSON.parse<Vec3>(deserializedPlayer.data)))
*/