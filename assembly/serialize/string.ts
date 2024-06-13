import { backSlashCode, backspaceCode as BACKSPACE, carriageReturnCode as CARRIAGE_RETURN, formFeedCode as FORM_FEED, newLineCode as NEWLINE, quoteCode, quoteWord, tabCode as TAB } from "../src/chars";
import { Sink } from "../src/sink";
import { unsafeCharCodeAt } from "../src/util";

// @ts-ignore: Decorator
@inline export function serializeString(data: string): string {
    if (data.length === 0) {
        return quoteWord + quoteWord;
    }

    let result = Sink.fromString(quoteWord, data.length);

    let last: i32 = 0;
    for (let i = 0; i < data.length; i++) {
        const char = unsafeCharCodeAt(<string>data, i);
        if (char === quoteCode || char === backSlashCode) {
            result.write(<string>data, last, i);
            result.writeCodePoint(backSlashCode);
            last = i;
        } else if (char < 16) {
            result.write(<string>data, last, i);
            last = i + 1;
            switch (char) {
                case BACKSPACE: {
                    result.write("\\b");
                    break;
                }
                case TAB: {
                    result.write("\\t");
                    break;
                }
                case NEWLINE: {
                    result.write("\\n");
                    break;
                }
                case FORM_FEED: {
                    result.write("\\f");
                    break;
                }
                case CARRIAGE_RETURN: {
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
            result.write(<string>data, last, i);
            last = i + 1;
            // all chars 0-31 must be encoded as a four digit unicode escape sequence
            // \u0010 to \u001f handled here
            result.write("\\u00");
            result.write(char.toString(16));
        }
    }
    result.write(<string>data, last);
    result.writeCodePoint(quoteCode);
    return result.toString();
}