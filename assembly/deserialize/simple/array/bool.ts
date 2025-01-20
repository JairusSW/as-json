import { CHAR_E, CHAR_F, CHAR_T } from "../../../custom/chars";

export function deserializeBooleanArray<T extends boolean[]>(srcStart: usize, srcEnd: usize, dst: usize): T {
  const out = dst ? changetype<T>(dst) : instantiate<T>();
  while (srcStart < srcEnd) {
    const code = load<u16>(srcStart);
    if (code == CHAR_T && load<u16>(srcStart, 8) == CHAR_E) {
      out.push(true);
      srcStart += 10;
    } else if (code == CHAR_F && load<u16>(srcStart, 10) == CHAR_E) {
      out.push(false);
      srcStart += 12;
    }
    srcStart += 2;
  }
  return out;
}
