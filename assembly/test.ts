import { JSON, deserializeObject } from ".";

import { console, stringify } from "as-console";

// @ts-ignore
@json
class HelloWorld {
  hello: string
}

const helloworld: HelloWorld = {
  hello: 'world'
};

// @ts-ignore
@json
class NameAge {
  name: string
  age: i32
}

const nameage: NameAge = {
  name: 'Jairus',
  age: 14
};

console.log('Checking Serialization\n')

console.log('\nSerialize String:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - "Hello World" -> ${JSON.stringify("Hello World")}`)

console.log(` - "Hello Wo\\"rld" -> ${JSON.stringify("Hello Wo\"rld")}`)

console.log('\nSerialize Number:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - 123 -> ${JSON.stringify(123).toString()}`)

console.log(` - 1.25 -> ${JSON.stringify(1.25).toString()}`)

console.log('\nSerialize Boolean:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - true -> ${JSON.stringify(true)}`)

console.log(` - false -> ${JSON.stringify(false)}`)

//console.log('Serialize Null:')

// TODO: Add null serialization
//console.log(` - null -> ${JSON.stringify(null)}`)

console.log('\nSerialize Array:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - ["hello", "world"] -> ${JSON.stringify(["hello","world"])}\n`)

console.log(` - [["person1"], ["person2"]] -> ${JSON.stringify([["person1"],["person2"]])}\n`)

console.log(` - [["key1", "value1"], ["ke[y2", "valu]e2"]] -> ${JSON.stringify([["key1","value1"],["key2","value2"]])}\n`)

console.log(` - [[[[[[[[[[[[[[[[ "King Of The Mountain Array 👑 " ]]]]]]]]]]]]]]]] -> ${JSON.stringify([[[[[[[[[[[[[[[["King Of The Mountain Array 👑 "]]]]]]]]]]]]]]]])}\n`)

console.log('\nSerialize Object:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - { hello: "world" } -> ${JSON.stringify(helloworld)}\n`)

console.log(` - { name: 'Jairus', age: 14 } -> ${JSON.stringify(nameage)}\n`)

console.log('Checking Deserialization\n')

console.log('\nDeserialize String:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - ${JSON.parse<string>('"Hello World"')} -> "Hello World"`)

console.log(` - ${JSON.parse<string>('"Hello Wo\\"rld"')} -> "Hello Wo\"rld"`)

console.log('\nDeserialize Number:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - ${JSON.parse<i32>('123')} -> 123`)

console.log(` - ${JSON.parse<f32>('1.25')} -> 1.25`)

console.log('\nDeserialize Boolean:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - ${JSON.parse<boolean>('true')} ->  true`)

console.log(` - ${JSON.parse<boolean>('false')} -> false`)

console.log('\nDeserialize Array:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')

console.log(` - ["h[el]lo" ,   "wor\\"ld"] -> ${stringify(JSON.parse<Array<string>>('["h[el]lo","wor\"ld"]'))}\n`)
JSON.parse<Array<Array<string>>>('[["person1"],["person2"]]')
console.log(` - [["person1"],["person2"]] -> [['person1'], ['person2']]`)
JSON.parse<Array<Array<string>>>('[["key1","value1"],["key2","value2"]]')
console.log(` - [["key1","value1"],["key2","value2"]] -> [['key1', 'value1'], ['key2','value2']]\n`)
JSON.parse<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<string>>>>>>>>>>>>>>>>>>('[[[[[[[[[[[[[[[[ "King Of The Mountain Array 👑 " ]]]]]]]]]]]]]]]]')
console.log(` - [[[[[[[[[[[[[[[["King Of The Mountain Array 👑 "]]]]]]]]]]]]]]]] -> [[[[[[[[[[[[[[[['King Of The Mountain Array 👑 ']]]]]]]]]]]]]]]]\n`)

console.log('\nDeserialize Object:\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
JSON.parse<HelloWorld>('{"hello":"world"}')
console.log(` - {"hello":"world"} -> { hello: "world" }\n`)
JSON.parse<NameAge>('{"name":"Jairus","age":14}')
console.log(` - {"name":"Jairus","age":14} -> { name: 'Jairus', age: 14 }\n`)

// console.log(` -  -> ${JSON.stringify()}`)

// node test