import { JSON } from ".";
import { bytes } from "./util/bytes";
import { deserializeObject_NEW } from "./deserialize/simple/object";


@json
class Vec3 {
  x: i8 = 1;
  y: i8 = 2;
  z: i8 = 3;
  xyx: i8 = 0;
}

const vec: Vec3 = {
  x: 1,
  y: 2,
  z: 3,
};
// const serialized = JSON.stringify<Vec3>(vec);
// const ss = '{ "x":1,"y":2,"z":3}'
// const s = changetype<usize>(ss);
// console.log("Serialized: " + serialized);
// const deserialized = deserializeObject_NEW<Vec3>(s, s + bytes(ss))
// console.log("Deserialized: " + JSON.stringify(deserialized));

// function str(start: usize, end: usize): string {
//     const size = end - start;
//     const out = __new(size, idof<string>());
//     memory.copy(out, start, size);
//     return changetype<string>(out);
// }
