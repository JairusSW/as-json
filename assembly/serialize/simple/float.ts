import { dtoa_buffered } from "util/number";
import { bs } from "as-bs";

export function serializeFloat<T extends number>(data: T, staticSize: bool = false): void {
  if (!staticSize) bs.ensureSize(64);
  bs.offset += dtoa_buffered(bs.offset, data) << 1;
}
