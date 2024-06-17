import { JSON } from "..";
import {
  describe,
  expect
} from "as-test/assembly";

@json
class BaseObject {
  a: string;
  constructor(a: string) {
    this.a = a;
  }
}

@json
class DerivedObject extends BaseObject {
  b: string;
  constructor(a: string, b: string) {
    super(a);
    this.b = b;
  }
}

@json
class Map4 {
  a: string;
  b: string;
  c: string;
  d: string;
}

@json
class Vec3 {
  x: f64;
  y: f64;
  z: f64;

  static shouldIgnore: string = "should not be serialized";
}

@json
class Player {
  firstName: string;
  lastName: string;
  lastActive: i32[];
  age: i32;
  pos: Vec3 | null;
  isVerified: boolean;
}

class Nullable { }
type Null = Nullable | null;

describe("Should deserialize strings", () => {

  expect(
    JSON.parse<string>("\"abcdefg\"")
  ).toBe("abcdefg");

  expect(
    JSON.parse<string>('"\\"st\\\\\\"ring\\\\\\" w\\\\\\"\\\\\\"ith quotes\\\\\\"\\\""')
  ).toBe('"st\\"ring\\" w\\"\\"ith quotes\\""');

  expect(
    JSON.parse<string>('"\\"string \\\\\\"with random spa\\\\nces and \\\\nnewlines\\\\n\\\\n\\\\n\\""')
  ).toBe('"string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"');

  expect(
    JSON.parse<string>('"\\"string with colon : comma , brace [ ] bracket { } and quote \\\\\\" and other quote \\\\\\\\\\"\\\""')
  ).toBe('"string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\\\""');

});

describe("Should deserialize integers", () => {

  expect(
    JSON.parse<i32>("0")
  ).toBe(<i32>0);

  expect(
    JSON.parse<u32>("100")
  ).toBe(<u32>100);

  expect(
    JSON.parse<u64>("101")
  ).toBe(<u64>101);

  expect(
    JSON.parse<i32>("-100")
  ).toBe(<i32>-100);

  expect(
    JSON.parse<i64>("-101")
  ).toBe(<i64>-101);

});

describe("Should deserialize floats", () => {

  expect(
    JSON.parse<f64>("7.23")
  ).toBe(7.23);

  expect(
    JSON.parse<f64>("1000.0")
  ).toBe(1000.0);

  expect(
    JSON.parse<f64>("1.23456")
  ).toBe(1.23456);

  expect(
    JSON.parse<f64>("0.0")
  ).toBe(0.0);

  expect(
    JSON.parse<f64>("-7.23")
  ).toBe(-7.23);

  expect(
    JSON.parse<f64>("0.000001")
  ).toBe(0.000001);

  expect(
    JSON.parse<f64>("1e-7")
  ).toBe(1e-7);

  expect(
    JSON.parse<f64>("100000000000000000000.0")
  ).toBe(1e20);

  expect(
    JSON.parse<f64>("1e+21")
  ).toBe(1e21);

});

describe("Should deserialize booleans", () => {

  expect(
    JSON.parse<boolean>("true")
  ).toBe(true);

  expect(
    JSON.parse<boolean>("false")
  ).toBe(false);

});

describe("Should deserialize class inheritance", () => {

  const jsonStr = "{\"a\":\"1\",\"b\":\"2\"}";
  const obj = JSON.parse<DerivedObject>(jsonStr);

  expect(obj instanceof DerivedObject).toBe(true);
  expect(obj.a).toBe("1");
  expect(obj.b).toBe("2");
});

describe("Should deserialize nulls", () => {

  expect(
    JSON.stringify(JSON.parse<Null>("null"))
  ).toBe("null");

});

describe("Should deserialize integer arrays", () => {

  expect(
    JSON.stringify(JSON.parse<u32[]>("[0,100,101]"))
  ).toBe(JSON.stringify([0, 100, 101]));

  expect(
    JSON.stringify(JSON.parse<i32[]>("[0,100,101,-100,-101]"))
  ).toBe(JSON.stringify([0, 100, 101, -100, -101]));

});

