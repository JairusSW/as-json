import {
    BACK_SLASH,
    BACKSPACE,
    CARRIAGE_RETURN,
    FORM_FEED,
    NEW_LINE,
    QUOTE,
    QUOTE_WORD,
    TAB
} from "../src/chars";
import { Sink } from "../src/sink";
import { unsafeCharCodeAt } from "../src/util";

// @ts-ignore: Decorator
@inline export function serializeString(data: string): string {
    if (data.length === 0) {
        return QUOTE_WORD + QUOTE_WORD;
    }

    let result = Sink.fromString(QUOTE_WORD, data.length);

    let last: i32 = 0;
    for (let i = 0; i < data.length; i++) {
        const char = unsafeCharCodeAt(<string>data, i);
        if (char === QUOTE || char === BACK_SLASH) {
            result.write(<string>data, last, i);
            result.writeCodePoint(BACK_SLASH);
            last = i;
        } else if (16 > char) {
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
                case NEW_LINE: {
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
        } else if (32 > char) {
            result.write(<string>data, last, i);
            last = i + 1;
            // all chars 0-31 must be encoded as a four digit unicode escape sequence
            // \u0010 to \u001f handled here
            result.write("\\u00");
            result.write(char.toString(16));
        }
    }
    result.write(<string>data, last);
    result.writeCodePoint(QUOTE);
    return result.toString();
}