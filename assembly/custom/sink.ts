import { itoa_buffered, dtoa_buffered } from "util/number";

const MIN_BUFFER_LEN = 32;
const MIN_BUFFER_SIZE: u32 = MIN_BUFFER_LEN << 1;

const NEW_LINE_CHAR: u16 = 0x0a; // \n

// @ts-ignore: decorator
function nextPowerOf2(n: u32): u32 {
  return 1 << (32 - clz(n - 1));
}

export class Sink {
  public buffer!: ArrayBuffer;
  public offset: u32 = 0;

  static withCapacity(capacity: i32): Sink {
    const sink = new Sink();
    sink.buffer = changetype<ArrayBuffer>(
      __new(
        max<u32>(MIN_BUFFER_SIZE, (<u32>capacity) << 1),
        idof<ArrayBuffer>(),
      ),
    );
    return sink;
  }

  static fromString(
    initial: string = "",
    capacity: i32 = MIN_BUFFER_LEN,
  ): Sink {
    const sink = new Sink();
    const size = (<u32>initial.length) << 1;
    sink.buffer = changetype<ArrayBuffer>(
      __new(
        max<u32>(size, max<u32>(MIN_BUFFER_SIZE, (<u32>capacity) << 1)),
        idof<ArrayBuffer>(),
      ),
    );
    if (size) {
      memory.copy(
        changetype<usize>(sink.buffer),
        changetype<usize>(initial),
        size,
      );
      sink.offset += size;
    }
    return sink;
  }

  static fromStringLiteral(initial: string = ""): Sink {
    const sink = new Sink();
    const size = (<u32>initial.length) << 1;
    sink.buffer = changetype<ArrayBuffer>(__new(size, idof<ArrayBuffer>()));
    if (size) {
      memory.copy(
        changetype<usize>(sink.buffer),
        changetype<usize>(initial),
        size,
      );
      sink.offset += size;
    }
    return sink;
  }

  static fromBuffer(
    initial: ArrayBuffer,
    capacity: i32 = MIN_BUFFER_LEN,
  ): Sink {
    const sink = new Sink();
    const size = <u32>initial.byteLength;
    sink.buffer = changetype<ArrayBuffer>(
      __new(
        max<u32>(size, max<u32>(MIN_BUFFER_SIZE, (<u32>capacity) << 1)),
        idof<ArrayBuffer>(),
      ),
    );
    if (size) {
      memory.copy(
        changetype<usize>(sink.buffer),
        changetype<usize>(initial),
        size,
      );
      sink.offset = size;
    }
    return sink;
  }

  constructor() {}

  get length(): i32 {
    return this.offset >> 1;
  }

  get capacity(): i32 {
    return this.buffer.byteLength >>> 1;
  }
  reset(): void {
    this.offset = 0;
  }
  write(src: string, start: i32 = 0, end: i32 = i32.MAX_VALUE): Sink | null {
    let len = src.length as u32;

    if (start != 0 || end != i32.MAX_VALUE) {
      let from: i32;
      from = min<i32>(max(start, 0), len);
      end = min<i32>(max(end, 0), len);
      start = min<i32>(from, end);
      end = max<i32>(from, end);
      len = end - start;
    }

    if (!len) return null;

    let size = len << 1;
    this.ensureCapacity(size);
    let offset = this.offset;

    memory.copy(
      changetype<usize>(this.buffer) + offset,
      changetype<usize>(src) + ((<usize>start) << 1),
      size,
    );
    this.offset = offset + size;
    return this;
  }

  writeLn(src: string = "", start: i32 = 0, end: i32 = i32.MAX_VALUE): Sink {
    let len = src.length as u32;
    if (start != 0 || end != i32.MAX_VALUE) {
      let from: i32;
      from = min<i32>(max(start, 0), len);
      end = min<i32>(max(end, 0), len);
      start = min<i32>(from, end);
      end = max<i32>(from, end);
      len = end - start;
    }

    let size = len << 1;
    this.ensureCapacity(size + 2);
    let offset = this.offset;
    let dest = changetype<usize>(this.buffer) + offset;
    if (size)
      memory.copy(dest, changetype<usize>(src) + ((<usize>start) << 1), size);
    store<u16>(dest + size, NEW_LINE_CHAR);
    this.offset = offset + (size + 2);
    return this;
  }

