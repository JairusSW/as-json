import { Sink } from "../src/sink";

@inline export function serializeInteger<T extends number>(data: T, out: Sink | null = null): Sink {
    if (!out) out = Sink.withCapacity(10);
    return utoa32(data, out);
}

@inline export function utoa32<T extends number>(data: T, out: Sink): Sink {
    let buf = changetype<usize>(out.buffer) + out.offset;
    const fix4_28 = (1 << 28) / 10000;

    const low = data % 10000;
    const high = data / 10000;

    let tmpLow = low * (fix4_28 + 1) - (low >> 2);
    let tmpHigh = high * (fix4_28 + 1) - (high >> 2);

    let fnd: bool = false;

    {
        const v = tmpHigh >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v);
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v);
            tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpHigh >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 2);
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 2);
            tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpHigh >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 4);
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 4);
            tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpHigh >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 6);
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 6);
            tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpHigh >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 8);
                tmpHigh = (tmpHigh & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 8);
            tmpHigh = (tmpHigh & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpLow >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpLow = (tmpLow & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 10);
                tmpLow = (tmpLow & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 10);
            tmpLow = (tmpLow & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpLow >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpLow = (tmpLow & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 12);
                tmpLow = (tmpLow & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 12);
            tmpLow = (tmpLow & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpLow >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpLow = (tmpLow & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 14);
                tmpLow = (tmpLow & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 14);
            tmpLow = (tmpLow & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    {
        const v = tmpLow >> 28;
        if (!fnd) {
            if (v == 0) {
                buf -= 2;
                tmpLow = (tmpLow & 0x0fffffff) * 10;
            } else {
                fnd = true;
                store<u16>(buf, 48 + v, 16);
                tmpLow = (tmpLow & 0x0fffffff) * 10;
                out.offset += 2;
            }
        } else {
            store<u16>(buf, 48 + v, 16);
            tmpLow = (tmpLow & 0x0fffffff) * 10;
            out.offset += 2;
        }
    }
    store<u16>(buf, 48 + (tmpLow >> 28), 18);
    out.offset += 2;
    return out;
}