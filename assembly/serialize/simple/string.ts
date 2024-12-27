import { _intTo16 } from "../../custom/util";
import { Sink } from "../../custom/sink";

/**
 * Serializes valid strings into their JSON counterpart
 * @param data string
 * @returns JSON
 */
// @ts-ignore: Decorator
@inline export function serializeString(data: string): string {
  // if (!needsEscaping(data)) {
  //     return "\"" + data + "\"";
  // }

  let result = Sink.fromString('"');

  let last: i32 = 0;
  for (let i = 0; i < data.length; i++) {
    const char = load<u16>(changetype<usize>(data) + (i << 1));
    if (char === 34 || char === 92) {
      result.write(<string>data, last, i);
      result.writeCodePoint(92);
      last = i;
    } else if (char < 32) {
      if (char < 16) {
        result.write(<string>data, last, i);
        last = i + 1;
        switch (char) {
          case 8: {
            result.write("\\b");
            break;
          }
          case 9: {
            result.write("\\t");
            break;
          }
          case 10: {
            result.write("\\n");
            break;
          }
          case 12: {
            result.write("\\f");
            break;
          }
          case 13: {
            result.write("\\r");
            break;
          }
          default: {
            // all chars 0-31 must be encoded as a four digit unicode escape sequence
            // \u0000 to \u000f handled here
            result.write("\\u000");
            result.write(char.toString(16));
            break;
          }
        }
      } else {
        result.write(<string>data, last, i);
        last = i + 1;
        // all chars 0-31 must be encoded as a four digit unicode escape sequence
        // \u0010 to \u001f handled here
        result.write("\\u00");
        result.write(char.toString(16));
      }
    }
  }
  result.write(<string>data, last);
  result.writeCodePoint(34);
  return result.toString();
}

// import { _intTo16, nextPowerOf2 } from "../../custom/util";
// import { OBJECT, TOTAL_OVERHEAD } from "rt/common";

// const ESCAPE_TABLE = memory.data<u16>([
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 0-3
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 4-7

//   92, 98, 92, 116, 92, 110, 0, 0, // Pair 8-11
//   92, 102, 92, 114, 0, 0, 0, 0, // Pair 12-15

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 16-19
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 20-23

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 24-27
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 28-31

//   0, 0, 0, 0, 92, 34, 0, 0, // Pair 32-35
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 36-39

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 40-43
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 44-47

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 48-51
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 52-55

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 56-59
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 60-63

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 64-67
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 68-71

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 72-75
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 76-79

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 80-83
//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 84-87

//   0, 0, 0, 0, 0, 0, 0, 0, // Pair 88-91
//   92, 92, 0, 0, 0, 0, 0, 0, // Pair 92-95
// ]);

// /**
//  * Serializes valid strings into their JSON counterpart
//  * @param src string
//  * @returns JSON
//  */
// // @ts-ignore: Decorator
// @inline export function serializeString(src: string, dst: usize): string {
//   const src_len = changetype<OBJECT>(changetype<usize>(src) - TOTAL_OVERHEAD).rtSize;
//   let dst_len: usize;
//   let src_ptr = changetype<usize>(src);
//   let dst_ptr = dst;

//   if (dst == 0) {
//     dst_len = src_len + 4;
//     dst = changetype<usize>(__new(dst_len, idof<ArrayBuffer>()));
//   } else if (src_len + 4 > (dst_len = changetype<OBJECT>(changetype<usize>(dst) - TOTAL_OVERHEAD).rtSize)) {
//     const len = src_len + 4;
//     dst_ptr = (dst = __renew(dst, len));
//   }

//   let src_end = src_ptr + src_len;

//   store<u8>(dst, 34); /* " */

//   let last: usize = src_ptr;
//   while (src_ptr < src_end) {
//     const code = load<u16>(src_ptr);
//     if (code == 34 || code == 92 || code < 32) {
//       memory.copy(last, src_ptr - 2, dst_ptr - last);
//       if (dst_ptr - dst > dst_len) {
//         dst_ptr -= dst;
//         dst_ptr += dst = __renew(dst, dst_len += 2);
//       }
//       const escaped = load<u32>(ESCAPE_TABLE + (code << 2));
//       store<u32>(dst_ptr, escaped);
//       dst_ptr += 4;
//       src_ptr += 2;
//       last = dst_ptr;
//     } else {
//       dst_ptr += 2;
//       src_ptr += 2;
//     }
//   }

//   store<u8>(dst_ptr, 34, 2); /* " */
  
//   dst_ptr -= dst;
//   if (dst_len > dst_ptr) {
//     dst_ptr += dst = __renew(dst, max(4, dst_ptr));
//   }
//   return changetype<string>(dst);
// }
