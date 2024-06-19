import { JSON } from "..";
import {
  describe,
  expect,
  run
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

@json
class OmitIf {
  x: i32 = 1;
  @omitif("this.y == -1")
  y: i32 = -1;
  z: i32 = 1;
  @omitnull()
  foo: string | null = null
}

class Nullable { }
type Null = Nullable | null;

describe("Should serialize strings", () => {

  expect(
    JSON.stringify("abcdefg")
  ).toBe("\"abcdefg\"");

  expect(
    JSON.stringify('st"ring" w""ith quotes"')
  ).toBe('"st\\"ring\\" w\\"\\"ith quotes\\""');

  expect(
    JSON.stringify('string \"with random spa\nces and \nnewlines\n\n\n')
  ).toBe('"string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"');

  expect(
    JSON.stringify('string with colon : comma , brace [ ] bracket { } and quote " and other quote \\"')
  ).toBe('"string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\\\\\""')

});

describe("Should serialize integers", () => {

  expect(
    JSON.stringify(0)
  ).toBe("0");

  expect(
    JSON.stringify<u32>(100)
  ).toBe("100");

  expect(
    JSON.stringify<u64>(101)
  ).toBe("101");

  expect(
    JSON.stringify<i32>(-100)
  ).toBe("-100");

  expect(
    JSON.stringify<i64>(-101)
  ).toBe("-101");

});

describe("Should serialize floats", () => {

  expect(
    JSON.stringify<f64>(7.23)
  ).toBe("7.23");

  expect(
    JSON.stringify<f64>(10e2)
  ).toBe("1000.0");

  expect(
    JSON.stringify<f64>(123456e-5)
  ).toBe("1.23456");

  expect(
    JSON.stringify<f64>(0.0)
  ).toBe("0.0");

  expect(
    JSON.stringify<f64>(-7.23)
  ).toBe("-7.23");

  expect(
    JSON.stringify<f64>(1e-6)
  ).toBe("0.000001");

  expect(
    JSON.stringify<f64>(1e-7)
  ).toBe("1e-7");

  expect(
    JSON.parse<f64>("1E-7")
  ).toBe(1e-7);

  expect(
    JSON.stringify<f64>(1e20)
  ).toBe("100000000000000000000.0");

  expect(
    JSON.stringify<f64>(1e21)
  ).toBe("1e+21");

  expect(
    JSON.parse<f64>("1E+21")
  ).toBe(1e21);

  expect(
    JSON.parse<f64>("1e21")
  ).toBe(1e21);

  expect(
    JSON.parse<f64>("1E21")
  ).toBe(1e21);

});

describe("Should serialize booleans", () => {

  expect(
    JSON.stringify<bool>(true)
  ).toBe("true");

  expect(
    JSON.stringify<bool>(false)
  ).toBe("false");

  expect(
    JSON.stringify<boolean>(true)
  ).toBe("true");

  expect(
    JSON.stringify<boolean>(false)
  ).toBe("false");

});

describe("Should serialize class inheritance", () => {

  const obj = new DerivedObject("1", "2");

  expect(
    JSON.stringify(obj)
  ).toBe("{\"a\":\"1\",\"b\":\"2\"}");

});

describe("Should serialize nulls", () => {

  expect(
    JSON.stringify<Null>(null)
  ).toBe("null");

});


describe("Should serialize integer arrays", () => {

  expect(
    JSON.stringify<u32[]>([0, 100, 101])
  ).toBe("[0,100,101]");

  expect(
    JSON.stringify<u64[]>([0, 100, 101])
  ).toBe("[0,100,101]");

  expect(
    JSON.stringify<i32[]>([0, 100, 101, -100, -101])
  ).toBe("[0,100,101,-100,-101]");

  expect(
    JSON.stringify<i64[]>([0, 100, 101, -100, -101])
  ).toBe("[0,100,101,-100,-101]");

});

describe("Should serialize float arrays", () => {

  expect(
    JSON.stringify<f64[]>([7.23, 10e2, 10e2, 123456e-5, 123456e-5, 0.0, 7.23])
  ).toBe("[7.23,1000.0,1000.0,1.23456,1.23456,0.0,7.23]");

  expect(
    JSON.stringify<f64[]>([1e21, 1e22, 1e-7, 1e-8, 1e-9])
  ).toBe("[1e+21,1e+22,1e-7,1e-8,1e-9]");

});

describe("Should serialize boolean arrays", () => {

  expect(
    JSON.stringify<bool[]>([true, false])
  ).toBe("[true,false]");

  expect(
    JSON.stringify<boolean[]>([true, false])
  ).toBe("[true,false]");

});

describe("Should serialize string arrays", () => {

  expect(
    JSON.stringify<string[]>(['string \"with random spa\nces and \nnewlines\n\n\n'])
  ).toBe('["string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"]');

});

describe("Should serialize nested integer arrays", () => {

  expect(
    JSON.stringify<i64[][]>([[100, 101], [-100, -101], [0]])
  ).toBe("[[100,101],[-100,-101],[0]]");

});

describe("Should serialize nested float arrays", () => {

  expect(
    JSON.stringify<f64[][]>([
      [7.23],
      [10e2],
      [10e2],
      [123456e-5],
      [123456e-5],
      [0.0],
      [7.23],
    ])
  ).toBe("[[7.23],[1000.0],[1000.0],[1.23456],[1.23456],[0.0],[7.23]]");

});

describe("Should serialize nested boolean arrays", () => {

  expect(
    JSON.stringify<bool[][]>([[true], [false]])
  ).toBe("[[true],[false]]");

  expect(
    JSON.stringify<boolean[][]>([[true], [false]])
  ).toBe("[[true],[false]]");

});

describe("Should serialize object arrays", () => {

  expect(
    JSON.stringify<Vec3[]>([
      {
        x: 3.4,
        y: 1.2,
        z: 8.3,
      },
      {
        x: 3.4,
        y: -2.1,
        z: 9.3,
      },
    ])
  ).toBe('[{"x":3.4,"y":1.2,"z":8.3},{"x":3.4,"y":-2.1,"z":9.3}]');

});

describe("Should serialize objects", () => {

  expect(
    JSON.stringify<Vec3>({
      x: 3.4,
      y: 1.2,
      z: 8.3,
    })
  ).toBe('{"x":3.4,"y":1.2,"z":8.3}');

  expect(
    JSON.stringify<Player>({
      firstName: "Emmet",
      lastName: "West",
      lastActive: [8, 27, 2022],
      age: 23,
      pos: {
        x: 3.4,
        y: 1.2,
        z: 8.3,
      },
      isVerified: true,
    })
  ).toBe('{"firstName":"Emmet","lastName":"West","lastActive":[8,27,2022],"age":23,"pos":{"x":3.4,"y":1.2,"z":8.3},"isVerified":true}');

  expect(
    JSON.stringify<ObjectWithFloat>({ f: 7.23 })
  ).toBe('{"f":7.23}');

  expect(
    JSON.stringify<ObjectWithFloat>({ f: 0.000001 })
  ).toBe('{"f":0.000001}');

  expect(
    JSON.stringify<ObjectWithFloat>({ f: 1e-7 })
  ).toBe('{"f":1e-7}');

  expect(
    JSON.stringify<ObjectWithFloat>({ f: 1e20 })
  ).toBe('{"f":100000000000000000000.0}');

  expect(
    JSON.stringify<ObjectWithFloat>({ f: 1e21 })
  ).toBe('{"f":1e+21}');

  expect(
    JSON.stringify<ObjWithStrangeKey<string>>({ data: "foo" })
  ).toBe('{"a\\\\\\t\\"\\u0002b`c":"foo"}');

});

describe("Should serialize @omit'ed objects", () => {

  expect(
    JSON.stringify(<OmitIf>{
      y: 1
    })
  ).toBe('{"x":1,"y":1,"z":1}');

});

run();

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