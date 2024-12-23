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
