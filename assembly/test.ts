import { JSON } from ".";
import { deserializeString } from "./deserialize/simple/string";
import { bytes } from "./util";
import { ptrToStr } from "./util/ptrToStr";

// @json or @serializable work here
@json
class Vec3 {
  x: f64 = 0.0;
  y: f64 = 0.0;
  z: f64 = 0.0;
  __INITIALIZE(): Vec3 {
    return this;
  }
}

@json
class Player {
  @alias("first name")
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  // Drop in a code block, function, or expression that evaluates to a boolean
  // @omitif((self: Player) => i32(self.age < 18)
  age: JSON.Box<i32> | null = null;
  @omitnull()
  pos!: Vec3 | null;
  isVerified!: boolean;
  __INITIALIZE(): Player {
    this.firstName = "";
    this.lastName = "";
    this.lastActive = [];
    this.age = null;
    this.pos = changetype<Vec3>(__new(offsetof<Vec3 | null>(), idof<Vec3 | null>())).__INITIALIZE()
    return this;
  }
  __DESERIALIZE(keyStart: usize, keyEnd: usize, valStart: usize, valEnd: usize, ptr: usize): void {
    console.log(`${ptrToStr(keyStart, keyEnd)} -> ${ptrToStr(valStart, valEnd)} (${keyEnd - keyStart})`)
    switch (keyEnd - keyStart) {
      case 20: {
        const code0 = load<u64>(keyStart, 0);
        const code1 = load<u64>(keyStart, 8);
        const code2 = load<u32>(keyStart, 16);
        if (code0 == 32370111954878566 && code1 == 27303545189433460 && code2 == 6619245) { // first name
          store<string>(ptr, JSON.__deserialize<string>(valStart, valEnd), offsetof<this>("firstName"));
          return;
        } else if (code0 == 32651591226032236 && code1 == 29555370777313345 && code2 == 6619254) { // lastActive
          store<Array<i32>>(ptr, JSON.__deserialize<Array<i32>>(valStart, valEnd), offsetof<this>("lastActive"));
          return;
        } else if (code0 == 28429342022500457 && code1 == 29555310648164466 && code2 == 6553701) { // isVerified
          store<boolean>(ptr, JSON.__deserialize<boolean>(valStart, valEnd), offsetof<this>("isVerified"));
          return;
        }
        return;
      }
      case 6: {
        let code = (<u64>load<u32>(keyStart) << 16) | <u64>load<u16>(keyStart, 4);
        if (code == 493928513648) { // pos
          store<Vec3 | null>(ptr, JSON.__deserialize<Vec3 | null>(valStart, valEnd), offsetof<this>("pos"));
          return;
        } else if (code == 433798447201) { // age
          store<JSON.Box<i32> | null>(ptr, JSON.__deserialize<JSON.Box<i32> | null>(valStart, valEnd), offsetof<this>("age"));
          return;
        }
        return;
      }
      case 16: {
        const code0 = load<u64>(keyStart, 0);
        const code1 = load<u64>(keyStart, 8);
        if (code0 == 32651591226032236 && code1 == 28429440805568590) { // lastName
          store<string>(ptr, JSON.__deserialize<string>(valStart, valEnd), offsetof<this>("lastName"));
          return;
        }
        return;
      }
    }
  }
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: null,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true
};

const stringified = JSON.stringify<Player>(player);
console.log("Serialized: " + stringified);
const parsed = JSON.parse<Player>(stringified);
console.log("Deserialized: " + JSON.stringify<Player>(parsed));