import { StringSink } from "as-string-sink/assembly";
import { unsafeCharCodeAt } from "../src/util";
import { bCode, backSlashCode, backspaceCode, carriageReturnCode, fCode, formFeedCode, forwardSlashCode, nCode, newLineCode, quoteCode, rCode, tCode, tabCode, uCode } from "../src/chars";

// @ts-ignore: Decorator
@inline export function deserializeString(data: string, start: i32 = 0, end: i32 = 0): string {
    end = end || data.length - 1; 
    let result = StringSink.withCapacity(end - start - 1);
    let last = start + 1;
    for (let i = last; i < end; i++) {
      if (unsafeCharCodeAt(data, i) !== backSlashCode) {
        continue;
      }
      const char = unsafeCharCodeAt(data, ++i);
      result.write(data, last, i - 1);
      switch (char) {
        case quoteCode: {
          result.writeCodePoint(quoteCode);
          last = i + 1;
          break;
        }
        case backSlashCode: {
          result.writeCodePoint(backSlashCode);
          last = i + 1;
          break;
        }
        case forwardSlashCode: {
          result.writeCodePoint(forwardSlashCode);
          last = i + 1;
          break;
        }
        case bCode: {
          result.writeCodePoint(backspaceCode);
          last = i + 1;
          break;
        }
        case fCode: {
          result.writeCodePoint(formFeedCode);
          last = i + 1;
          break;
        }
        case nCode: {
          result.writeCodePoint(newLineCode);
          last = i + 1;
          break;
        }
        case rCode: {
          result.writeCodePoint(carriageReturnCode);
          last = i + 1;
          break;
        }
        case tCode: {
          result.writeCodePoint(tabCode);
          last = i + 1;
          break;
        }
        case uCode: {
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
    return result.toString()
  }