import { JSON } from ".."
function canSerde<T>(data: T): void {
    const serialized = JSON.stringify<T>(data);
    const deserialized = JSON.stringify<T>(JSON.parse<T>(serialized));
    expect(serialized).toStrictEqual(deserialized)
}
describe("Ser/de Numbers", () => {
    it("should ser/de integers", () => {
        canSerde<i32>(0)

        canSerde<u32>(100)
        canSerde<u64>(101)
        canSerde<i32>(-100)
        canSerde<i64>(-101)
    });

    it("should ser/de floats", () => {
        canSerde<f64>(7.23)
        canSerde<f64>(10e2)
        canSerde<f64>(10E2)

        canSerde<f64>(123456e-5)

        canSerde<f64>(123456E-5)

        canSerde<f64>(0.0)
        canSerde<f64>(7.23)
    });

    it("should ser/de booleans", () => {
        canSerde<bool>(true)
        canSerde<bool>(false)
        canSerde<boolean>(true)
        canSerde<boolean>(false)
    });

    it("should ser/de strings", () => {
        canSerde<string>('abcdefg')
        canSerde<string>('st"ring" w""ith quotes"')
        canSerde<string>('string \t\r\\"with ran\tdom spa\nces and \nnewlines\n\n\n')
        canSerde<string>('string with colon : comma , brace [ ] bracket { } and quote " and other quote \\"')
    });

})

describe("Ser/de Array", () => {
    it("should ser/de integer arrays", () => {
        canSerde<u32[]>([0, 100, 101])
        canSerde<u64[]>([0, 100, 101])

        canSerde<i32[]>([0, 100, 101, -100, -101])
        canSerde<i64[]>([0, 100, 101, -100, -101])
    });

    it("should ser/de float arrays", () => {
        canSerde<f64[]>([7.23, 10e2, 10E2, 123456e-5, 123456E-5, 0.0, 7.23])
    })

    it("should ser/de boolean arrays", () => {
        canSerde<bool[]>([true, false])
        canSerde<boolean[]>([true, false])
    })

    it("should ser/de string arrays", () => {
        canSerde<string[]>(["abcdefg", "st\"ring\" w\"\"ith quotes\"", "string \t\r\\\"with ran\tdom spa\nces and \nnewlines\n\n\n", "string with colon : comma , brace [ ] bracket { } and quote \" and other quote \\\""])
    });

    it("should ser/de nested integer arrays", () => {
        canSerde<i64[][]>([[100, 101], [-100, -101], [0]])
    });

    it("should ser/de float arrays", () => {
        canSerde<f64[][]>([[7.23], [10e2], [10E2], [123456e-5], [123456E-5], [0.0], [7.23]])
    })

    it("should ser/de boolean arrays", () => {
        canSerde<bool[][]>([[true], [false]])
        canSerde<boolean[][]>([[true], [false]])
    })

    it("should ser/de string arrays", () => {
        canSerde<string[][]>([["abcdefg"], ["st\"ring\" w\"\"ith quotes\""], ["string \t\r\\\"with ran\tdom spa\nces and \nnewlines\n\n\n"], ["string with colon : comma , brace [ ] bracket { } and quote \" and other quote \\\""]])
    });
});