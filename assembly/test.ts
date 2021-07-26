import { JSON } from '.'

// Create the Schemas
// @ts-ignore
@json
class JSONSchema {
  firstName: string;
  lastName: string;
  human: boolean;
  age: i32;
  meta: Meta;
}

// @ts-ignore
@json
class Meta {
  country: string;
  awesome: boolean;
  spooky: boolean;
}

// Create the JSON object
const data: JSONSchema = {
  firstName: 'Ja""irus',
  lastName: 'Ta[]{}naka',
  age: 14,
  human: true,
  meta: {
    country: 'US',
    awesome: true,
    spooky: false
  }
};

// Now, encode and decode
const encoded: string = JSON.stringify(data)
console.log(`Encoded: ${encoded}`)
const decoded = JSON.parse<JSONSchema>(encoded)
console.log(`Decoded: ${JSON.stringify(decoded)}`)
// We perform an equality check
if (encoded == JSON.stringify(decoded)) {
  console.log('Yay! JSON-AS works! 😄')
} else {
  console.log('Oof. JSON-AS died.😖')
}
console.log(`{`)
console.log(` firstName: ${decoded.firstName},`)
console.log(` lastName: ${decoded.lastName},`)
console.log(` age: ${decoded.age},`)
console.log(` human: ${decoded.human},`)
console.log(` meta: {`)
console.log(`   country: ${decoded.meta.country},`)
console.log(`   awesome: ${decoded.meta.awesome},`)
console.log(`   spooky: ${decoded.meta.spooky}`)
console.log(` }`)
console.log(`}`)