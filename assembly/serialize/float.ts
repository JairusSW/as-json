import { Sink } from "../src/sink";

@inline export function serializeFloat<T extends number>(data: T, out: Sink | null = null): Sink {
    if (!out) out = Sink.withCapacity(0);
    return out.writeNumber(data);
}