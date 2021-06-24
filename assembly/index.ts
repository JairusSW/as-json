import { deserializeArray, JSON } from "./JSON";

import { console, stringify } from "as-console";
/*
// @ts-ignore
@serializable
class JSONschema {
  firstName: string = "";
  lastName: string = "";
  age: i32 = 0;
}

const data: JSONschema = {
  firstName: "Jairus",
  lastName: "Tanaka",
  age: 14,
};

console.log("Testing Serialization");

// Serialize String

console.log("String: " + JSON.stringify("Hello, World!"));

// Serialize Number

console.log("Number: " + JSON.stringify(3.14));

// Serialize Boolean

console.log("Boolean: " + JSON.stringify(true));

// Serialize Array

console.log("Array: " + JSON.stringify(["Hello", "World"]));

// Serialize Object

console.log("Object: " + JSON.stringify(data));

console.log("Testing Deserialization");

// Deserialize String

console.log("String: " + JSON.parse<string>('"Hello, World!'));

// Deserialize Number

console.log("Number: " + JSON.parse<f64>("3.14").toString());

// Deserialize Boolean

console.log("Boolean: " + JSON.parse<boolean>("true").toString());

// Deserialize Array

console.log("Array: " + stringify(deserializeArray<Array<string>>('["Hello","Wor\\"ld","hoh,o"]')))
// Deserialize Object

console.log(
  "Object: " +
    JSON.parse<JSONschema>(
      `{"firstName":"Jairus","lastName":"BunnyBoy","age":14}`
    ).lastName
);
console.log(
  "Object: " +
    JSON.parse<JSONschema>(
      `{"firstName":"Jairus","lastName":"Chubbo","age":14}`
    ).lastName
);
console.log(
  "Object: " +
    JSON.parse<JSONschema>(
      `{"firstName":"Jairus","lastName":"SantaClaus","age":14}`
    ).lastName
);

 */
 // @ts-ignore
@serializable
class Benchschema {
  Hello: string = ""
}

const bench: Benchschema = {
  Hello: 'World'
};

const start1 = Date.now()

for (let i = 0; i < 500_000; i++) {
  JSON.stringify<Benchschema>(bench)
}

console.log(`JSON (AS) Stringify: ${Date.now() - start1}ms`)

const start2 = Date.now()

for (let i = 0; i < 1_000; i++) {
  JSON.parse<Benchschema>(`{"Hello"""World"}`)
}

console.log(`JSON (AS) Parse: ${Date.now() - start2}ms`)
