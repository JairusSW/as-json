import { BRACE_LEFT, BRACE_RIGHT, COLON, COMMA } from "../../custom/chars";
import { bs } from "../../custom/bs";
import { serialize_simple } from ".";

export function serializeMap<T extends Map<any, any>>(src: T, staticSize: bool = false): void {
  const srcSize = src.size;
  const srcEnd = srcSize - 1;

  if (!srcSize) {
    if (!staticSize) bs.ensureSize(4);
    store<u32>(bs.offset, 8192123);
    bs.offset += 4;
    return;
  }

  let keys = src.keys();
  let values = src.values();

  if (!staticSize) bs.ensureSize(srcSize << 3); // This needs to be predicted better

  store<u16>(bs.offset, BRACE_LEFT);
  bs.offset += 2;

  for (let i = 0; i < srcEnd; i++) {
    serialize_simple(unchecked(keys[i]));
    if (!staticSize)  bs.ensureSize(2);
    store<u16>(bs.offset, COLON);
    bs.offset += 2;
    serialize_simple(unchecked(values[i]));
    if (!staticSize) bs.ensureSize(2);
    store<u16>(bs.offset, COMMA);
    bs.offset += 2;
  }

  serialize_simple(unchecked(keys[srcEnd]));
  if (!staticSize) bs.ensureSize(2);
  store<u16>(bs.offset, COLON);
  bs.offset += 2;
  serialize_simple(unchecked(values[srcEnd]));
  if (!staticSize) bs.ensureSize(2);
  store<u16>(bs.offset, BRACE_RIGHT);
  bs.offset += 2;
}