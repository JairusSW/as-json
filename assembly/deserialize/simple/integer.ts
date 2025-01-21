import { atoi } from "../../util/atoi";

export function deserializeInteger<T>(srcStart: usize, srcEnd: usize): T {
  return atoi<T>(srcStart, srcEnd);
}
