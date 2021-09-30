# AS-JSON
**JSON encoder/decoder for AssemblyScript**

## Installation

```bash
~ npm install json-as
```
```bash
--transform json-as/transform
```

## Support 
- ✅ Objects
- ✅ Arrays
- ✅ Numbers
- ✅ Integers
- ✅ Null
- ✅ Dynamic Arrays
- ✅ Dynamic Types
- ✅ Dynamic Objects
- ✅ Whitespace

## Usage

```js
import { JSON, unknown } from 'json-as'
```

**Object**
```js
@json
class JSONSchema {
    firstName: string
    lastName: string
    age: i32
}

const data: JSONSchema {
    firstName: 'Jairus',
    lastName: 'Tanaka',
    age: 14
}

const stringified = JSON.stringify(data)
// '{"firstName":"Jairus","lastName":"Tanaka","age":14}'

const parsed = JSON.parse<JSONSchema>(stringified)
// { firstName: "Jairus", lastName: "Tanaka", age: 14 }
```

**Array (Typed)**

```js
const stringified = JSON.stringify(['Hello', 'World'])
// '["Hello","World"]'

const parsed = JSON.parse<JSONSchema>(stringified)
// ["Hello", "World"]
```

**Array (Dynamic)**

```js
const stringified = JSON.stringify(["Welcome to dynamic arrays", 3.14, ["Deep"], true, "It also supports nulls", null])
// '["Welcome to dynamic arrays",3.14,["Deep"],true,"It also supports nulls",null]'

const parsed = JSON.parse<unknown[]>(stringified)
// ["Welcome to dynamic arrays", 3.14, ["Deep"], true, "It also supports nulls", null]
```

**Float**

```js
const stringified = JSON.stringify(3.14)
// '3.14'

const parsed = JSON.parse<f64>(stringified)
// 3.14
```

**Integer**

```js
const stringified = JSON.stringify(14)
// '14'

const parsed = JSON.parse<i32>(stringified)
// 14
```

**Boolean**

```js
const stringified = JSON.stringify(true)
// 'true'

const parsed = JSON.parse<boolean>(stringified)
// true
```

**Bool**

```js
const stringified = JSON.stringify(true)
// 'true'

const parsed = JSON.parse<bool>(stringified)
// true
```

**Null**

```js
const stringified = JSON.stringify(null)
// 'null'

const parsed = JSON.parse(stringified)
// null
```

## Accessing unknown types
**Breaking changes for v2.0.0!**
**Experimental usage only**

```js
const parsed = JSON.parse<unknown[]>(["Welcome to dynamic arrays",3.14,["Deep"],true,"It also supports nulls",null])
console.log(parsed[0].get<string>())
// "Welcome to dynamic arrays"
console.log(parsed[1].get<f64>().toString())
// 3.14
```

## Benchmarks

```
AS-JSON Stringify String: ~1858051.4 ops/s | 53.82ms
AS-JSON Parse String: ~4321632.43 ops/s | 23.14ms     
AS-JSON Stringify Integer: ~8529956.89 ops/s | 11.72ms
AS-JSON Parse Integer: ~27839325.77 ops/s | 3.59ms
AS-JSON Stringify Float: ~5128590.39 ops/s | 19.5ms    
AS-JSON Parse Float: ~21467505.24 ops/s | 4.66ms       
AS-JSON Stringify Boolean: ~361837455.83 ops/s | 0.28ms
AS-JSON Parse Boolean: ~51522012.58 ops/s | 1.94ms     
AS-JSON Stringify Array: ~1421792.72 ops/s | 70.33ms
AS-JSON Parse Array: ~3755593.05 ops/s | 26.63ms
AS-JSON Stringify Object: ~3309471.1 ops/s | 30.22ms
AS-JSON Parse Object: ~1054387.45 ops/s | 94.84ms
AS-JSON Stringify Dynamic Array: ~285433.75 ops/s | 350.34ms
AS-JSON Parse Dynamic Array: ~661516.87 ops/s | 151.17ms
```