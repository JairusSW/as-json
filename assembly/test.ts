import { JSON } from ".";

import { console, stringify } from "../node_modules/as-console/assembly/wasi";

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

console.log('\nSerialize String:\n')

console.log(` - "Hello World" -> ${JSON.stringify("Hello World").toString()}`)

console.log(` - "Hello Wo\\"rld" -> ${JSON.stringify('Hello Wo"rld').toString()}`)

console.log('\nSerialize Number:\n')

console.log(` - 123 -> ${JSON.stringify(123).toString()}`)

console.log(` - 1.25 -> ${JSON.stringify(1.25).toString()}`)

console.log('\nSerialize Boolean:\n')

console.log(` - true -> ${JSON.stringify(true).toString()}`)

console.log(` - false -> ${JSON.stringify(false).toString()}`)

console.log('\nSerialize Null:\n')

console.log(` - null -> ${JSON.stringify(null).toString()}`)

console.log('\nSerialize Array:\n')

console.log(` - ["hello", "world"] -> ${JSON.stringify(["hello","world"]).toString()}\n`)

console.log(` - [["person1"], ["person2"]] -> ${JSON.stringify([["person1"],["person2"]]).toString()}\n`)

console.log(` - [["key1", "value1"], ["ke[y2", "valu]e2"]] -> ${JSON.stringify([["key1","value1"],["ke[y2","valu]e2"]]).toString()}\n`)

console.log(` - [[[[[[[[[[[[[[[[ "King Of The Mountain Array 👑 " ]]]]]]]]]]]]]]]] -> ${JSON.stringify([[[[[[[[[[[[[[[["King Of The Mountain Array 👑 "]]]]]]]]]]]]]]]]).toString()}\n`)

console.log('\nSerialize Object:\n')

console.log(` - { hello: 'world' } -> ${JSON.stringify(helloworld).toString()}\n`)

console.log(` - { name: 'Jairus', age: 14 } -> ${JSON.stringify(nameage).toString()}\n`)

console.log('Checking Deserialization\n')

console.log('\nDeserialize String:\n')

console.log(` - "Hello World" -> ${JSON.parse<string>('"Hello World"').toString()}`)

console.log(` - "Hello Wo\\"rld" -> ${JSON.parse<string>('"Hello Wo\\"rld"').toString()}`)

console.log('\nDeserialize Number:\n')

console.log(` - 123 -> ${JSON.parse<i32>('123').toString()}`)

console.log(` - 1.25 -> ${JSON.parse<f32>('1.25').toString()}`)

console.log('\nDeserialize Boolean:\n')

console.log(` - true -> ${JSON.parse<boolean>('true').toString()}`)

console.log(` - false -> ${JSON.parse<boolean>('false').toString()}`)

console.log('\nDeserialize Array:\n')

console.log(` - ["hello","wor\\"ld","dinosaurs"] -> ${stringify(JSON.parse<Array<string>>('["hello","wor\\"ld","dinosaurs"]')).toString()}\n`)
JSON.parse<Array<Array<string>>>('[["perso]n1"],["person2"]]')
console.log(` - [["perso]n1"],["person2"]] -> [['perso]n1'], ['person2']]`)
JSON.parse<Array<Array<string>>>('[["key1","value1"],["key2","value2"]]')
console.log(` - [["key1","value1"],["key2","value2"]] -> [['key1', 'value1'], ['key2','value2']]\n`)
JSON.parse<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<string>>>>>>>>>>>>>>>>>>('[[[[[[[[[[[[[[[[ "King Of The Mountain Array 👑 " ]]]]]]]]]]]]]]]]').toString()
console.log(` - [[[[[[[[[[[[[[[["King Of The Mountain Array 👑 "]]]]]]]]]]]]]]]]' -> [[[[[[[[[[[[[[[['King Of The Mountain Array 👑 ']]]]]]]]]]]]]]]]\n`)

console.log('\nDeserialize Object:\n')
JSON.parse<HelloWorld>('{"hello":"world"}')
console.log(` - {"hello":"world"} -> { hello: "world" }\n`)
JSON.parse<NameAge>('{"name":"Jairus","age":14}')
console.log(` - {"name":"Jairus","age":14} -> { name: 'Jairus', age: 14 }\n`)