import "wasi"
import { JSON } from "./index";

declare let json: (...a: any) => any;

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

console.log(JSON.stringify(myPlayer))