<h5 align="center">
  <pre>
<span style="font-size: 0.8em;">     ██ ███████  ██████  ███    ██        █████  ███████
     ██ ██      ██    ██ ████   ██       ██   ██ ██     
     ██ ███████ ██    ██ ██ ██  ██ █████ ███████ ███████
██   ██      ██ ██    ██ ██  ██ ██       ██   ██      ██
 █████  ███████  ██████  ██   ████       ██   ██ ███████
 </span>
    AssemblyScript - v1.0.0-beta.10
  </pre>
</h5>

## 📝 About

JSON is the de-facto serialization format of modern web applications, but its serialization and deserialization remain a significant performance bottleneck, especially at scale. Traditional parsing approaches are computationally expensive, adding unnecessary overhead to both clients and servers. This library is designed to mitigate this by leveraging SIMD acceleration and highly optimized transformations.

## 📚 Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Examples](#-examples)
  - [Omitting Fields](#️-omitting-fields)
  - [Nullable Primitives](#️-using-nullable-primitives)
  - [Unknown or Dynamic Data](#-working-with-unknown-or-dynamic-data)
  - [Using Raw JSON Strings](#️-using-raw-json-strings)
  - [Custom Serializers](#️-using-custom-serializers-or-deserializers)
- [Performance](#-performance)
- [License](#-license)
- [Contact](#-contact)

## 💾 Installation

```bash
npm install json-as@1.0.0-beta.10
```

Add the `--transform` to your `asc` command (e.g. in package.json)

```bash
--transform json-as/transform --lib json-as/lib
```

Alternatively, add it to your `asconfig.json`

```json
{
  "options": {
    "transform": ["json-as/transform"],
    "lib": ["json-as/lib"]
  }
}
```

If you'd like to see the code that the transform generates, run with `JSON_DEBUG=true`

## 🪄 Usage

```js
import { JSON } from "json-as";

@json
class Vec3 {
  x: f32 = 0.0;
  y: f32 = 0.0;
  z: f32 = 0.0;
}

@json
class Player {
  @alias("first name")
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  // Drop in a code block, function, or expression that evaluates to a boolean
  @omitif((self: Player) => self.age < 18)
  age!: i32;
  @omitnull()
  pos!: Vec3 | null;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Jairus",
  lastName: "Tanaka",
  lastActive: [2, 13, 2025],
  age: 18,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true
};

const serialized = JSON.stringify<Player>(player);
const deserialized = JSON.parse<Player>(serialized);

console.log("Serialized    " + serialized);
console.log("Deserialized  " + JSON.stringify(deserialized));
```

## 🔍 Examples

### 🏷️ Omitting Fields

This library allows selective omission of fields during serialization using the following decorators:

**@omit**

This decorator excludes a field from serialization entirely.

```js
@json
class Example {
  name!: string;
  @omit
  secret!: string;
}

const obj = new Example();
obj.name = "Visible";
obj.secret = "Hidden";

console.log(JSON.stringify(obj)); // { "name": "Visible" }
```

**@omitnull**

This decorator omits a field only if its value is null.

```js
@json
class Example {
  name!: string;
  @omitnull()
  optionalField!: string | null;
}

const obj = new Example();
obj.name = "Present";
obj.optionalField = null;

console.log(JSON.stringify(obj)); // { "name": "Present" }

@omitif((self: this) => condition)

This decorator omits a field based on a custom predicate function.

@json
class Example {
  name!: string;
  @omitif((self: Example) => self.age < 18)
  age!: number;
}

const obj = new Example();
obj.name = "John";
obj.age = 16;

console.log(JSON.stringify(obj)); // { "name": "John" }
```

If age were 18 or higher, it would be included in the serialization.

### 🗳️ Using nullable primitives

AssemblyScript doesn't support using nullable primitive types, so instead, json-as offers the `JSON.Box` class to remedy it.

For example, this schema won't compile in AssemblyScript:

```js
@json
class Person {
  name!: string;
  age: i32 | null = null;
}
```

Instead, use `JSON.Box` to allow nullable primitives:

```js
@json
class Person {
  name: string;
  age: JSON.Box<i32> | null = null;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Bob");
console.log(JSON.stringify(person)); // {"name":"Bob","age":null}

person.age = new JSON.Box<i32>(18); // Set age to 18
console.log(JSON.stringify(person)); // {"name":"Bob","age":18}
```

### 📤 Working with unknown or dynamic data

Sometimes it's necessary to work with unknown data or data with dynamic types.

Because AssemblyScript is a statically-typed language, that typically isn't allowed, so json-as provides the `JSON.Value` and `JSON.Obj` types.

Here's a few examples:

**Working with multi-type arrays**

When dealing with arrays that have multiple types within them, eg. `["string",true,null,["array"]]`, use `JSON.Value[]`

```js
const a1 = JSON.parse<JSON.Value[]>('["string",true,null,["array"]]');
console.log(JSON.stringify(a[0])); // "string"
console.log(JSON.stringify(a[1])); // true
console.log(JSON.stringify(a[2])); // null
console.log(JSON.stringify(a[3])); // ["array"]
```

**Working with unknown objects**

When dealing with an object with an unknown structure, use the `JSON.Obj` type

```js
const o1 = JSON.parse<JSON.Obj>('{"a":3.14,"b":true,"c":[1,2,3],"d":{"x":1,"y":2,"z":3}}');

console.log(o1.keys().join(" ")); // a b c d
console.log(
  o1.values()
  .map<string>((v) => JSON.stringify(v))
  .join(" ")
); // 3.14 true [1,2,3] {"x":1,"y":2,"z":3}

const y = o1.get("d").get<JSON.Obj>().get<i32>();
console.log('o1["d"]["y"] = ' + y.toString()); // o1["d"]["y"] = 2
```

**Working with dynamic types within a schema**

More often, objects will be completely statically typed except for one or two values.

In such cases, `JSON.Value` can be used to handle fields that may hold different types at runtime.

```js
@json
class DynamicObj {
  id: i32 = 0;
  name: string = "";
  data!: JSON.Value; // Can hold any type of value
}

const obj = new DynamicObj();
obj.id = 1;
obj.name = "Example";
obj.data = JSON.parse<JSON.Value>('{"key":"value"}'); // Assigning an object

console.log(JSON.stringify(obj)); // {"id":1,"name":"Example","data":{"key":"value"}}

obj.data = JSON.Value.from<i32>(42); // Changing to an integer
console.log(JSON.stringify(obj)); // {"id":1,"name":"Example","data":42}

obj.data = JSON.Value.from("a string"); // Changing to a string
console.log(JSON.stringify(obj)); // {"id":1,"name":"Example","data":"a string"}
```

### 🏗️ Using Raw JSON strings

Sometimes its necessary to simply copy a string instead of serializing it.

For example, the following data would typically be serialized as:

```js
const m1 = new Map<string, string>();
m1.set('pos', '{"x":1.0,"y":2.0,"z":3.0}');

const a1 = JSON.stringify(m1);
console.log("a1: " + a1);
// {"pos":"{\"x\":1.0,\"y\":2.0,\"z\":3.0}"}
// pos's value (Vec3) is contained within a string... ideally, it should be left alone
```

If, instead, one wanted to insert Raw JSON into an existing schema/data structure, they could make use of the JSON.Raw type to do so:

```js
const m1 = new Map<string, JSON.Raw>();
m1.set('pos', new JSON.Raw('{"x":1.0,"y":2.0,"z":3.0}'));

const a1 = JSON.stringify(m1);
console.log("a1: " + a1);
// {"pos":{"x":1.0,"y":2.0,"z":3.0}}
// Now its properly formatted JSON where pos's value is of type Vec3 not string!
```

### ⚒️ Using custom serializers or deserializers

This library supports custom serialization and deserialization methods, which can be defined using the `@serializer` and `@deserializer` decorators.

Here's an example of creating a custom data type called `Point` which serializes to `(x,y)`

```js
@json
class Point {
  x: f64 = 0.0;
  y: f64 = 0.0;
  constructor(x: f64, y: f64) {
    this.x = x;
    this.y = y;
  }

  @serializer
  serializer(self: Point): string {
    return `(${self.x},${self.y})`;
  }

  @deserializer
  deserializer(data: string): Point {
    const dataSize = bytes(data);
    if (dataSize <= 2) throw new Error("Could not deserialize provided data as type Point");

    const c = data.indexOf(",");
    const x = data.slice(1, c);
    const y = data.slice(c + 1, data.length - 1);

    return new Point(
      f64.parse(x),
      f64.parse(y)
    );
  }
}
```

The serializer function converts a `Point` instance into a string format `(x,y)`.

The deserializer function parses the string `(x,y)` back into a `Point` instance.

These functions are then wrapped before being consumed by the json-as library:

```js
@inline __SERIALIZE_CUSTOM(ptr: usize): void {
  const data = this.serializer(changetype<Point>(ptr));
  const dataSize = data.length << 1;
  memory.copy(bs.offset, changetype<usize>(data), dataSize);
  bs.offset += dataSize;
}

@inline __DESERIALIZE_CUSTOM(data: string): Point {
  return this.deserializer(data);
}
```

This allows custom serialization while maintaining a generic interface for the library to access.

## ⚡ Performance

The `json-as` library has been optimized to achieve near-gigabyte-per-second JSON processing speeds through SIMD acceleration and highly efficient transformations. Below are some key performance benchmarks to give you an idea of how it performs.

### Raw Performance

Simple

| Test Case          | Serialization (ops/s) | Deserialization (ops/s) | Serialization (MB/s) | Deserialization (MB/s) |
| ------------------ | --------------------- | ----------------------- | -------------------- | ---------------------- |
| Vector3 Object     | 32,642,320 ops/s      | 9,736,272 ops/s         | 1,240 MB/s           | 369 MB/s               |
| Alphabet String    | 4,928,856 ops/s       | 7,567,360 ops/s         | 975 MB/s             | 1,498 MB/s             |
| Small JSON Object  | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |
| Medium JSON Object | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |
| Large JSON Object  | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |

SIMD

| Test Case          | Serialization (ops/s) | Deserialization (ops/s) | Serialization (MB/s) | Deserialization (MB/s) |
| ------------------ | --------------------- | ----------------------- | -------------------- | ---------------------- |
| Vector3 Object     | 32,642,320 ops/s      | 9,736,272 ops/s         | 1,240 MB/s           | 369 MB/s               |
| Alphabet String    | 20,368,584 ops/s      | 28,467,424 ops/s        | 3,910 MB/s           | 5,636 MB/s             |
| Small JSON Object  | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |
| Medium JSON Object | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |
| Large JSON Object  | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |

JavaScript

| Test Case          | Serialization (ops/s) | Deserialization (ops/s) | Serialization (MB/s) | Deserialization (MB/s) |
| ------------------ | --------------------- | ----------------------- | -------------------- | ---------------------- |
| Vector3 Object     | 2,548,013 ops/s       | 1,942,440 ops/s         | 97 MB/s              | 73 MB/s                |
| Alphabet String    | 3,221,556 ops/s       | 2,716,617 ops/s         | 624 MB/s             | 537 MB/s               |
| Small JSON Object  | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |
| Medium JSON Object | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |
| Large JSON Object  | [Fill Value]          | [Fill Value]            | [Fill Value]         | [Fill Value]           |

### Real-World Usage

| Scenario         | JSON Size (kb) | Serialization Time (ops/s) | Deserialization Time (ops/s) | Throughput (GB/s) |
| ---------------- | -------------- | -------------------------- | ---------------------------- | ----------------- |
| Web API Response | [Fill Value]   | [Fill Value]               | [Fill Value]                 | [Fill Value]      |
| Database Entry   | [Fill Value]   | [Fill Value]               | [Fill Value]                 | [Fill Value]      |
| File Parsing     | [Fill Value]   | [Fill Value]               | [Fill Value]                 | [Fill Value]      |

## 📃 License

This project is distributed under an open source license. You can view the full license using the following link: [License](./LICENSE)

## 📫 Contact

Please send all issues to [GitHub Issues](https://github.com/JairusSW/json-as/issues) and to converse, please send me an email at [me@jairus.dev](mailto:me@jairus.dev)

- **Email:** Send me inquiries, questions, or requests at [me@jairus.dev](mailto:me@jairus.dev)
- **GitHub:** Visit the official GitHub repository [Here](https://github.com/JairusSW/json-as)
- **Website:** Visit my official website at [jairus.dev](https://jairus.dev/)
- **Discord:** Contact me at [My Discord](https://discord.com/users/600700584038760448) or on the [AssemblyScript Discord Server](https://discord.gg/assemblyscript/)
