import { JSON } from "..";
import { bench } from "../custom/bench";


@json
class Vec3 {
  public x!: i32;
  public y!: i32;
  public z!: i32;

  @inline __SERIALIZE(ptr: usize): void {
    bs.proposeSize(98);
    store<u64>(bs.offset, 9570664606466171, 0); // {"x"
    store<u16>(bs.offset, 58, 8); // :
    bs.offset += 10;
    JSON.__serialize<i32>(load<i32>(ptr, offsetof<this>("x")));
    store<u64>(bs.offset, 9570668901433388, 0); // ,"y"
    store<u16>(bs.offset, 58, 8); // :
    bs.offset += 10;
    JSON.__serialize<i32>(load<i32>(ptr, offsetof<this>("y")));
    store<u64>(bs.offset, 9570673196400684, 0); // ,"z"
    store<u16>(bs.offset, 58, 8); // :
    bs.offset += 10;
    JSON.__serialize<i32>(load<i32>(ptr, offsetof<this>("z")));
    store<u16>(bs.offset, 125, 0); // }
    bs.offset += 2;
  }

  @inline __INITIALIZE(): this {
    return this;
  }

  @inline __DESERIALIZE(keyStart: usize, keyEnd: usize, valStart: usize, valEnd: usize, ptr: usize): void {
    switch (load<u16>(keyStart)) {
      case 120: {
        // x
        store<i32>(ptr, JSON.__deserialize<i32>(valStart, valEnd, 0), offsetof<this>("x"));
        return;
      }
      case 121: {
        // y
        store<i32>(ptr, JSON.__deserialize<i32>(valStart, valEnd, 0), offsetof<this>("y"));
        return;
      }
      case 122: {
        // z
        store<i32>(ptr, JSON.__deserialize<i32>(valStart, valEnd, 0), offsetof<this>("z"));
        return;
      }
    }
    return;
  }
}


@json
class LargeJSON {
  public id!: i32;
  public name!: string;
  public age!: i32;
  public email!: string;
  public street!: string;
  public city!: string;
  public state!: string;
  public zip!: string;
  public tags!: string[];
  public theme!: string;
  public notifications!: boolean;
  public language!: string;
  public movement!: Vec3[];
}

const v1: LargeJSON = {
  id: 2,
  name: "Medium Object",
  age: 18,
  email: "me@jairus.dev",
  street: "I don't want to say my street",
  city: "I don't want to say this either",
  state: "It really depends",
  zip: "I forget what it is",
  tags: ["me", "dogs", "mountains", "bar", "foo"],
  theme: "Hyper Term Black",
  notifications: true,
  language: "en-US",
  movement: [
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
  ],
};

const v2 = `{"id":2,"name":"Medium Object","age":18,"email":"me@jairus.dev","street":"I don't want to say my street","city":"I don't want to say this either","state":"It really depends","zip":"I forget what it is","tags":["me","dogs","mountains","bar","foo"],"theme":"Hyper Term Black","notifications":true,"language":"en-US","movement":[{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3},{"x":1,"y":2,"z":3}]}`;

bench(
  "Serialize Medium Object",
  () => {
    JSON.stringify(v1);
  },
  3_000_00,
);

bench(
  "Deserialize Medium Object",
  () => {
    JSON.parse<LargeJSON>(v2);
  },
  3_000_00,
);
