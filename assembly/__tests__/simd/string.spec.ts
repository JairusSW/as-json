import { describe, expect, log, run } from "as-test/assembly";
import { serializeString_SIMD } from "../../serialize/simd/string";
import { deserializeString_SIMD } from "../../deserialize/simd/string";

const out = changetype<usize>(new ArrayBuffer(512));

const serialize_simd = (data: string): string => String.UTF16.decodeUnsafe(out, serializeString_SIMD(data, out));
const deserialize_simd = (data: string): string => String.UTF16.decodeUnsafe(out, deserializeString_SIMD(data, out));
describe("Should serialize strings", () => {
  expect(serialize_simd("abcdefg")).toBe('"abcdefg"');

  expect(serialize_simd('st"ring" w""ith quotes"'))
  .toBe('"st\\"ring\\" w\\"\\"ith quotes\\""');

  expect(serialize_simd('string "with random spa\nces and \nnewlines\n\n\n'))
  .toBe('"string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"');

  expect(serialize_simd('string with colon : comma , brace [ ] bracket { } and quote " and other quote "'))
  .toBe('"string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\""');
});

describe("Should deserialize strings", () => {
  expect(deserialize_simd('"abcdefg"')).toBe("abcdefg");
  expect(deserialize_simd('"st\\"ring\\" w\\"\\"ith quotes\\""'))
  .toBe('st"ring" w""ith quotes"');

  // expect(deserialize_simd('"string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"'))
  // .toBe('string "with random spa\nces and \nnewlines\n\n\n');

  // expect(deserialize_simd('"string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\""'))
  // .toBe('string with colon : comma , brace [ ] bracket { } and quote " and other quote "');
});

run();
