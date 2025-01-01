import { BRACE_LEFT, BRACE_RIGHT, COLON, COMMA } from "../../custom/chars";
import { bs } from "../../custom/bs";
import { serialize } from ".";

export function serializeMap<T extends Map<any, any>>(src: T): void {
  const srcSize = src.size;
  const srcEnd = srcSize - 1;

  if (!srcSize) {
    bs.ensureSize(4);
    store<u32>(bs.offset, 8192123);
    bs.offset += 4;
    return;
  }

  let keys = src.keys();
  let values = src.values();

  bs.ensureSize(srcSize << 3); // This needs to be predicted better

  store<u16>(bs.offset, BRACE_LEFT);
  bs.offset += 2;

  for (let i = 0; i < srcEnd; i++) {
    serialize(unchecked(keys[i]));
    bs.ensureSize(2);
    store<u16>(bs.offset, COLON);
    bs.offset += 2;
    serialize(unchecked(values[i]));
    bs.ensureSize(2);
    store<u16>(bs.offset, COMMA);
    bs.offset += 2;
  }

  serialize(unchecked(keys[srcEnd]));
  bs.ensureSize(2);
  store<u16>(bs.offset, COLON);
  bs.offset += 2;
  serialize(unchecked(values[srcEnd]));
  bs.ensureSize(2);
  store<u16>(bs.offset, BRACE_RIGHT);
  bs.offset += 2;
}