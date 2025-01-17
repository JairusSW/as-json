import { itoa_buffered } from "util/number";
import { bs } from "as-bs";

export function serializeInteger<T extends number>(data: T): void {
  // bs.ensureSize(sizeof<T>() << 3);
  bs.offset += itoa_buffered(bs.offset, data) << 1;
}
