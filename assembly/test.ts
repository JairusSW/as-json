import { JSON } from "./index";
import "wasi";
import { JSONobject, JSONValue } from "./jsonType";

declare let json: (...a: any) => any;
let myValue = JSONValue.from("");
function myFn(e: JSONValue): void {
  let myVal = e.expect<JSONobject>("Value must be object");
  console.log(myVal.get("key").expect<string>("Key must be string."));
}
myFn(myValue);
@json
export class player {
  name: string;
  position: vec;
  houseCoords: vec;
  constructor(name: string, position: vec, houseCoords: vec) {
    this.name = name;
    this.position = position;
    this.houseCoords = houseCoords;
  }
}

@json
export class vec {
  x: f64;
  y: f64;
}

let myPlayer = new player("Bobby", { x: 10, y: 20 }, { x: -10.1, y: 2000.4 });

console.log(JSON.stringify(myPlayer));
