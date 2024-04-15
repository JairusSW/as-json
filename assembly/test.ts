import {
    backSlashCode,
    backspaceCode,
    carriageReturnCode,
    formFeedCode,
    newLineCode,
    quoteCode,
    quoteWord,
    tabCode
} from "./src/chars";
import { unsafeCharCodeAt } from "./src/util";
import { Sink } from "./src/sink";

function serializeString(data: string, out: Sink | null = null): Sink {
    if (data.length === 0) {
        if (out) return out.write("\"\"")!;
        return Sink.fromStringLiteral("\"\"");
    }

    if (!out) out = Sink.fromString(quoteWord);

    let last: i32 = 0;
    for (let i = 0; i < data.length; i++) {
        const char = unsafeCharCodeAt(data, i);
        if (char === quoteCode || char === backSlashCode) {
            out.write(data, last, i);
            out.writeCodePoint(backSlashCode);
            last = i;
        } else if (char < 16) {
            out.write(data, last, i);
            last = i + 1;
            switch (char) {
                case backspaceCode: {
                    out.write("\\b");
                    break;
                }
                case tabCode: {
                    out.write("\\t");
                    break;
                }
                case newLineCode: {
                    out.write("\\n");
                    break;
                }
                case formFeedCode: {
                    out.write("\\f");
                    break;
                }
                case carriageReturnCode: {
                    out.write("\\r");
                    break;
                }
                default: {
                    // all chars 0-31 must be encoded as a four digit unicode escape sequence
                    // \u0000 to \u000f handled here
                    out.write("\\u000");
                    out.write(char.toString(16));
                    break;
                }
            }
        } else if (char < 32) {
            out.write(data, last, i);
            last = i + 1;
            // all chars 0-31 must be encoded as a four digit unicode escape sequence
            // \u0010 to \u001f handled here
            out.write("\\u00");
            out.write(char.toString(16));
        }
    }
    out.write(data, last);
    out.writeCodePoint(quoteCode);
    return out;
}
/*
const v = JSON.Value.from("hello world");
console.log(v.get<string>())
console.log(JSON.serialize(v));
console.log(JSON.serialize("hello world"))
console.log(JSON.parse<JSON.Value>(JSON.serialize(v)).get<string>());*/
//console.log(deserializeUnknown("true").unwrap().toString())
//console.log(deserializeString("\"hello").unwrap().toString())

let str = Sink.withCapacity(0);
console.log(serializeString("hello", str).toString());
console.log("str: " + str.toString())