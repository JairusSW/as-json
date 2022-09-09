import { JSON } from "..";
describe("JSON Stringify Test", () => {
  it("Stringify String", () => {
    expect<string>(JSON.stringify<string>("Hello AS-JSON")).toBe(
      '"Hello AS-JSON"',
      "19 + 23 is 42"
    );
  });

  it("should be the same reference", () => {
    let ref = new Vec3();
    expect<Vec3>(ref).toBe(ref, "Reference Equality");
  });

  it("should perform a memory comparison", () => {
    let a = new Vec3(1, 2, 3);
    let b = new Vec3(1, 2, 3);

    expect<Vec3>(a).toStrictEqual(
      b,
      "a and b have the same values, (discluding child references)"
    );
  });

  it("should compare strings", () => {
    expect<string>("a=" + "200").toBe("a=200", "both strings are equal");
  });

  it("should compare values", () => {
    expect<i32>(10).toBeLessThan(200);
    expect<i32>(1000).toBeGreaterThan(200);
    expect<i32>(1000).toBeGreaterThanOrEqual(1000);
    expect<i32>(1000).toBeLessThanOrEqual(1000);
  });

  it("can log some values to the console", () => {
    log<string>("Hello world!"); // strings!
    log<f64>(3.1415); // floats!
    log<u8>(244); // integers!
    log<u64>(0xffffffff); // long values!
    log<ArrayBuffer>(new ArrayBuffer(50)); // bytes!
  });
});
