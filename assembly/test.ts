import { JSON } from "."

@json
export class Vec3 extends JSON.Base {
  public x: i32 = 0;
  public y: i32 = 0;
  public z: i32 = 0;
}

const vec: Vec3 = {
  x: 1,
  y: 2,
  z: 3
}
const value = JSON.Value.from(vec);

console.log(value.toString())
// const serialized = JSON.stringify(new Vec3());
// console.log("Serialized: " + serialized);
// const deserialized = JSON.parseSafe<Vec3>(`{"x":1,"y":true,"z":3}`);
// console.log("Deserialized: " + JSON.stringify(deserialized));