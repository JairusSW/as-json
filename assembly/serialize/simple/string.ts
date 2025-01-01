import { _intTo16 } from "../../custom/util";
import { bytes } from "../../util/bytes";
import { bs } from "../../custom/bs";
import { BACK_SLASH, QUOTE } from "../../custom/chars";
import { SERIALIZE_ESCAPE_TABLE } from "../../globals/tables";

/**
 * Serializes valid strings into their JSON counterpart
 * @param src string
 * @returns void
 */
// @ts-ignore: Decorator
@inline export function serializeString(src: string): void {
  const srcSize = bytes(src);
  // if (!bs.buffer) bs.setBuffer(__new(srcSize + 4, idof<string>()));
  // else
  bs.ensureSize(srcSize + 4);

  let srcPtr = changetype<usize>(src);

  const srcEnd = srcPtr + srcSize;

  store<u16>(bs.offset, QUOTE);

  bs.offset += 2;

  let lastPtr: i32 = srcPtr;
  while (srcPtr < srcEnd) {
    const code = load<u16>(srcPtr);
    if (code == 34 || code == 92 || code < 32) {
      const remBytes = srcPtr - lastPtr;
      memory.copy(bs.offset, lastPtr, remBytes);
      bs.offset += remBytes;
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (code << 2));
      if ((escaped & 0xffff) != BACK_SLASH) {
        bs.ensureCapacity(12);
        store<u64>(bs.offset, 13511005048209500, 0);
        store<u32>(bs.offset, escaped, 8);
        bs.offset += 12;
      } else {
        bs.ensureCapacity(4);
        store<u32>(bs.offset, escaped, 0);
        bs.offset += 4;
      }
      lastPtr = srcPtr + 2;
    }
    srcPtr += 2;
  }
  const remBytes = srcEnd - lastPtr;
  memory.copy(bs.offset, lastPtr, remBytes);
  bs.offset += remBytes;
  store<u16>(bs.offset, QUOTE);
  bs.offset += 2;
}