import { u128 } from "as-bignum/assembly";
import {
  JSON
} from ".";
import { parseObjectArray } from "./src/json";

@json
class Candle {
  timestamp!: i64;
  high!: f64;
  low!: f64;
  open!: f64;
  close!: f64;
  constructor(timestamp: i64, high: f64, low: f64, open: f64, close: f64) {
    this.timestamp = timestamp;
    this.high = high;
    this.low = low;
    this.open = open;
    this.close = close;
  }
}

//console.log(JSON.stringify(candle));

const parsedCandleArray: Candle[] = parseObjectArray<Candle[]>('{"timestamp":1620248400000,"high":573.3476371851107,"low":572.7653897862947,"open":573.3476371851107,"close":572.7653897862947},{"timestamp":1620249300000,"high":572.4966600947654,"low":572.3690847959957,"open":572.4966600947654,"close":572.3690847959957}');

console.log(JSON.stringify(parsedCandleArray[0]));
console.log(JSON.stringify(parsedCandleArray[1]));
/*
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
console.log("Deserialized Player: " + JSON.stringify(deserializedPlayer));*/