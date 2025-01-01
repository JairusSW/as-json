import { bs } from "../../custom/bs";
import { QUOTE } from "../../custom/chars";
import { bytes } from "../../util/bytes";

// @ts-ignore: Decorator valid here
@inline export function serializeDate(src: Date): void {
  const data = src.toISOString();
  const dataSize = bytes(data);
  bs.ensureSize(dataSize + 4);
  store<u16>(bs.offset, QUOTE);
  memory.copy(bs.offset + 2, changetype<usize>(data), dataSize);
  store<u16>(bs.offset + dataSize, QUOTE, 2);
  bs.offset += dataSize + 4;
}
