import { COLON, COMMA, BRACE_LEFT_WORD, BRACE_RIGHT } from "../src/chars";
import { JSON } from "..";
import { Sink } from "../src/sink";
import { serializeString } from "./string";

// @ts-ignore
@inline export function serializeMap<T extends Map<any, any>>(data: T): string {
    let result = Sink.fromString(BRACE_LEFT_WORD);
    let keys = data.keys();
    let values = data.values();
    const end = data.size - 1;
    for (let i = 0; i < end; i++) {
        result.write(serializeString(unchecked(keys[i]).toString()));
        result.writeCodePoint(COLON);
        result.write(JSON.stringify(unchecked(values[i])));
        result.writeCodePoint(COMMA);
    }
    result.write(serializeString(unchecked(keys[end]).toString()));
    result.writeCodePoint(COLON);
    result.write(JSON.stringify(unchecked(values[end])));

    result.writeCodePoint(BRACE_RIGHT);
    return result.toString();
}