describe("Should deserialize float arrays", () => {

  expect(
    JSON.stringify(JSON.parse<f64[]>("[7.23,1000.0,1000.0,1.23456,1.23456,0.0,7.23]"))
  ).toBe(JSON.stringify([7.23, 1000.0, 1000.0, 1.23456, 1.23456, 0.0, 7.23]));

  expect(
    JSON.stringify(JSON.parse<f64[]>("[1e+21,1e+22,1e-7,1e-8,1e-9]"))
  ).toBe(JSON.stringify([1e21, 1e22, 1e-7, 1e-8, 1e-9]));

});

describe("Should deserialize boolean arrays", () => {

  expect(
    JSON.stringify(JSON.parse<boolean[]>("[true,false]"))
  ).toBe(JSON.stringify([true, false]));

});

describe("Should deserialize string arrays", () => {

  expect(
    JSON.stringify(JSON.parse<string[]>('["string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"]'))
  ).toBe(JSON.stringify([ 'string "with random spa\nces and \nnewlines\n\n\n' ]));

});

describe("Should deserialize nested integer arrays", () => {

  expect(
    JSON.stringify(JSON.parse<i64[][]>("[[100,101],[-100,-101],[0]]"))
  ).toBe(JSON.stringify([[100, 101], [-100, -101], [0]]));

});

describe("Should deserialize nested float arrays", () => {

  expect(
    JSON.stringify(JSON.parse<f64[][]>("[[7.23],[1000.0],[1000.0],[1.23456],[1.23456],[0.0],[7.23]]"))
  ).toBe(JSON.stringify([[7.23], [1000.0], [1000.0], [1.23456], [1.23456], [0.0], [7.23]]));

});

describe("Should deserialize nested boolean arrays", () => {

  expect(
    JSON.stringify(JSON.parse<boolean[][]>("[[true],[false]]"))
  ).toBe(JSON.stringify([[true], [false]]));

});

describe("Should deserialize object arrays", () => {

  expect(
    JSON.stringify(JSON.parse<Vec3[]>('[{"x":3.4,"y":1.2,"z":8.3},{"x":3.4,"y":-2.1,"z":9.3}]'))
  ).toBe(JSON.stringify(<Vec3[]>[
    { x: 3.4, y: 1.2, z: 8.3 },
    { x: 3.4, y: -2.1, z: 9.3 }
  ]));

});

describe("Should deserialize Objects", () => {

  expect(
    JSON.stringify(JSON.parse<Vec3>('{"x":3.4,"y":1.2,"z":8.3}'))
  ).toBe(JSON.stringify(<Vec3>{ x: 3.4, y: 1.2, z: 8.3 }));

  expect(
    JSON.stringify(JSON.parse<Player>('{"firstName":"Emmet","lastName":"West","lastActive":[8,27,2022],"age":23,"pos":{"x":3.4,"y":1.2,"z":8.3},"isVerified":true}'))
  ).toBe(JSON.stringify(<Player>{
    firstName: "Emmet",
    lastName: "West",
    lastActive: [8, 27, 2022],
    age: 23,
    pos: { x: 3.4, y: 1.2, z: 8.3 },
    isVerified: true
  }));

  expect(
    JSON.stringify(JSON.parse<ObjectWithFloat>('{"f":7.23}'))
  ).toBe(JSON.stringify(<ObjectWithFloat>{ f: 7.23 }));

  expect(
    JSON.stringify(JSON.parse<ObjectWithFloat>('{"f":0.000001}'))
  ).toBe(JSON.stringify(<ObjectWithFloat>{ f: 0.000001 }));

  expect(
    JSON.stringify(JSON.parse<ObjWithStrangeKey<string>>('{"a\\\\\\t\\"\\u0002b`c":"foo"}'))
  ).toBe(JSON.stringify(<ObjWithStrangeKey<string>>{ data: "foo" }));

});

@json
class ObjWithString {
  s!: string;
}

@json
class ObjectWithStringArray {
  sa!: string[];
}

@json
class ObjectWithFloat {
  f!: f64;
}

@json
class ObjectWithFloatArray {
  fa!: f64[];
}

@json
class ObjWithStrangeKey<T> {
  @alias('a\\\t"\x02b`c')
  data!: T;
}
