import { JSON } from "../..";
import { commaCode, leftBracketCode, rightBracketCode } from "../../src/chars";
import { Sink } from "../../src/sink";
import { serializeUnknown } from "../unknown";

// @ts-ignore: Decorator
@inline export function serializeUnknownArray<T extends JSON.Value[]>(data: T, out: Sink | null = null): Sink {
    if (!out) {
        if (!data.length) {
            return Sink.fromStringLiteral("[]");
        } else {
            out = Sink.fromString("[");
        }
    } else {
        out.writeCodePoint(leftBracketCode);
        if (!data.length) {
            out.writeCodePoint(rightBracketCode);
            return out;
        }
    }

    const end = data.length - 1;

    for (let i = 0; i < end; i++) {
        serializeUnknown(
            unchecked(data[i]),
            out
        );
        out.writeCodePoint(commaCode);
    }

    serializeUnknown(
        unchecked(data[end]),
        out
    );
    out.writeCodePoint(rightBracketCode);

    return out;
}