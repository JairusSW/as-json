import { JSON } from '.'
// @ts-ignore
@json
class TestClass {
  value: null;
}

const deserialized = JSON.parse<TestClass>('{"value":null}')

console.log(`{`)
console.log(` value: ${deserialized.value == null ? 'null' : 'idk'}`)
console.log(`}`)