import { JSON } from "../..";
import { unsafeCharCodeAt } from "../../custom/util";
import { deserializeBoolean } from "./bool";
import { deserializeFloat } from "./float";
import { deserializeInteger } from "./integer";
import { deserializeObject } from "./object";
import { deserializeString } from "./string";

// @ts-ignore
@inline export function deserializeArbitrary(srcStart: usize, srcEnd: usize, dst: usize = 0): JSON.Value {
  const firstChar = unsafeCharCodeAt(data, 0);

  if (firstChar == 34) return JSON.Value.from(deserializeString(data));
  if (firstChar == 123) return JSON.Value.from(deserializeObject(data));
  if (firstChar > 47 && firstChar < 58) return JSON.Value.from(data.includes(".") ? deserializeInteger<u64>(data) : deserializeFloat<f64>(data));
  if (firstChar == 45) return JSON.Value.from(data.includes(".") ? deserializeInteger<i64>(data) : deserializeFloat<f64>(data));
  if (firstChar == 91) {
    // array
  }
  if (firstChar == 116 || firstChar == 102) return JSON.Value.from(deserializeBoolean(data));
  return unreachable();
}
