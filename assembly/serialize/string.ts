import { StringSink } from "as-string-sink/assembly";
import { backSlashCode, backspaceCode, carriageReturnCode, formFeedCode, newLineCode, quoteCode, quoteWord, tabCode } from "../src/chars";
import { unsafeCharCodeAt } from "../src/util";

// @ts-ignore: Decorator
@inline export function serializeString(data: string): string {
    if (data.length === 0) {
      return quoteWord + quoteWord;
    }
  
    let result = new StringSink(quoteWord);
  
    let last: i32 = 0;
    for (let i = 0; i < data.length; i++) {
      const char = unsafeCharCodeAt(data, i);
      if (char === quoteCode || char === backSlashCode) {
        result.write(data, last, i);
        result.writeCodePoint(backSlashCode);
        last = i;
      } else if (char < 16) {
        result.write(data, last, i);
        last = i + 1;
        switch (char) {
          case backspaceCode: {
            result.write("\\b");
            break;
          }
          case tabCode: {
            result.write("\\t");
            break;
          }
          case newLineCode: {
            result.write("\\n");
            break;
          }
          case formFeedCode: {
            result.write("\\f");
            break;
          }
          case carriageReturnCode: {
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
      } else if (char < 32) {
        result.write(data, last, i);
        last = i + 1;
        // all chars 0-31 must be encoded as a four digit unicode escape sequence
        // \u0010 to \u001f handled here
        result.write("\\u00");
        result.write(char.toString(16));
      }
    }
    result.write(data, last);
    result.writeCodePoint(quoteCode);
    return result.toString();
  }