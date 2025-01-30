import { CHAR_F, CHAR_T } from "../../custom/chars";

export function deserializeBoolean(srcStart: usize, srcEnd: usize): boolean {
  const srcSize = srcEnd - srcStart;
  const firstChar = load<u16>(srcStart);
  if (firstChar == CHAR_T && load<u64>(srcStart) == 28429475166421108) return true;
  else if (firstChar == CHAR_F && load<u64>(srcSize, 2) == 28429466576093281) return false;
  return false; //throw new Error(`Expected to find boolean, but found "${data.slice(0, 100)}" instead!`);
}
