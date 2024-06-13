import { Box } from "as-container";
import { JSON } from "./src/json";

@json
class Foo {
  @omitnull
  optionalNumber: Box<i32> | null = null;
  @omitif("this.tristateValue!.unwrap() == false")
  tristateValue: Box<bool> | null = null;
}

const foo: Foo = {
  optionalNumber: null,
  tristateValue: Box.from(true)
}

console.log(JSON.stringify(foo));

const p1 = JSON.parse<Box<i32> | null>("null");
console.log(JSON.stringify<Box<i32> | null>(p1));
console.log(changetype<usize>(p1).toString())
const p2 = JSON.parse<Foo>("{\"optionalNumber\":null,\"tristateValue\":false}");
console.log(JSON.stringify(p2));