import { JSON } from "..";
function canSerde<T>(data: T, toBe: string = ""): void {
  if (!toBe) toBe = JSON.stringify<T>(data);
  const deserialized = JSON.stringify<T>(JSON.parse<T>(JSON.stringify(data)));
  expect(deserialized).toBe(toBe);
}

function canDeser<T>(data: string, toBe: T): void {
  const deserialized = JSON.parse<T>(data);
  expect(deserialized).toStrictEqual(toBe);
}

function canSer<T>(data: T, toBe: string): void {
  const serialized = JSON.stringify<T>(data);
  expect(serialized).toBe(toBe);
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

describe("Ser/de Nulls", () => {
  canSerde<Null>(null);
});

describe("Ser/de Strings", () => {
  it("should ser/de strings", () => {
    canSerde<string>("abcdefg");
    canSerde<string>('st"ring" w""ith quotes"');
    canSerde<string>('string \"with random spa\nces and \nnewlines\n\n\n');
    canSerde<string>(
      'string with colon : comma , brace [ ] bracket { } and quote " and other quote \\"'
    );
  });
});

describe("Ser/de Numbers", () => {
  it("should ser/de integers", () => {
    canSerde<i32>(0);

    canSerde<u32>(100, "100");
    canSerde<u64>(101, "101");
    canSerde<i32>(-100, "-100");
    canSerde<i64>(-101, "-101");
  });

  it("should ser/de floats", () => {
    canSerde<f64>(7.23, "7.23");
    canSerde<f64>(10e2, "1000.0");

    canSerde<f64>(123456e-5, "1.23456");

    canSerde<f64>(0.0, "0.0");
    canSerde<f64>(7.23, "7.23");
  });

  it("should ser/de booleans", () => {
    canSerde<bool>(true);
    canSerde<bool>(false);
    canSerde<boolean>(true);
    canSerde<boolean>(false);
  });
});

describe("Ser/de Array", () => {
  it("should ser/de integer arrays", () => {
    canSerde<u32[]>([0, 100, 101]);
    canSerde<u64[]>([0, 100, 101]);

    canSerde<i32[]>([0, 100, 101, -100, -101]);
    canSerde<i64[]>([0, 100, 101, -100, -101]);
  });

  it("should ser/de float arrays", () => {
    canSerde<f64[]>([7.23, 10e2, 10e2, 123456e-5, 123456e-5, 0.0, 7.23]);
  });

  it("should ser/de boolean arrays", () => {
    canSerde<bool[]>([true, false]);
    canSerde<boolean[]>([true, false]);
  });

  it("should ser/de string arrays", () => {
    canSerde<string[]>(['string \"with random spa\nces and \nnewlines\n\n\n'], '["string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"]');
  });

  it("should ser/de nested integer arrays", () => {
    canSerde<i64[][]>([[100, 101], [-100, -101], [0]]);
  });

  it("should ser/de float arrays", () => {
    canSerde<f64[][]>([
      [7.23],
      [10e2],
      [10e2],
      [123456e-5],
      [123456e-5],
      [0.0],
      [7.23],
    ]);
  });

  it("should ser/de boolean arrays", () => {
    canSerde<bool[][]>([[true], [false]]);
    canSerde<boolean[][]>([[true], [false]]);
  });

  it("should ser/de object arrays", () => {
    canSerde<Vec3[]>([
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
    ]);
  });
});

describe("Ser/de Objects", () => {
  it("should ser/de Vec3 Objects", () => {
    canSerde<Vec3>({
      x: 3.4,
      y: 1.2,
      z: 8.3,
    });
  });
  it("should ser/de deep objects", () => {
    canSerde<Player>({
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
    }, '{"firstName":"Emmet","lastName":"West","lastActive":[8,27,2022],"age":23,"pos":{"x":3.4,"y":1.2,"z":8.3},"isVerified":true}');
  });
});

describe("Ser externals", () => {
  it("should serialize valid objects", () => {
    canSer<Map4>({ a: '\\', b: '}', c: '][', d: '"' }, '{"a":"\\\\","b":"}","c":"][","d":"\\""}')
    canSer<Vec3>({ x: 0.4, y: 1.4, z: 0 }, '{"x":0.4,"y":1.4,"z":0.0}')
  })
});

@json
class HttpResp {
  statusCode: number;
  headers: Array<Array<string>>;
  body: string;
}

describe("Deser externals", () => {
  it("should deserialize valid JSON strings", () => {
    canDeser<Map4>('{"a":\r"\\\\",\n\r"b":"}","c":"][","d"\t:\t"\\""}', { a: '\\', b: '}', c: '][', d: '"' })
    canDeser<Vec3>('{"x":0.4,"y":1.4,"z":0.0}', { x: 0.4, y: 1.4, z: 0 })
    canDeser<HttpResp>('{"statusCode":200,"headers":[["Conn\\\\ection","close"],["Content-Length","375"],["ETag","W/\\"177-/Ihew5Z+fiI8NLbTM2Wyphl/PFY\\""]],\n"body":"{\\n  \\\"args\\\": {},\\n  \\\"headers\\\": {\\n    \\\"content-length\\\": \\\"0\\\",\\n    \\\"accept\\\": \\\"*/*\\\" \\n}}"}',
      {
        statusCode: 200,
        headers: [
          ['Conn\\ection', 'close'],
          ['Content-Length', '375'],
          ['ETag', 'W/\"177-/Ihew5Z+fiI8NLbTM2Wyphl/PFY\"']
        ],
        body: '{\n  "args": {},\n  "headers": {\n    "content-length": "0",\n    "accept": "*/*" \n}}'
      })
  })
});

describe("Ser/de Maps", () => {
  it("should serialize Map<string, string>", () => {
    const m = new Map<string, string>();
    m.set("a", "x");
    m.set("b", "y");
    m.set("c", "z");
    canSer(m, '{"a":"x","b":"y","c":"z"}');
  });
  it("should serialize Map<string, string | null>", () => {
    const m = new Map<string, string | null>();
    m.set("a", "x");
    m.set("b", "y");
    m.set("c", null);
    canSer(m, '{"a":"x","b":"y","c":null}');
  });
  it("should serialize Map<string, string[]]>", () => {
    const m = new Map<string, string[]>();
    m.set("a", ["a1", "a2", "a3"]);
    m.set("b", ["b1", "b2", "b3"]);
    m.set("c", ["c1", "c2", "c3"]);
    canSer(m, '{"a":["a1","a2","a3"],"b":["b1","b2","b3"],"c":["c1","c2","c3"]}');
  });
  it("should serialize Map<string, u32>", () => {
    const m = new Map<string, u32>();
    m.set("a", 1);
    m.set("b", 2);
    m.set("c", 3);
    canSer(m, '{"a":1,"b":2,"c":3}');
  });
  it("should serialize Map<string, bool>", () => {
    const m = new Map<string, bool>();
    m.set("a", true);
    m.set("b", false);
    m.set("c", true);
    canSer(m, '{"a":true,"b":false,"c":true}');
  });
  it("should serialize Map<string, Vec3>", () => {
    const m = new Map<string, Vec3>();
    m.set("foo", { x: 1, y: 2, z: 3 });
    m.set("bar", { x: 11.5, y: 12.5, z: 13.5 });
    canSer(m, '{"foo":{"x":1.0,"y":2.0,"z":3.0},"bar":{"x":11.5,"y":12.5,"z":13.5}}');
  });

  it("should deserialize Map<string, string>", () => {
    const m = new Map<string, string>();
    m.set("a", "x");
    m.set("b", "y");
    m.set("c", "z");
    canDeser('{"a":"x","b":"y","c":"z"}', m);
  });
  it("should deserialize Map<string, string | null>", () => {
    const m = new Map<string, string | null>();
    m.set("a", "x");
    m.set("b", "y");
    m.set("c", null);
    canDeser('{"a":"x","b":"y","c":null}', m);
  });
  it("should deserialize Map<string, string[]>", () => {
    const m = new Map<string, string[]>();
    m.set("a", ["a1", "a2", "a3"]);
    m.set("b", ["b1", "b2", "b3"]);
    m.set("c", ["c1", "c2", "c3"]);
    canDeser('{"a":["a1","a2","a3"],"b":["b1","b2","b3"],"c":["c1","c2","c3"]}', m);
  });
  it("should deserialize Map<string, u32>", () => {
    const m = new Map<string, u32>();
    m.set("a", 1);
    m.set("b", 2);
    m.set("c", 3);
    canDeser('{"a":1,"b":2,"c":3}', m);
  });
  it("should deserialize Map<string, bool>", () => {
    const m = new Map<string, bool>();
    m.set("a", true);
    m.set("b", false);
    m.set("c", true);
    canDeser('{"a":true,"b":false,"c":true}', m);
  });
  it("should deserialize Map<string, Vec3>", () => {
    const m = new Map<string, Vec3>();
    m.set("foo", { x: 1, y: 2, z: 3 });
    m.set("bar", { x: 11.5, y: 12.5, z: 13.5 });
    canDeser('{"foo":{"x":1.0,"y":2.0,"z":3.0},"bar":{"x":11.5,"y":12.5,"z":13.5}}', m);
  });

  it("should serialize Map<u32, bool>", () => {
    const m = new Map<u32, bool>();
    m.set(1, true);
    m.set(2, false);
    m.set(3, true);
    canSer(m, '{"1":true,"2":false,"3":true}'); 
  });
  it("should deserialize Map<u32, bool>", () => {
    const m = new Map<u32, bool>();
    m.set(1, true);
    m.set(2, false);
    m.set(3, true);
    canDeser('{"1":true,"2":false,"3":true}', m); 
  });

  it("should serialize Map<bool, string>", () => {
    const m = new Map<bool, string>();
    m.set(true, "a");
    m.set(false, "b");
    canSer(m, '{"true":"a","false":"b"}'); 
  });
  it("should deserialize Map<bool, string>", () => {
    const m = new Map<bool, string>();
    m.set(true, "a");
    m.set(false, "b");
    canDeser('{"true":"a","false":"b"}', m); 
  });

  it("should serialize Map<string, string>[]", () => {
    const m1 = new Map<string, string>();
    m1.set("a", "u");
    m1.set("b", "v");
    m1.set("c", "w");
    
    const m2 = new Map<string, string>();
    m2.set("d", "x");
    m2.set("e", "y");
    m2.set("f", "z");

    const a = [m1, m2];
    canSer(a, '[{"a":"u","b":"v","c":"w"},{"d":"x","e":"y","f":"z"}]');
  });
  it("should deserialize Map<string, string>[]", () => {
    const m1 = new Map<string, string>();
    m1.set("a", "u");
    m1.set("b", "v");
    m1.set("c", "w");
    
    const m2 = new Map<string, string>();
    m2.set("d", "x");
    m2.set("e", "y");
    m2.set("f", "z");

    const a = [m1, m2];
    canDeser('[{"a":"u","b":"v","c":"w"},{"d":"x","e":"y","f":"z"}]', a);
  });

});
