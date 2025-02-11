import { bs } from "../modules/as-bs/assembly";
import { JSON } from "./";
import { ptrToStr } from "./util/ptrToStr";

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
  // @omitif((self: Player) => self.age < 18)
  age!: i32;
  // @omitnull()
  // pos!: Vec3 | null;
  // isVerified!: boolean;
}

const player: Player = {
  firstName: "Jairus",
  lastName: "Tanaka",
  lastActive: [2, 7, 2025],
  age: 18,
  // pos: {
  //   x: 3.4,
  //   y: 1.2,
  //   z: 8.3
  // },
  // isVerified: true
};

const serialized = JSON.stringify<Player>(player);

console.log("Serialized: " + serialized);
const parsed = JSON.parse<Player>(serialized);

console.log("Parsed: " + JSON.stringify(parsed));