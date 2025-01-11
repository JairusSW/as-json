import { itoa_buffered } from "util/number";
import { bs } from "as-bs";

// @ts-ignore: Decorator valid here
@inline export function serializeInteger<T extends number>(data: T, staticSize: bool = false): void {
  if (!staticSize) bs.ensureSize(sizeof<T>() << 3);
  bs.offset += itoa_buffered(bs.offset, data) << 1;
}
