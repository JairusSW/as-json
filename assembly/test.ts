import { JSON } from ".";

// @json or @serializable work here
@json
class Vec3 {
  x: f32 = 0.0;
  y: f32 = 0.0;
  z: f32 = 0.0;
}

class Box<T> {
  value: T;
}

@json
class Player {
  @alias("first name")
  @omitnull()
  firstName: string | null;
  lastName!: string;
  lastActive!: i32[];
  // Drop in a code block, function, or expression that evaluates to a boolean
  @omitif("this.age < 18")
  age!: i32;
  @omitnull()
  pos!: Vec3 | null;
  isVerified!: boolean;
  @flatten("value")
  box: Box<i32> | null;
}

const player: Player = {
  firstName: null,
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true,
  box: null
};

const stringified = JSON.stringify<Player>(player);

const parsed = JSON.parse<Player>(stringified);

console.log("Stringified: " + stringified);
console.log("Parsed: " + JSON.stringify(parsed));