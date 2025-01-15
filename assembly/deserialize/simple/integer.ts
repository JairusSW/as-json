import { atoi } from "../../util/atoi";

// @ts-ignore: Decorator valid here
@inline export function deserializeInteger<T>(srcStart: usize, srcEnd: usize): T {
  return atoi<T>(srcStart, srcEnd);
}