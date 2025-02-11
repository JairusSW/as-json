<h5 align="center">
  <pre>
<span style="font-size: 0.8em;">     ██ ███████  ██████  ███    ██        █████  ███████
     ██ ██      ██    ██ ████   ██       ██   ██ ██     
     ██ ███████ ██    ██ ██ ██  ██ █████ ███████ ███████
██   ██      ██ ██    ██ ██  ██ ██       ██   ██      ██
 █████  ███████  ██████  ██   ████       ██   ██ ███████
 </span>
    AssemblyScript - v1.0.0-alpha.3
  </pre>
</h5>

## Contents
 - [About](#about)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Examples](#examples)
 - [Performance](#performance)
 - [License](#license)
 - [Contact](#contact)

## About

## Installation

```bash
npm install json-as@1.0.0-alpha.3
```

Add the `--transform` to your `asc` command (e.g. in package.json)

```bash
--transform json-as
```

Alternatively, add it to your `asconfig.json`

```
{
  // ...
  "options": {
    "transform": ["json-as/transform"]
  }
}
```

If you'd like to see the code that the transform generates, run with `JSON_DEBUG=true`

## Usage

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
  @omitif((age) => age < 18)
  @omitif('this.age <= 0')
  age!: i32;
  @omitnull()
  pos!: Vec3 | null;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Jairus",
  lastName: "Tanaka",
  lastActive: [2, 7, 2025],
  age: 18,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true
};

const serialized = JSON.stringify<Player>(player);
const parsed = JSON.parse<Player>(serialized);

console.log("Serialized: " + serialized);
console.log("Parsed: " + JSON.stringify(parsed));
```

## Examples

Classes can even have inheritance. Here's a nasty example

```js
@json
class Base {}

@json
class Vec1 extends Base {
  x: f32 = 1.0;
}
@json
class Vec2 extends Vec1 {
  y: f32 = 2.0;
}
@json
class Vec3 extends Vec2 {
  z: f32 = 3.0;
}

const arr: Base[] = [
  new Vec1(),
  new Vec2(),
  new Vec3()
];

const serialized = JSON.stringify(arr);
// [{"x":1.0},{"x":1.0,"y":2.0},{"y":2.0,"x":1.0,"z":3.0}]
const parsed = JSON.parse<Base[]>(serialized);
```

You can also add it to your `asconfig.json`

```json
{
  // ...
  "options": {
    "transform": ["json-as/transform"]
  }
}
```

If you use this project in your codebase, consider dropping a [star](https://github.com/JairusSW/as-json). I would really appreciate it!

## 📃 License

This project is distributed under an open source license. You can view the full license using the following link: [License](./LICENSE)

## 📫 Contact

Please send all issues to [GitHub Issues](https://github.com/JairusSW/as-json/issues) and to converse, please send me an email at [me@jairus.dev](mailto:me@jairus.dev)

- **Email:** Send me inquiries, questions, or requests at [me@jairus.dev](mailto:me@jairus.dev)
- **GitHub:** Visit the official GitHub repository [Here](https://github.com/JairusSW/as-json)
- **Website:** Visit my official website at [jairus.dev](https://jairus.dev/)
- **Discord:** Converse with me on [My Discord](discord.com/users/600700584038760448) or on the [AssemblyScript Discord Server](https://discord.gg/assemblyscript/)
