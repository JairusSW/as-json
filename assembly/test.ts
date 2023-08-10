import { JSON } from "./src/json";

@json
class Vec3 {
  x!: f64;
  y!: f64;
  z!: f64;
  @inline
  __JSON_Serialize(): string {
    return `{"x":${this.x.toString()},"y":${this.y.toString()},"z":${this.z.toString()}}`;
  }
  @inline
  __JSON_Set_Key(key: string, value: string): void {
    if (key == "x") {
      this.x = JSON.parseObjectValue<f64>(value);
      return;
    }
    if (key == "y") {
      this.y = JSON.parseObjectValue<f64>(value);
      return;
    }
    if (key == "z") {
      this.z = JSON.parseObjectValue<f64>(value);
      return;
    }
  }
}

const vec: Vec3 = {
  x: 1,
  y: 2,
  z: 3
}

console.log(JSON.stringify(vec));
console.log(JSON.stringify(JSON.parse<Vec3>(JSON.stringify(vec))));