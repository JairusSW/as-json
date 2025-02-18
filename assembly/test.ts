import { JSON } from ".";
import { bs } from "../modules/as-bs/assembly";
import { serializeObject } from "./serialize/simple/object";

@json
class Obj {
  public a: string = "hello";
  public b: string = "world";
  public c: string = "\"\t\f\u0000\u0001";
}

@json
class Vec3 {
  x: f32 = 0.0;
  y: f32 = 0.0;
  z: f32 = 0.0;
}

@json
class Player {
  @alias("first name")
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  // Drop in a code block, function, or expression that evaluates to a boolean
  @omitif((self: Player) => self.age < 18)
  age!: i32;
  @omitnull()
  pos!: Vec3 | null;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Jairus",
  lastName: "Tanaka",
  lastActive: [2, 7, 2025],
  age: 18,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true
};

const a1 = JSON.stringify("\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000a\u000b\u000c\u000d\u000e\u000f\u000f\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f");
// console.log("Bytes    " + bytes(a1).toString());
console.log("a1: " + a1);

const obj = new Obj();
const a2 = JSON.stringify(obj);
// console.log("Bytes    " + bytes(a2).toString());
console.log("a2: " + a2);

const a3 = JSON.stringify(player);
// console.log("Bytes    " + bytes(a3).toString());
console.log("a3: " + a3);

const a4 = new JSON.Obj();

a4.set("x", 1.5);
a4.set("y", 5.4);
a4.set("z", 9.8);
a4.set("obj", obj)
a4.set<boolean>("bool", false);

console.log("a4: " + JSON.stringify(a4));

const a5 = JSON.parse<JSON.Obj>('{"foo":"bar"}');

console.log("a5: " + JSON.stringify(a5));

const a6 = JSON.parse<JSON.Obj>('{"x":1.5,"y":5.4,"z":9.8,"obj":{"foo":"bar"}}');

console.log("a6: " + JSON.stringify(a6));