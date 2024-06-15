import { NULL_WORD } from "../src/chars";
import { JSON } from "..";
import { Box } from "as-container";

// @ts-ignore
@inline export function serializeBox<T extends Box<any>>(data: T): string {
  if (isNullable<T>() && changetype<usize>(data) == <usize>0) {
    return NULL_WORD;
  }
  return JSON.stringify(data.unwrap());
}