import { JSON } from "..";
import {
  describe,
  expect,
  run
} from "as-test/assembly";
import { DerivedObject, Null, ObjWithStrangeKey, ObjectWithFloat, OmitIf, Player, Vec3 } from "./types";
import { MpZ } from "@hypercubed/as-mpz";

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

describe("Should serialize MpZ (Big Int)", () => {

  expect(
    JSON.stringify<MpZ>(MpZ.from(0))
  ).toBe("0");

  expect(
    JSON.stringify<MpZ>(MpZ.from(2).pow(512))
  ).toBe("13407807929942597099574024998205846127479365820592393377723561443721764030073546976801874298166903427690031858186486050853753882811946569946433649006084096");

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

describe("Should deserialize MpZ (Big Int)", () => {

  expect(
    JSON.parse<MpZ>("0").toString()
  ).toBe("0");

  expect(
    JSON.parse<MpZ>("13407807929942597099574024998205846127479365820592393377723561443721764030073546976801874298166903427690031858186486050853753882811946569946433649006084096").toString()
  ).toBe("13407807929942597099574024998205846127479365820592393377723561443721764030073546976801874298166903427690031858186486050853753882811946569946433649006084096");

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

run({
  log: true
});