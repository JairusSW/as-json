import { JSON } from "json-as/assembly";
import * as console from "as-console";
@json
class Yo {
  map: Map<string, u64>;

  constructor() {
    this.map = new Map();
  }
}

let y = new Yo();
y.map.set("bhavya", 3000);
console.log(JSON.stringify(y));