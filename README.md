<h5 align="center">
  <pre>
<span style="font-size: 0.8em;">     ██ ███████  ██████  ███    ██        █████  ███████
     ██ ██      ██    ██ ████   ██       ██   ██ ██
     ██ ███████ ██    ██ ██ ██  ██ █████ ███████ ███████
██   ██      ██ ██    ██ ██  ██ ██       ██   ██      ██
 █████  ███████  ██████  ██   ████       ██   ██ ███████
 </span>
    AssemblyScript - v1.0.0-alpha.4
  </pre>
</h5>

## 📚 Contents

- [About](#-about)
- [Installation](#-installation)
- [Usage](#-usage)
- [Examples](#examples)
- [Performance](#-performance)
- [License](#-license)
- [Contact](#-contact)

## 📝 About

JSON is the de-facto serialization format of modern web applications, but its serialization and deserialization remain a significant performance bottleneck, especially at scale. Traditional parsing approaches are computationally expensive, adding unnecessary overhead to both clients and servers. This library is designed to mitigate this by leveraging SIMD acceleration and highly optimized transformations, enabling JSON processing at gigabyte-per-second speeds with minimal runtime overhead.

## 💾 Installation

```bash
npm install json-as@1.0.0-alpha.4
```

Add the `--transform` to your `asc` command (e.g. in package.json)

```bash
--transform json-as/transform
```

Alternatively, add it to your `asconfig.json`

```json
{
  // ...
  "options": {
    "transform": ["json-as/transform"]
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

## Examples

## ⚡ Performance

The `json-as` library has been optimized to achieve near-gigabyte-per-second JSON processing speeds through SIMD acceleration and highly efficient transformations. Below are some key performance benchmarks to give you an idea of how it performs.

### Raw Serialization and Deserialization Performance

| Test Case          | Serialization Time (ms) | Deserialization Time (ms) | Throughput (GB/s) |
|--------------------|-------------------------|---------------------------|-------------------|
| Small JSON Object  | [Fill Value]            | [Fill Value]              | [Fill Value]      |
| Medium JSON Object | [Fill Value]            | [Fill Value]              | [Fill Value]      |
| Large JSON Object  | [Fill Value]            | [Fill Value]              | [Fill Value]      |

### Real-World Usage

| Scenario           | JSON Size (kb) | Serialization Time (ms) | Deserialization Time (ms) | Throughput (GB/s) |
|--------------------|----------------|-------------------------|---------------------------|-------------------|
| Web API Response   | [Fill Value]    | [Fill Value]           | [Fill Value]              | [Fill Value]      |
| Database Entry     | [Fill Value]    | [Fill Value]           | [Fill Value]              | [Fill Value]      |
| File Parsing       | [Fill Value]    | [Fill Value]           | [Fill Value]              | [Fill Value]      |


## 📃 License

This project is distributed under an open source license. You can view the full license using the following link: [License](./LICENSE)

## 📫 Contact

Please send all issues to [GitHub Issues](https://github.com/JairusSW/as-json/issues) and to converse, please send me an email at [me@jairus.dev](mailto:me@jairus.dev)

- **Email:** Send me inquiries, questions, or requests at [me@jairus.dev](mailto:me@jairus.dev)
- **GitHub:** Visit the official GitHub repository [Here](https://github.com/JairusSW/as-json)
- **Website:** Visit my official website at [jairus.dev](https://jairus.dev/)
- **Discord:** Converse with me on [My Discord](discord.com/users/600700584038760448) or on the [AssemblyScript Discord Server](https://discord.gg/assemblyscript/)
