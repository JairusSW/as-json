import { describe, expect } from "as-test";

describe("Serialize String", () => {
    expect(JSON.stringify("hello world").toString()).toBe("\"hello world\"");
});