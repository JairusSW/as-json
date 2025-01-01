import { dtoa_buffered } from "util/number";
import { bs } from "../../custom/bs";

// @ts-ignore: Decorator valid here
@inline export function serializeFloat<T extends number>(data: T): void {
  bs.ensureSize(64);
  bs.offset += dtoa_buffered(bs.offset, data) << 1;
}