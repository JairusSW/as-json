import "wasi";
import { JSON } from ".";

@json
class Vec2 {
  x: f32
  y: f32
}
@json
class JSONSchema {
  firstName: string
  lastName: string
  age: i32
  pos: Vec2
}

const data: JSONSchema = {
  firstName: 'Emmet',
  lastName: 'Smith',
  age: 23,
  pos: {
    x: -3.4,
    y: 1.2
  }
}

if (isDefined(data.__JSON_Serialize)) {
  const stringified = data.__JSON_Serialize() as string;
  // '{"firstName":"Emmet","lastName":"Smith","age":23}'
  console.log(`Stringified: ${stringified}`);
}/*

// PARSING DOES NOT WORK QUITE YET!
const parsed = JSON.parse<JSONSchema>(stringified)
// { firstName: "Emmet", lastName: "Smith", age: 23 }
console.log(`Parsed: ${JSON.stringify(parsed)}`)*/