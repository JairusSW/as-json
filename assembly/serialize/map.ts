import { COLON, COMMA, BRACE_LEFT_WORD, BRACE_RIGHT } from "../custom/chars";
import { JSON } from "..";
import { Sink } from "../custom/sink";

// @ts-ignore: Decorator valid here
@inline export function serializeMap<T extends Map<any, any>>(data: T): string {
    let result = Sink.fromString(BRACE_LEFT_WORD);
    if (!data.size) return "{}";
    let keys = data.keys();
    let values = data.values();
    const end = data.size - 1;
    for (let i = 0; i < end; i++) {
        result.write(JSON.stringify(unchecked(keys[i]).toString()));
        result.writeCodePoint(COLON);
        result.write(JSON.stringify(unchecked(values[i])));
        result.writeCodePoint(COMMA);
    }
    result.write(JSON.stringify(unchecked(keys[end]).toString()));
    result.writeCodePoint(COLON);
    result.write(JSON.stringify(unchecked(values[end])));

    result.writeCodePoint(BRACE_RIGHT);
    return result.toString();
}