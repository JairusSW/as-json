import { JSON } from "..";
function canSerde<T>(data: T, toBe: string = ""): void {
  if (!toBe) toBe = JSON.stringify<T>(data);
  const deserialized = JSON.stringify<T>(JSON.parse<T>(JSON.stringify(data)));
  expect(deserialized).toBe(toBe);
}

// @ts-ignore
@json
class Vec3 {
  x: f64;
  y: f64;
  z: f64;
}

// @ts-ignore
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
