import { JSON } from "json-as";
import { describe, expect, run } from "as-test/assembly";

describe("Should serialize strings", () => {
    expect(JSON.stringify("abcdefg")).toBe('"abcdefg"');

    expect(JSON.stringify('st"ring" w""ith quotes"')).toBe(
        '"st\\"ring\\" w\\"\\"ith quotes\\""',
    );

    expect(
        JSON.stringify('string "with random spa\nces and \nnewlines\n\n\n'),
    ).toBe('"string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"');

    expect(
        JSON.stringify(
            'string with colon : comma , brace [ ] bracket { } and quote " and other quote \\"',
        ),
    ).toBe(
        '"string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\\\\\""',
    );
});

describe("Should deserialize strings", () => {
    expect(JSON.parse<string>('"abcdefg"')).toBe("abcdefg");
  
    expect(
      JSON.parse<string>(
        '"\\"st\\\\\\"ring\\\\\\" w\\\\\\"\\\\\\"ith quotes\\\\\\"\\""',
      ),
    ).toBe('"st\\"ring\\" w\\"\\"ith quotes\\""');
  
    expect(
      JSON.parse<string>(
        '"\\"string \\\\\\"with random spa\\\\nces and \\\\nnewlines\\\\n\\\\n\\\\n\\""',
      ),
    ).toBe('"string \\"with random spa\\nces and \\nnewlines\\n\\n\\n"');
  
    expect(
      JSON.parse<string>(
        '"\\"string with colon : comma , brace [ ] bracket { } and quote \\\\\\" and other quote \\\\\\\\\\"\\""',
      ),
    ).toBe(
      '"string with colon : comma , brace [ ] bracket { } and quote \\" and other quote \\\\""',
    );
  });

run();