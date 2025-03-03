import { itoa_buffered } from "util/number";

export function serializeInteger<T extends number>(data: T): void {
  bs.ensureSize(sizeof<T>() << 3);
  const bytesWritten = itoa_buffered(bs.offset, data) << 1;
  bs.offset += bytesWritten;
  bs.growSize(bytesWritten);
}

// 32 {"x":,"y":,"z"}
// 18 3.41.28.3