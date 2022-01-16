import { JSON } from "./index";
import "wasi";
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

console.log(JSON.stringify(myPlayer));
