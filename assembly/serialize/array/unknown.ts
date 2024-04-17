import { JSON } from "../..";
import { commaCode, rightBracketCode } from "../../src/chars";
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