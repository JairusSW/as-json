import { JSON } from ".";
import { deserializeObject } from "./deserialize/simple/object";
import { bytes } from "./util";
@json
class Vec3 {
    x: i16 = 1;
    yy: i16 = 2;
    zzz: i16 = 3;
    xxxx: i16 = 4;
    yyyyy: i16 = 5;
    zzzzzz: i16 = 6;
    xxxxxxx: i16 = 7;
    yyyyyyyy: i16 = 8;
    zzzzzzzzz: i16 = 9;
}

let serialized = JSON.stringify(new Vec3());
console.log("Serialized: " + serialized);
let deserialized = deserializeObject<Vec3>(changetype<usize>(serialized), changetype<usize>(serialized) + bytes(serialized), changetype<usize>(new Vec3()));
console.log("Deserialized: " + JSON.stringify(deserialized));