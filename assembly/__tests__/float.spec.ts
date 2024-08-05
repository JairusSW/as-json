import { JSON } from "json-as";
import { describe, expect, run } from "as-test/assembly";

describe("Should serialize floats", () => {
    expect(JSON.stringify<f64>(7.23)).toBe("7.23");

    expect(JSON.stringify<f64>(10e2)).toBe("1000.0");

    expect(JSON.stringify<f64>(123456e-5)).toBe("1.23456");

    expect(JSON.stringify<f64>(0.0)).toBe("0.0");

    expect(JSON.stringify<f64>(-7.23)).toBe("-7.23");

    expect(JSON.stringify<f64>(1e-6)).toBe("0.000001");

    expect(JSON.stringify<f64>(1e-7)).toBe("1e-7");

    expect(JSON.parse<f64>("1E-7")).toBe(1e-7);

    expect(JSON.stringify<f64>(1e20)).toBe("100000000000000000000.0");

    expect(JSON.stringify<f64>(1e21)).toBe("1e+21");

    expect(JSON.parse<f64>("1E+21")).toBe(1e21);

    expect(JSON.parse<f64>("1e21")).toBe(1e21);

    expect(JSON.parse<f64>("1E21")).toBe(1e21);
});

describe("Should deserialize floats", () => {
    expect(JSON.parse<f64>("7.23")).toBe(7.23);

    expect(JSON.parse<f64>("1000.0")).toBe(1000.0);

    expect(JSON.parse<f64>("1.23456")).toBe(1.23456);

    expect(JSON.parse<f64>("0.0")).toBe(0.0);

    expect(JSON.parse<f64>("-7.23")).toBe(-7.23);

    expect(JSON.parse<f64>("0.000001")).toBe(0.000001);

    expect(JSON.parse<f64>("1e-7")).toBe(1e-7);

    expect(JSON.parse<f64>("100000000000000000000.0")).toBe(1e20);

    expect(JSON.parse<f64>("1e+21")).toBe(1e21);
});

run();