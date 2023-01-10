import { u128 } from "as-bignum/assembly";
import {
  JSON
} from ".";
@json
class Vec2 {
  x: f32
  y: f32
}

@json
class Contact {
  name: string
}

@json
class Player {
  firstName: string
  lastName: string
  lastActive: i32[]
  age: i32
  pos: Vec2
  contacts: Contact[]
  isVerified: boolean
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  contacts: [{ name: 'John' }],
  age: 23,
  pos: {
    x: -3.4,
    y: 1.2
  },
  isVerified: true
}

const stringified = JSON.stringify<Player>(player)
console.log('stringified')
console.log(stringified)
// {"firstName":"Emmet","lastName":"West","lastActive":[8,27,2022],"age":23,"pos":{"x":-3.4000000953674318,"y":1.2000000476837159},"isVerified":true}
// let stringified2 = `{"firstName":"John","lastName":"West","age":23}`

console.log('parsing')
const parsed = JSON.parse<Player>(stringified)
console.log(parsed.firstName)
console.log(parsed.contacts[0].name)
// console.log(Object.keys(parsed).length)