import { eCode, fCode, tCode } from "../../src/chars";
import { unsafeCharCodeAt } from "../../src/util";
import { deserializeBoolean } from "../bool";

// @ts-ignore: Decorator
@inline export function deserializeBooleanArray<T extends boolean[]>(data: string): T {
  const result = instantiate<T>();
  let lastPos = 1;
  for (let i = 1; i < data.length - 1; i++) {
    const char = unsafeCharCodeAt(data, i);
    if (char === tCode || char === fCode) {
      lastPos = i;
    } else if (char === eCode) {
      i++;
      result.push(deserializeBoolean(data.slice(lastPos, i)));
    }
  }
  return result;
}