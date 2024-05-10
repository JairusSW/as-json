import { JSON } from "..";
import { colonCode, commaCode, leftBraceCode, quoteCode, rightBraceCode } from "../src/chars";
import { Sink } from "../src/sink";
import { serializeUnknown } from "./unknown";

@inline export function serializeMap<T extends Map<string, JSON.Value>>(data: T, out: Sink | null = null): Sink {
    if (!out) out = Sink.withCapacity(0);
    out.writeCodePoint(leftBraceCode);
    const keys = data.keys();
    const values = data.values();
    const end = keys.length - 1;
    for (let i = 0; i < end; i++) {
        serializeKV(
            unchecked(keys[i]),
            unchecked(values[i]),
            out
        );
        out.writeCodePoint(commaCode);
    }
    
    serializeKV(
        unchecked(keys[end]),
        unchecked(values[end]),
        out
    );

    out.writeCodePoint(rightBraceCode);

    return out;
}

@inline export function serializeKV(key: string, value: JSON.Value, out: Sink): Sink {
    out.writeCodePoint(quoteCode);
    out.write(key);
    out.writeCodePoint(quoteCode);
    out.writeCodePoint(colonCode);
    serializeUnknown(value, out);
    return out;
}