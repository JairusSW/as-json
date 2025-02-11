import { OBJECT, TOTAL_OVERHEAD } from "rt/common";

/**
 * Central buffer namespace for managing memory operations.
 */
export namespace bs {
  /** Current buffer pointer. */ // @ts-ignore
  export let buffer: usize = __new(32, idof<ArrayBuffer>());

  /** Current offset within the buffer. */
  export let offset: usize = buffer;

  /** Byte length of the buffer. */
  let bufferEnd: usize = buffer + 32;

  /** Proposed size of output */
  export let realSize: usize = buffer;

  /**
   * Byte length of the buffer
   * @returns usize
   */
  // @ts-ignore: decorator
  @inline export function byteLength(): usize {
    return bufferEnd - buffer;
  }
  /**
   * Proposes that the buffer size is should be greater than or equal to the proposed size.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to propose.
   */
  // @ts-ignore: decorator
  @inline export function ensureSize(size: u32): void {
    let grew = ""
    if (offset + size > bufferEnd) {
      bufferEnd += nextPowerOf2(size + 32);
      // @ts-ignore: exists
      const newPtr = __renew(buffer, bufferEnd - buffer);
      // I don't know if this is even needed. I'll need to take a look at the runtime
      // offset = offset - buffer + newPtr;
      // buffer = newPtr;
      grew = "+";
    }
    console.log("Ensure   " + (realSize - buffer).toString() + "  " + size.toString() + " " + grew);
  }
  /**
   * Proposes that the buffer size is should be greater than or equal to the proposed size.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to propose.
   */
  // @ts-ignore: decorator
  @inline export function proposeSize(size: u32): void {
    let grew = ""
    realSize = offset + size;
    if (realSize > bufferEnd) {
      bufferEnd += nextPowerOf2(size);
      // @ts-ignore: exists
      const newPtr = __renew(buffer, bufferEnd - buffer);
      // I don't know if this is even needed. I'll need to take a look at the runtime
      // offset = offset - buffer + newPtr;
      // buffer = newPtr;
      grew = "+";
    }
    console.log("Propose  " + (realSize - buffer).toString() + "  " + size.toString() + " " + grew);
  }

  /**
   * Increases the proposed size by nextPowerOf2(n + 8) if necessary.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to grow by.
   */
  // @ts-ignore: decorator
  @inline export function growSize(size: u32): void {
    let grew = ""
    if ((realSize += size) > bufferEnd) {
      bufferEnd += nextPowerOf2(size + 32);
      // @ts-ignore
      const newPtr = __renew(buffer, bufferEnd);
      // offset = offset - buffer + newPtr;
      // buffer = newPtr;
      grew = "+";
    }
    console.log("Grow     " + (realSize - buffer).toString() + "  " + size.toString() + " " + grew);
  }

  /**
   * Resizes the buffer to the specified size.
   * @param newSize - The new buffer size.
   */
  // @ts-ignore: Decorator valid here
  @inline export function resize(newSize: u32): void {
    // @ts-ignore: exists
    const newPtr = __renew(buffer, newSize);
    bufferEnd = newSize;
    buffer = newPtr;
    offset = newPtr + newSize;
    realSize = newPtr;
  }

  /**
   * Copies the buffer's content to a new object of a specified type.
   * @returns The new object containing the buffer's content.
   */
  // @ts-ignore: Decorator valid here
  @inline export function out<T>(): T {
    const len = offset - buffer;
    // @ts-ignore: exists
    const _out = __new(len, idof<T>());
    memory.copy(_out, buffer, len);

    offset = buffer;
    realSize = buffer;
    return changetype<T>(_out);
  }

  /**
   * Copies the buffer's content to a given destination pointer.
   * Optionally shrinks the buffer after copying.
   * @param dst - The destination pointer.
   * @param s - Whether to shrink the buffer after copying.
   * @returns The destination pointer cast to the specified type.
   */
  // @ts-ignore: Decorator valid here
  @inline export function outTo<T>(dst: usize): T {
    const len = offset - buffer;
    // @ts-ignore: exists
    if (len != changetype<OBJECT>(dst - TOTAL_OVERHEAD).rtSize) __renew(len, idof<T>());
    memory.copy(dst, buffer, len);

    offset = buffer;
    realSize = buffer;
    return changetype<T>(dst);
  }
}

// @ts-ignore: Decorator valid here
@inline function nextPowerOf2(n: u32): u32 {
  return 1 << (32 - clz(n - 1));
}

// @ts-ignore: Decorator valid here
@inline function bytes<T>(o: T): i32 {
  if (isInteger<T>() || isFloat<T>()) {
    return sizeof<T>();
  } else if (isManaged<T>() || isReference<T>()) {
    return changetype<OBJECT>(changetype<usize>(o) - TOTAL_OVERHEAD).rtSize;
  } else {
    throw new Error("Cannot convert type " + nameof<T>() + " to bytes!");
  }
}
