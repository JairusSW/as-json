import { JSON } from ".";
import { deserializeObject } from "./deserialize/simple/object";
import { bytes } from "./util";
@json
class Vec3 {
    x: i16 = 1
    y: i16 = 2;
    z: i16 = 3;
}

const serialized = JSON.stringify(new Vec3());
console.log("Serialized: " + serialized);
const deserialized = deserializeObject<Vec3>(changetype<usize>(serialized), changetype<usize>(serialized) + bytes(serialized), changetype<usize>(new Vec3()));
console.log("Deserialized: " + JSON.stringify(deserialized));