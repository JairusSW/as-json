import { deserializeArray, deserializeObject, deserializeString, JSON } from "./JSON";

import { console, stringify } from "as-console";

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

const start1 = Date.now()

for (let i = 0; i < 500_000; i++) {
  JSON.stringify<JSONschema>(data)
}

console.log(`JSON (AS) Stringify: ${Date.now() - start1}ms`)

const start2 = Date.now()

console.log(deserializeObject<JSONschema>( `{"firstName":"Jairus","lastName":"Tanaka","age":14}`).firstName)

for (let i = 0; i < 500_000; i++) {
  deserializeObject<JSONschema>( `{"firstName":"Jairus","lastName":"Tanaka","age":14}`)
}

console.log(`JSON (AS) Parse: ${Date.now() - start2}ms`)
