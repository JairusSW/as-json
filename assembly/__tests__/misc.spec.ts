import { JSON } from "..";
import { bytes } from "../util";
import { describe, expect } from "./lib";


@json
class Obj {
  public a: string = "hello";
  public b: string = "world";
  public c: string = '"\t\f\u0000\u0001';
}


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


@json
class InnerObj<T> {
  obj: T = instantiate<T>();
}


@json
class ObjWithBracketString {
  data: string = "";
}

describe("Should serialize special characters", () => {
  expect(JSON.stringify("\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000a\u000b\u000c\u000d\u000e\u000f\u000f\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f")).toBe('"\\u0000\\u0001\\u0002\\u0003\\u0004\\u0005\\u0006\\u0007\\b\\t\\n\\u000b\\f\\r\\u000e\\u000f\\u000f\\u0011\\u0012\\u0013\\u0014\\u0015\\u0016\\u0017\\u0018\\u0019\\u001a\\u001b\\u001c\\u001d\\u001e\\u001f"');
});

describe("Should serialize an object", () => {
  const obj = new Obj();
  expect(JSON.stringify(obj)).toBe('{"a":"hello","b":"world","c":"\\"\\t\\f\\u0000\\u0001"}');
});

describe("Should serialize a player instance", () => {
  const player: Player = {
    firstName: "Jairus",
    lastName: "Tanaka",
    lastActive: [2, 7, 2025],
    age: 18,
    pos: { x: 3.4, y: 1.2, z: 8.3 },
    isVerified: true,
  };
  expect(JSON.stringify(player)).toBe('{"age":18,"pos":{"x":3.4,"y":1.2,"z":8.3},"first name":"Jairus","lastName":"Tanaka","lastActive":[2,7,2025],"isVerified":true}');
});

describe("Should parse JSON objects", () => {
  expect(JSON.stringify(JSON.parse<JSON.Obj>('{"foo":"bar"}'))).toBe('{"foo":"bar"}');
});

describe("Should parse nested JSON objects", () => {
  expect(JSON.stringify(JSON.parse<JSON.Obj>('{"x":1.5,"y":5.4,"z":9.8,"obj":{"foo":"bar"}}'))).toBe('{"x":1.5,"y":5.4,"z":9.8,"obj":{"foo":"bar"}}');
});

describe("Should parse an array with mixed types", () => {
  expect(JSON.stringify(JSON.parse<JSON.Value[]>('["string",true,3.14,{"x":1.0,"y":2.0,"z":3.0},[1.0,2.0,3.0,true]]'))).toBe('["string",true,3.14,{"x":1.0,"y":2.0,"z":3.0},[1.0,2.0,3.0,true]]');
});

describe("Should parse and serialize a Vec3 instance", () => {
  expect(JSON.stringify(JSON.parse<Vec3>('  {  "x"  :  3.4  ,  "y"   :   1.2    ,  "z"  :  8.3   }     '))).toBe('{"x":3.4,"y":1.2,"z":8.3}');
});

describe("Should parse an InnerObj containing an ObjWithBracketString", () => {
  expect(JSON.stringify(JSON.parse<InnerObj<ObjWithBracketString>>('{"obj":{"data":"hello} world"}}'))).toBe('{"obj":{"data":"hello} world"}}');
});
