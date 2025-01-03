import { bytes } from "../util/bytes";
import { nextPowerOf2 } from "../util/nextPowerOf2";

let maxOffset: usize = __new(0, idof<ArrayBuffer>());

/**
 * This serves as the central buffer
 */
export namespace bs {
  export let buffer: usize = maxOffset;
  export let offset: usize = maxOffset;
  export let byteLength: usize = 0;

  // @ts-ignore
  @inline export function setBuffer<T>(data: T): void {
    buffer = changetype<usize>(data);
    offset = changetype<usize>(data);
    byteLength = bytes(data);
    maxOffset = byteLength + buffer;
  }

  // @ts-ignore
  @inline export function ensureCapacity(size: u32): void {
    const newSize = offset + size;
    if (newSize > maxOffset) {
      const newPtr = __renew(buffer, (byteLength = nextPowerOf2(newSize - buffer)));
      offset = offset - buffer + newPtr;
      maxOffset = newPtr + byteLength;
      buffer = newPtr;
    }
  }

  // @ts-ignore
  @inline export function ensureSize(size: u32): void {
    console.log("Alloc: " + size.toString())
    const newSize = offset + size;
    if (newSize > maxOffset) {
      const newPtr = __renew(buffer, (byteLength = newSize - buffer));
      offset = offset - buffer + newPtr;
      maxOffset = newPtr + byteLength;
      buffer = newPtr;
    }
  }

  // @ts-ignore
  @inline export function shrink(): void {
    byteLength = offset - buffer;
    buffer = __renew(buffer, byteLength);
    maxOffset = byteLength + buffer;
  }

  // @ts-ignore
  @inline export function shrinkTo<T>(): T {
    shrink();
    offset = buffer;
    return changetype<T>(buffer);
  }

  // @ts-ignore
  @inline export function out<T>(): T {
    const len = offset - buffer;
    const _out = __new(len, idof<T>());
    memory.copy(_out, buffer, len);
    // shrink();
    offset = buffer;
    return changetype<T>(_out);
  }
}
