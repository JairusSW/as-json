import { JSON, parseDynamic } from "./index";
import "wasi";
import { JSONobject, JSONValue, JSONNull } from "./jsonType";

declare let json: (...a: any) => any;

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
let myval = JSONValue.from("hello ");
let my2ndVal = JSONValue.null;
console.log(myval.is<JSONNull>().toString());
let myDynamic = parseDynamic('"hello world"');
console.log(myDynamic.expect<string>("string"));
