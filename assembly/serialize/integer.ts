import { Sink } from "../src/sink";

@inline export function serializeInteger<T extends number>(data: T, out: Sink | null = null): Sink {
    if (!out) out = Sink.withCapacity(0);
    return out.writeNumber(data);
}

@inline export function utoa16(data: u32): string {
    const str = changetype<string>(__new(10, idof<string>()));
    const buf = changetype<usize>(str);
    const fix4_28 = (1 << 28) / 10000;
    let tmp = data * (fix4_28 + 1) - (data / 4);

    store<u16>(buf, 48 + (tmp >> 28));
    tmp = (tmp & 0x0fffffff) * 10;
    
    store<u16>(buf, 48 + (tmp >> 28), 2);
    tmp = (tmp & 0x0fffffff) * 10;

    store<u16>(buf, 48 + (tmp >> 28), 4);
    tmp = (tmp & 0x0fffffff) * 10;

    store<u16>(buf, 48 + (tmp >> 28), 6);
    tmp = (tmp & 0x0fffffff) * 10;

    store<u16>(buf, 48 + (tmp >> 28), 8);
    return str
}

@inline function utoa32(buf: usize, data: u32): void {
    const low = data % 10000;
    const high = data / 10000;
    const fix4_28 = (1 << 28) / 10000;
    let tmp = data * (fix4_28 + 1) - (data / 4);

    store<u16>(buf, 48 + (tmp >> 28));
    tmp = (tmp & 0x0fffffff) * 10;

    store<u16>(buf, 48 + (tmp >> 28), 2);
    tmp = (tmp & 0x0fffffff) * 10;

    store<u16>(buf, 48 + (tmp >> 28), 4);
    tmp = (tmp & 0x0fffffff) * 10;

    store<u16>(buf, 48 + (tmp >> 28), 6);
    tmp = (tmp & 0x0fffffff) * 10;

    store<u16>(buf, 48 + (tmp >> 28), 8);
}