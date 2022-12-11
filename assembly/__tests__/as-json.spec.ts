import { JSON } from "..";
import { u128, u128Safe, u256, u256Safe, i128, i128Safe, i256Safe } from "as-bignum/assembly";
function canSerde<T>(data: T): void {
  const serialized = JSON.stringify<T>(data);
  const deserialized = JSON.stringify<T>(JSON.parse<T>(serialized));
  expect(serialized).toBe(deserialized);
}

// @ts-ignore
@json
class Vec3 {
  x: f32;
  y: f32;
  z: f32;
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

class Nullable {}
type Null = Nullable | null;

describe("Ser/de Nulls", () => {
  canSerde<Null>(null);
});
/*
describe("Ser/de Numbers", () => {
  it("should ser/de integers", () => {
    canSerde<i32>(0);

    canSerde<u32>(100);
    canSerde<u64>(101);
    canSerde<i32>(-100);
    canSerde<i64>(-101);

    canSerde<u128>(u128.from("0"))
    canSerde<u128>(u128.from("100"))
    canSerde<u128>(u128.from("101"))
`
    canSerde<u128Safe>(u128Safe.from("0"))
    canSerde<u128Safe>(u128Safe.from("100"))
    canSerde<u128Safe>(u128Safe.from("101"))
    
    canSerde<u256>(u256.fromU128(u128.from("0")))
    canSerde<u256>(u256.fromU128(u128.from("100")))
    canSerde<u256>(u256.fromU128(u128.from("101")))

    canSerde<u256Safe>(u256Safe.fromU128(u128.from("0")))
    canSerde<u256Safe>(u256Safe.fromU128(u128.from("100")))
    canSerde<u256Safe>(u256Safe.fromU128(u128.from("101")))

    canSerde<i128>(i128.from("0"))
    canSerde<i128>(i128.from("100"))
    canSerde<i128>(i128.from("101"))

    canSerde<i128Safe>(i128Safe.from("0"))
    canSerde<i128Safe>(i128Safe.from("100"))
    canSerde<i128Safe>(i128Safe.from("101"))
    canSerde<i128Safe>(i128Safe.from("-100"))
    canSerde<i128Safe>(i128Safe.from("-101"))

    //canSerde<i256Safe>(new i256Safe(10, 11, 500, 501))
  });

  it("should ser/de floats", () => {
    canSerde<f64>(7.23);
    canSerde<f64>(10e2);
    canSerde<f64>(10e2);

    canSerde<f64>(123456e-5);

    canSerde<f64>(123456e-5);

    canSerde<f64>(0.0);
    canSerde<f64>(7.23);
  });

  it("should ser/de booleans", () => {
    canSerde<bool>(true);
    canSerde<bool>(false);
    canSerde<boolean>(true);
    canSerde<boolean>(false);
  });

  it("should ser/de strings", () => {
    canSerde<string>("abcdefg");
    canSerde<string>('st"ring" w""ith quotes"');
    canSerde<string>(
      'string \t\r\\"with ran\tdom spa\nces and \nnewlines\n\n\n'
    );
    canSerde<string>(
      'string with colon : comma , brace [ ] bracket { } and quote " and other quote \\"'
    );
  });

  it("should ser/de BigInt objects", () => {
    canSerde<i32>(0);

    canSerde<u32>(100);
    canSerde<u64>(101);
    canSerde<i32>(-100);
    canSerde<i64>(-101);
    canSerde<u128>(u128.from("0"))
    canSerde<u128>(u128.from("100"))
    canSerde<u128>(u128.from("101"))
    canSerde<u128>(u128.from("-100"))
    canSerde<u128>(u128.from("-101"))

  })
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
    canSerde<string[]>([
      "abcdefg",
      'st"ring" w""ith quotes"',
      'string \t\r"with ran\tdom spa\nces and \nnewlines\n\n\n',
      'string with colon : comma , brace [ ] bracket { } and quote " and other quote "',
    ]);
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

  it("should ser/de string arrays", () => {
    canSerde<string[][]>([
      ["abcdefg"],
      ['st"ring" w""ith quotes"'],
      ['string \t\r\\"with ran\tdom spa\nces and \nnewlines\n\n\n'],
      [
        'string with colon : comma , brace [ ] bracket { } and quote " and other quote \\"',
      ],
    ]);
  });
});

describe("Ser/de Objects", () => {
  it("should ser/de Vec3 Objects", () => {
    canSerde<Vec3>({
      x: 3.4,
      y: 1.2,
      z: 8.3
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
        z: 8.3
      },
      isVerified: true,
    });
  });
});*/
