import { JSON } from ".";

// @json or @serializable work here
@json
class Vec3 {
  x: f64 = 0.0;
  y: f64 = 0.0;
  z: f64 = 0.0;
}


@json
class Player {

  @alias("first name")
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  // Drop in a code block, function, or expression that evaluates to a boolean
  // @omitif((self: Player): boolean => self.age <= 18)
  age!: i32;

  @omitnull()
  pos!: Vec3 | null;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Jairus",
  lastName: "Tanaka",
  lastActive: [1, 20, 2025],
  age: 18,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3,
  },
  isVerified: true,
};

const stringified = JSON.stringify<Player>(player);
console.log("Serialized: " + stringified);
// const parsed = JSON.parse<Player>('{"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[1,20,2025],"age":18,"isVerified":true}');
console.log("Deserialized: " + JSON.stringify<Player>(JSON.parse<Player>('{"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[1,20,2025],"age":18,"isVerified":true}')));
console.log("Deserialized: " + JSON.stringify<Player>(JSON.parse<Player>('{"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[1,20,2025],"age":18,"isVerified":true}')));
console.log("Deserialized: " + JSON.stringify<Player>(JSON.parse<Player>('{"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[1,20,2025],"age":18,"isVerified":true}')));
console.log("Deserialized: " + JSON.stringify<Player>(JSON.parse<Player>('{"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[1,20,2025],"age":18,"isVerified":true}')));
console.log("Deserialized: " + JSON.stringify<Player>(JSON.parse<Player>('{"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[1,20,2025],"age":18,"isVerified":true}')));
console.log("Deserialized: " + JSON.stringify<Player>(JSON.parse<Player>('{"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[1,20,2025],"age":18,"isVerified":true}')));
