import { JSON } from "..";
import { describe, expect } from "../../modules/test/assembly";

describe("Should serialize arbitrary types", () => {
  expect(JSON.stringify(JSON.Value.from("hello world"))).toBe("\"hello world\"");
});

describe("Should deserialize arbitrary types", () => {
  expect(JSON.parse<JSON.Value>("\"hello world\"").get<string>()).toBe("hello world");
});