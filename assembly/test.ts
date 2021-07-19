import { deserializeObject, JSON, removeJSONWhitespace } from ".";

import { console, stringify } from "../node_modules/as-console/assembly/wasi";

// @ts-ignore
@json
class JSONSchema {
    firstName: string
    lastName: string
    human: boolean
    age: i32
    meta: Meta
    language: string
    location: f64[]
}

// @ts-ignore
@json
class Meta {
    country: string
    awesome: boolean
}

const data: JSONSchema = {
  firstName: 'Jairus',
  lastName: 'Tanaka',
  age: 14,
  human: true,
  meta: {
    country: 'US',
    awesome: true
  },
  language: "english",
  location: [-43.130850291, 32.926401705]
}

const encoded = '{"firstName" :"Jairus","lastName" :  "Tanaka","human":true,"age":14, "meta":{"country": "US","awesome":true},"language":"english"  , "location":  [-43.130850291,32.926401705]}'//JSON.stringify(data)

console.log(`\nEncoded:\n`)
console.log(JSON.stringify(data))

const decoded = JSON.parse<JSONSchema>(encoded)

console.log('\nDecoded:\n')
console.log(`{`)
console.log(` firstName: ${decoded.firstName},`)
console.log(` lastName: ${decoded.lastName},`)
console.log(` age: ${decoded.age},`)
console.log(` human: ${decoded.human},`)
console.log(` meta: {`)
console.log(`   country: ${decoded.meta.country},`)
console.log(`   awesome: ${decoded.meta.awesome}`)
console.log(` },`)
console.log(` language: ${decoded.language}`)
console.log(` location: [${decoded.location[0]}, ${decoded.location[1]}]`)
console.log(`}`)

const success = decoded instanceof JSONSchema
if (success) console.log(`Success: ${success}`)
else throw new Error('Ahhh! It broke!')