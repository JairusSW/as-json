// import { JSON } from ".";
import { JSON } from ".";
@json
class Vec3 {
  x: f32 = 0.0;
  y: f32 = 0.0;
  z: f32 = 0.0;
}

@json
class Player {
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  age!: i32;
  pos!: JSON.Raw;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: "{\"x\":3.4,\"y\":1.2,\"z\":8.3}",
  isVerified: true
};

const stringified = JSON.stringify<Player>(player);
console.log(stringified);
console.log(idof<JSON.Raw>().toString());
console.log(idof<string>().toString())
// const parsed = JSON.parse<Player>(stringified);