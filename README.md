<h5 align="center">
<pre>    __  _____  _____  _____       _____  _____ 
 __|  ||   __||     ||   | | ___ |  _  ||   __|
|  |  ||__   ||  |  || | | ||___||     ||__   |
|_____||_____||_____||_|___|     |__|__||_____|
v0.9.26
</pre>
</h5>

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

If you'd like to see the code that the transform generates, run with `JSON_DEBUG=true`

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
  // Drop in a code block, function, or expression that evaluates to a boolean
  @omitif("this.age < 18")
  age!: i32;
  @omitnull()
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

const stringified = JSON.stringify<Player>(player);

const parsed = JSON.parse<Player>(stringified);
```

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

## Notes

If you want a feature, drop an issue (and again, maybe a star). I'll likely add it in less than 7 days.

## Contact

- [Email](mailto:me@jairus.dev)
- [GitHub](https://github.com/JairusSW)
- [Discord](discord.com/users/600700584038760448)

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
