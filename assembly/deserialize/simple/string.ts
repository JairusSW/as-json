import { CHAR_B, BACK_SLASH, BACKSPACE, CARRIAGE_RETURN, CHAR_F, FORM_FEED, CHAR_N, NEW_LINE, QUOTE, CHAR_R, CHAR_T, TAB, CHAR_U } from "../../custom/chars";
import { Sink } from "../../custom/sink";
import { unsafeCharCodeAt } from "../../custom/util";

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
// @inline export function deserializeString_BS(data: string, start: i32 = 0, end: i32 = 0): void {
//     end = end || data.length - 1;
//     let last = start + 1;
//     for (let i = last; i < end; i++) {
//         if (unsafeCharCodeAt(data, i) !== BACK_SLASH) {
//             continue;
//         }
//         const char = unsafeCharCodeAt(data, ++i);
//         bs.write_s_se_u(data, last, i - 1);
//         switch (char) {
//             case QUOTE: {
//                 bs.write_8(QUOTE);
//                 last = i + 1;
//                 break;
//             }
//             case BACK_SLASH: {
//                 bs.write_8(BACK_SLASH);
//                 last = i + 1;
//                 break;
//             }
//             case FWD_SLASH: {
//                 bs.write_8(FWD_SLASH);
//                 last = i + 1;
//                 break;
//             }
//             case CHAR_B: {
//                 bs.write_8(BACKSPACE);
//                 last = i + 1;
//                 break;
//             }
//             case CHAR_F: {
//                 bs.write_8(FORM_FEED);
//                 last = i + 1;
//                 break;
//             }
//             case CHAR_N: {
//                 bs.write_8(NEW_LINE);
//                 last = i + 1;
//                 break;
//             }
//             case CHAR_R: {
//                 bs.write_8(CARRIAGE_RETURN);
//                 last = i + 1;
//                 break;
//             }
//             case CHAR_T: {
//                 bs.write_8(TAB);
//                 last = i + 1;
//                 break;
//             }
//             case CHAR_U: {

//                 const code = u16.parse(data.slice(i + 1, i + 5), 16);
//                 bs.w(code);
//                 i += 4;
//                 last = i + 1;
//                 break;
//             }
//             default: {
//                 throw new Error(`JSON: Cannot parse "${data}" as string. Invalid escape sequence: \\${data.charAt(i)}`);
//             }
//         }
//     }
//     if (end > last) {
//         result.write(data, last, end);
//     }
// }

// @ts-ignore: Decorator valid here
@inline export function deserializeString_Safe(data: string, start: i32 = 0, end: i32 = 0): string {
  const firstChar = load<u8>(changetype<usize>(data));
  if (firstChar != QUOTE) throw new Error('Mismatched Types! Expected string but got "' + data.slice(0, 100) + '" instead!');
  return deserializeString(data, start, end);
}
