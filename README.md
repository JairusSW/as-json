# AS-JSON
**JSON encoder/decoder for AssemblyScript**

## Installation

```bash
~ npm install as-json
```
```bash
--transform as-json/transform
```

## Usage

```js
import { JSON } from 'as-json'
```

**Object (schema)**

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
// { "firstName": "Jairus", "lastName": "Tanaka", "age": 14 }
```

**Array**

```js
const stringified = JSON.stringify(["hello","world"])
// '["hello","world"]'
const parsed = JSON.parse<Array<string>>(stringified)
// ["hello", "world"]
```

**String**

```js
const stringified = JSON.stringify('hello world')
// '"hello world"'
const parsed = JSON.parse<string>(stringified)
// hello world
```

**Numbers**

```js
const stringified = JSON.stringify(3.14)
// '3.14'
const parsed = JSON.parse<f64>(stringified)
// 3.14
```

**Booleans**

```js
const stringified = JSON.stringify(true)
// 'true'
const parsed = JSON.parse<boolean>(stringified)
// true
```
