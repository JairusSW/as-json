import { JSON } from "json-as";
import { describe, expect, run } from "as-test/assembly";

describe("Should serialize integers", () => {
    expect(JSON.stringify(0)).toBe("0");

    expect(JSON.stringify<u32>(100)).toBe("100");

    expect(JSON.stringify<u64>(101)).toBe("101");

    expect(JSON.stringify<i32>(-100)).toBe("-100");

    expect(JSON.stringify<i64>(-101)).toBe("-101");
});

describe("Should deserialize integers", () => {
    expect(JSON.parse<i32>("0")).toBe(<i32>0);

    expect(JSON.parse<u32>("100")).toBe(<u32>100);

    expect(JSON.parse<u64>("101")).toBe(<u64>101);

    expect(JSON.parse<i32>("-100")).toBe(<i32>-100);

    expect(JSON.parse<i64>("-101")).toBe(<i64>-101);
});

run();