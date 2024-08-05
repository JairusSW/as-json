import { JSON } from "json-as";
import { describe, expect, run } from "as-test/assembly";

describe("Should serialize booleans", () => {
    expect(JSON.stringify<bool>(true)).toBe("true");

    expect(JSON.stringify<bool>(false)).toBe("false");

    expect(JSON.stringify<boolean>(true)).toBe("true");

    expect(JSON.stringify<boolean>(false)).toBe("false");
});

describe("Should deserialize booleans", () => {
    expect(JSON.parse<boolean>("true")).toBe(true);

    expect(JSON.parse<boolean>("false")).toBe(false);
});

run();