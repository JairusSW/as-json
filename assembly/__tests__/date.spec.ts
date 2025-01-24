import { JSON } from "json-as";
import { describe, expect, run } from "as-test/assembly";

describe("Should serialize dates", () => {
  expect(JSON.stringify(new Date(1767184496789))).toBe('"2025-12-31T12:34:56.789Z"');
});

describe("Should deserialize dates", () => {
  expect(JSON.parse<Date>('"2025-12-31T12:34:56.789Z"').getTime()).toBe(1767184496789);
});

run();
