import { CHAR_E, CHAR_F, CHAR_T } from "../../chars";
import { unsafeCharCodeAt } from "../../util";
import { deserializeBoolean } from "../bool";

// @ts-ignore: Decorator
export function deserializeBooleanArray<T extends boolean[]>(data: string): T {
  const result = instantiate<T>();
  let lastPos = 1;
  for (let i = 1; i < data.length - 1; i++) {
    const char = unsafeCharCodeAt(data, i);
    if (char === CHAR_T || char === CHAR_F) {
      lastPos = i;
    } else if (char === CHAR_E) {
      i++;
      result.push(deserializeBoolean(data.slice(lastPos, i)));
    }
  }
  return result;
}