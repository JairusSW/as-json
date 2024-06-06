import { __atoi_fast } from "../src/util";
import { unsafeCharCodeAt } from "../src/util";
import {
  bCode,
  fCode,
  nCode,
  uCode,
  rCode,
  tCode,
  tabCode,
  quoteCode,
  newLineCode,
  formFeedCode,
  backSlashCode,
  backspaceCode,
  forwardSlashCode,
  carriageReturnCode
} from "../src/chars";
import { Sink } from "../src/sink";

// @ts-ignore: Decorator
@inline export function deserializeString(data: string, start: i32 = 0, end: i32 = 0): string {
  end = end || data.length - 1;
  let result = Sink.withCapacity(end - start - 1);
  const firstChar = unsafeCharCodeAt(data, start);
  const lastChar = unsafeCharCodeAt(data, end);
  if (firstChar !== quoteCode || lastChar !== quoteCode) {
    return abort(`Expected string to start and end with ", but got ${data.slice(0, 100)} instead!`);
  }
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
        return abort(`Cannot parse "${data.slice(0, 100)}" as string. Invalid escape sequence: \\${data.charAt(i)}`);
      }
    }
  }
  if (end > last) {
    result.write(data, last, end);
  }
  return result.toString();
}