import { JSON, Nullable } from ".."
import { Variant } from "as-variant"

describe("AS-JSON Test Suite", () => {
  test("Should (de)serialize strings", () => {
    expect(JSON.stringify<string>("Hello World\"")).toStrictEqual("\"Hello World\\\"\"");
    expect(JSON.parse<string>("\"Hello World\\\"\"")).toStrictEqual("Hello World\"")
  })
  test("Should (de)serialize booleans", () => {
    expect(JSON.stringify<boolean>(true)).toStrictEqual("true")
    expect(JSON.stringify<boolean>(false)).toStrictEqual("false")
    expect(JSON.parse<boolean>("true")).toStrictEqual(<boolean>true)
    expect(JSON.parse<boolean>("false")).toStrictEqual(<boolean>false)
  })
  test("Should (de)serialize nulls", () => {
    expect(JSON.stringify<Nullable | null>(null)).toStrictEqual("null")
    expect(JSON.parse<Nullable | null>("null")).toStrictEqual(<Nullable | null>null)
  })
  test("Should (de)serialize 32-bit-integers", () => {
    expect(JSON.stringify<i32>(1234567890)).toStrictEqual("1234567890")
    expect(JSON.stringify<i32>(-1234567890)).toStrictEqual("-1234567890")
    expect(JSON.parse<i32>("-1234567890")).toStrictEqual(<i32>-1234567890)
    expect(JSON.parse<i32>("1234567890")).toStrictEqual(<i32>1234567890)
  })
  test("Should (de)serialize 64-bit-integers", () => {
    expect(JSON.stringify<i64>(1234567890)).toStrictEqual("1234567890")
    expect(JSON.stringify<i64>(-1234567890)).toStrictEqual("-1234567890")
    expect(JSON.parse<i64>("1234567890")).toStrictEqual(<i64>1234567890)
    expect(JSON.parse<i64>("-1234567890")).toStrictEqual(<i64>-1234567890)
  })
  test("Should (de)serialize 32-bit-floats", () => {
    expect(JSON.stringify<f32>(12345.0)).toStrictEqual("12345.0")
    expect(JSON.stringify<f32>(-12345.0)).toStrictEqual("-12345.0")
    expect(JSON.parse<f32>("12345.0")).toStrictEqual(<f32>12345.0)
    expect(JSON.parse<f32>("-12345.0")).toStrictEqual(<f32>-12345.0)
  })
  test("Should (de)serialize 64-bit-floats", () => {
    expect(JSON.stringify<f64>(123456789.0)).toStrictEqual("123456789.0")
    expect(JSON.stringify<f64>(-123456789.0)).toStrictEqual("-123456789.0")
    expect(JSON.parse<f64>("123456789.0")).toStrictEqual(<f64>123456789.0)
    expect(JSON.parse<f64>("-123456789.0")).toStrictEqual(<f64>-123456789.0)
  })
  it("Should (de)serialize scientific notation floats", () => {
    // Supports lower e
    expect(JSON.parse<f64>("1.23456e5")).toStrictEqual(123456.0)

    // Supports Upper e
    expect(JSON.parse<f64>("1.23456E5")).toStrictEqual(123456.0)

    // Supports Complex +
    expect(JSON.parse<f64>("1.23456e+5")).toStrictEqual(123456.0)

    // Supports Complex -
    expect(JSON.parse<f64>("123456E-5")).toStrictEqual(1.23456)
  });
  test("Should deserialize zero", () => {
    // Sometimes, it mixes up null with zero
    expect(JSON.parse<i32>("0")).toStrictEqual(<i32>0)
    expect(JSON.parse<i32>("-0")).toStrictEqual(<i32>-0)
  })
  test("Should (de)serialize variant string", () => {
    expect(JSON.stringify<Variant>(Variant.from("Hello World\""))).toStrictEqual("\"Hello World\\\"\"")
    expect(JSON.parse<Variant>("\"Hello World\\\"\"").get<string>()).toStrictEqual("Hello World\"")
  })
})