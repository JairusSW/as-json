import { nullWord } from "../src/chars";
import { JSON } from "..";

// @ts-ignore
@inline export function serializeBox<T extends Box<any>>(data: T): string {
  if (isNullable<T>() && changetype<usize>(data) == <usize>0) {
    return nullWord;
  }
  return JSON.stringify(data.unwrap());
}