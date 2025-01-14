import { JSON } from ".";
import { deserializeMap } from "./deserialize/simple/map";
import { deserializeObject } from "./deserialize/simple/object";
import { bytes } from "./util";

@json
class Vec3 {
  a: i16 = 1
  ab: i16 = 2;
  abc: i16 = 3;
  abcd: i16 = 4;
  abcde: i16 = 5;
}

const serialized = JSON.stringify(new Vec3());
console.log("Serialized: " + serialized);
const deserialized = deserializeObject<Vec3>(changetype<usize>(serialized), changetype<usize>(serialized) + bytes(serialized));
console.log("Deserialized: " + JSON.stringify(deserialized));