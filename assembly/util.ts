import { StringSink } from "as-string-sink/assembly";
import { isSpace } from "assemblyscript/std/assembly/util/string";
import { backSlashCode, quoteCode } from "./chars";
// @ts-ignore
@inline
export function unsafeCharCodeAt(data: string, pos: i32): i32 {
  return load<u16>(changetype<usize>(data) + ((<usize>pos) << 1));
}

export function removeWhitespace(data: string): string {
  const result = new StringSink();
  let instr = false;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    if (instr === false && char === quoteCode) instr = true;
    else if (
      instr === true &&
      char === quoteCode &&
      data.charCodeAt(i - 1) !== backSlashCode
    )
      instr = false;

    if (instr === false) {
      if (!isSpace(char)) result.write(data.charAt(i));
    } else {
      result.write(data.charAt(i));
    }
  }
  return result.toString();
}