  writeCodePoint(code: i32): Sink {
    let hasSur = <u32>code > 0xffff;
    this.ensureCapacity(2 << i32(hasSur));

    let offset = this.offset;
    let dest = changetype<usize>(this.buffer) + offset;

    if (!hasSur) {
      store<u16>(dest, <u16>code);
      this.offset = offset + 2;
    } else {
      assert(<u32>code <= 0x10ffff);
      code -= 0x10000;
      let hi = (code & 0x03ff) | 0xdc00;
      let lo = (code >>> 10) | 0xd800;
      store<u32>(dest, lo | (hi << 16));
      this.offset = offset + 4;
    }
    return this;
  }

  writeCodePoint16(code: i32): Sink {
    this.ensureCapacity(2);

    let offset = this.offset;
    let dest = changetype<usize>(this.buffer) + offset;

    store<u16>(dest, <u16>code);
    this.offset = offset + 2;

    return this;
  }

  writeCodePointUnsafe(code: i32): Sink {
    this.ensureCapacity(2);

    let offset = this.offset;
    let dest = changetype<usize>(this.buffer) + offset;

    code -= 0x10000;
    let hi = (code & 0x03ff) | 0xdc00;
    let lo = (code >>> 10) | 0xd800;
    store<u32>(dest, lo | (hi << 16));
    this.offset = offset + 4;
    return this;
  }

  writeNumber<T extends number>(value: T): Sink {
    let offset = this.offset;
    if (isInteger<T>()) {
      let maxCapacity = 0;
      // this also include size for sign
      if (sizeof<T>() == 1) {
        maxCapacity = 4 << 1;
      } else if (sizeof<T>() == 2) {
        maxCapacity = 6 << 1;
      } else if (sizeof<T>() == 4) {
        maxCapacity = 11 << 1;
      } else if (sizeof<T>() == 8) {
        maxCapacity = 21 << 1;
      }
      this.ensureCapacity(maxCapacity);
      offset +=
        itoa_buffered(changetype<usize>(this.buffer) + offset, value) << 1;
    } else {
      this.ensureCapacity(32 << 1);
      offset +=
        dtoa_buffered(changetype<usize>(this.buffer) + offset, value) << 1;
    }
    this.offset = offset;
    return this;
  }
  writeNumberUnsafe<T extends number>(value: T): Sink {
    let offset = this.offset;
    if (isInteger<T>()) {
      offset +=
        itoa_buffered(changetype<usize>(this.buffer) + offset, value) << 1;
    } else {
      offset +=
        dtoa_buffered(changetype<usize>(this.buffer) + offset, value) << 1;
    }
    this.offset = offset;
    return this;
  }
  writeIntegerUnsafe<T extends number>(value: T): Sink {
    let offset = this.offset;
    if (isInteger<T>()) {
      offset +=
        itoa_buffered(changetype<usize>(this.buffer) + offset, value) << 1;
    } else {
      offset +=
        dtoa_buffered(changetype<usize>(this.buffer) + offset, value) << 1;
    }
    this.offset = offset;
    return this;
  }

  reserve(capacity: i32, clear: bool = false): void {
    if (clear) this.offset = 0;
    this.buffer = changetype<ArrayBuffer>(
      __renew(
        changetype<usize>(this.buffer),
        max<u32>(this.offset, max<u32>(MIN_BUFFER_SIZE, (<u32>capacity) << 1)),
      ),
    );
  }

  shrink(): void {
    this.buffer = changetype<ArrayBuffer>(
      __renew(
        changetype<usize>(this.buffer),
        max<u32>(this.offset, MIN_BUFFER_SIZE),
      ),
    );
  }

  clear(): void {
    this.reserve(0, true);
  }

  toString(): string {
    let size = this.offset;
    if (!size) return "";
    let out = changetype<string>(__new(size, idof<string>()));
    memory.copy(changetype<usize>(out), changetype<usize>(this.buffer), size);
    return out;
  }

  ensureCapacity(deltaBytes: u32): void {
    let buffer = this.buffer;
    let newSize = this.offset + deltaBytes;
    if (newSize > <u32>buffer.byteLength) {
      this.buffer = changetype<ArrayBuffer>(
        __renew(changetype<usize>(buffer), nextPowerOf2(newSize)),
      );
    }
  }
}
