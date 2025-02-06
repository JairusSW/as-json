import { bs } from "../modules/as-bs/assembly";
import { JSON } from "./";
@json
class Vec3 {
  x: f32 = 0.0;
  y: f32 = 0.0;
  z: f32 = 0.0;
}

@json
class Player {
  @alias("first name")
  firstName: string = "";
  lastName: string = "";
  lastActive: i32[] = [];
  // // Drop in a code block, function, or expression that evaluates to a boolean
  // // @omitif((self) => self.age < 18)
  // // @omitif('this.age <= 0')
  // age: i32 = 0;
  // // @omitnull()
  // pos: Vec3 | null = new Vec3();
  // isVerified: boolean = false;
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  // age: 23,
  // pos: {
  //   x: 3.4,
  //   y: 1.2,
  //   z: 8.3
  // },
  // isVerified: true
};

// bs.proposeSize(1024);
const serialized = JSON.stringify<Player>(player);
console.log("Serialized: " + serialized);
// const parsed = JSON.parse<Player>(serialized);
// console.log("Parsed: " + JSON.stringify(parsed));