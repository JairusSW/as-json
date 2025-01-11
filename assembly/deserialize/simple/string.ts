import { CHAR_B, BACK_SLASH, BACKSPACE, CARRIAGE_RETURN, CHAR_F, FORM_FEED, CHAR_N, NEW_LINE, QUOTE, CHAR_R, CHAR_T, TAB, CHAR_U } from "../../custom/chars";
import { Sink } from "../../custom/sink";
import { unsafeCharCodeAt } from "../../custom/util";
import { DESERIALIZE_ESCAPE_TABLE, ESCAPE_HEX_TABLE } from "../../globals/tables";
import { bytes } from "../../util/bytes";

// @ts-ignore: Decorator valid here
@inline export function deserializeString(data: string, start: i32 = 0, end: i32 = 0): string {
  end = end || data.length - 1;
  let result = Sink.withCapacity(end - start - 1);
  let last = start + 1;
  for (let i = last; i < end; i++) {
    if (unsafeCharCodeAt(data, i) !== BACK_SLASH) {
      continue;
    }
    const char = unsafeCharCodeAt(data, ++i);
    result.write(data, last, i - 1);
    switch (char) {
      case QUOTE: {
        result.writeCodePoint(QUOTE);
        last = i + 1;
        break;
      }
      case BACK_SLASH: {
        result.writeCodePoint(BACK_SLASH);
        last = i + 1;
        break;
      }
      case CHAR_B: {
        result.writeCodePoint(BACKSPACE);
        last = i + 1;
        break;
      }
      case CHAR_F: {
        result.writeCodePoint(FORM_FEED);
        last = i + 1;
        break;
      }
      case CHAR_N: {
        result.writeCodePoint(NEW_LINE);
        last = i + 1;
        break;
      }
      case CHAR_R: {
        result.writeCodePoint(CARRIAGE_RETURN);
        last = i + 1;
        break;
      }
      case CHAR_T: {
        result.writeCodePoint(TAB);
        last = i + 1;
        break;
      }
      case CHAR_U: {
        const code = u16.parse(data.slice(i + 1, i + 5), 16);
        result.writeCodePoint(code);
        i += 4;
        last = i + 1;
        break;
      }
      default: {
        throw new Error(`JSON: Cannot parse "${data}" as string. Invalid escape sequence: \\${data.charAt(i)}`);
      }
    }
  }
  if (end > last) {
    result.write(data, last, end);
  }
  return result.toString();
}

// @ts-ignore: Decorator valid here
@inline export function deserializeString_NEW(srcStart: usize, srcEnd: usize, dst: usize): string {
  // const srcSize = srcEnd - srcStart;
  // const dstSize = bytes(dst);

  let dstPtr = dst;

  let lastPtr = srcStart;
  while (srcStart < srcEnd) {
    let code = load<u16>(srcStart);
    if (code == BACK_SLASH) {
      code = load<u16>(DESERIALIZE_ESCAPE_TABLE + load<u8>(srcStart, 2));
      if (code == 117 && load<u32>(srcStart, 4) == 3145776) {
        const block = load<u32>(srcStart, 8);
        const codeA = block & 0xffff;
        const codeB = (block >> 16) & 0xffff;
        const escapedA = load<u8>(ESCAPE_HEX_TABLE + codeA);
        const escapedB = load<u8>(ESCAPE_HEX_TABLE + codeB);
        const escaped = (escapedA << 4) + escapedB;
        const remBytes = srcStart - lastPtr;
        memory.copy(dstPtr, lastPtr, remBytes);
        dstPtr += remBytes;
        store<u16>(dst, escaped);
        dstPtr += 2;
        srcStart += 12;
        lastPtr = srcStart;
      } else {
        const remBytes = srcStart - lastPtr;
        memory.copy(dstPtr, lastPtr, remBytes);
        dstPtr += remBytes;
        store<u16>(dstPtr, code);
        dstPtr += 2;
        srcStart += 4;
        lastPtr = srcStart;
      }
    } else {
      srcStart += 2;
    }
  }

  const remBytes = srcEnd - lastPtr;
  memory.copy(dstPtr, lastPtr, remBytes);
  dstPtr += remBytes;

  if (lastPtr != srcStart) dst = __renew(dst, dstPtr - dst);
  return changetype<string>(dst);
}
