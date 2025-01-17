import { JSON } from "../..";
import { deserializeArray } from "./array";
import { deserializeBoolean } from "./bool";
import { deserializeFloat } from "./float";
import { deserializeObject } from "./object";
import { deserializeString } from "./string";

// @ts-ignore
@inline export function deserializeArbitrary(srcStart: usize, srcEnd: usize, dst: usize): JSON.Value {
  const firstChar = load<u16>(srcStart);
  if (firstChar == 34) return JSON.Value.from(deserializeString(srcStart, srcEnd, dst));
  else if (firstChar == 123) return JSON.Value.from(deserializeObject(srcStart, srcEnd, dst));
  else if (firstChar - 48 <= 9 || firstChar == 45) return JSON.Value.from(deserializeFloat<f64>(srcStart, srcEnd));
  else if (firstChar == 91) {
    return JSON.Value.from(deserializeArray<JSON.Value[]>(srcStart, srcEnd, dst));
  } else if (firstChar == 116 || firstChar == 102) return JSON.Value.from(deserializeBoolean(srcStart, srcEnd));
  return unreachable();
}
