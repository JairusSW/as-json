<h3 align="center">
<pre>
 █████╗ ███████╗           ██╗███████╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝           ██║██╔════╝██╔═══██╗████╗  ██║
███████║███████╗█████╗     ██║███████╗██║   ██║██╔██╗ ██║
██╔══██║╚════██║╚════╝██   ██║╚════██║██║   ██║██║╚██╗██║
██║  ██║███████║      ╚█████╔╝███████║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚══════╝       ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝

v0.8.2
</pre>
</h3>

## Installation

```bash
npm install json-as
```

Add the transform to your `asc` command (e.g. in package.json)

```bash
--transform json-as/transform
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

## Usage

```js
import { JSON } from "json-as/assembly";

// @json or @serializable work here
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
  age!: i32;
  pos!: Vec3 | null;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true
};

const stringified = JSON.stringify<Player>(player, true);
// You can toggle on setting default values with the 2nd parameter
// Alternative: use JSON.serializeTo(player, out);

const parsed = JSON.parse<Player>(stringified);
```

If you use this project in your codebase, consider dropping a [star](https://github.com/JairusSW/as-json). I would really appreciate it!

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library