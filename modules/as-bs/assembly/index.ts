import { OBJECT, TOTAL_OVERHEAD } from "rt/common";

let maxOffset: usize = __new(0, idof<ArrayBuffer>());

/**
 * Central buffer namespace for managing memory operations.
 */
export namespace bs {
  /** Current buffer pointer. */
  export let buffer: usize = maxOffset;

  /** Current offset within the buffer. */
  export let offset: usize = maxOffset;

  /** Byte length of the buffer. */
  export let byteLength: usize = 0;

  /** Proposed size of output */
  export let realSize: usize = offset;

  /**
   * Proposes that the buffer size is should be greater than or equal to the proposed size.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to propose.
   */
  // @ts-ignore: Decorator valid here
  @inline export function proposeSize(size: u32): void {
    realSize = offset + size;
    if (realSize > maxOffset) {
      byteLength += size;
      const newPtr = __renew(buffer, byteLength);
      offset = offset - buffer + newPtr;
      maxOffset = newPtr + byteLength;
      buffer = newPtr;
    }
  }

  /**
   * Increases the proposed size by nextPowerOf2(n + 8).
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to grow by.
   */
  // @ts-ignore: Decorator valid here
  @inline export function growSize(size: u32): void {
    realSize += size;
    if (realSize > maxOffset) {
      byteLength += nextPowerOf2(size + 8);
      const newPtr = __renew(buffer, byteLength);
      offset = offset - buffer + newPtr;
      maxOffset = newPtr + byteLength;
      buffer = newPtr;
    }
  }

  /**
   * Resizes the buffer to the specified size.
   * @param newSize - The new buffer size.
   */
  // @ts-ignore: Decorator valid here
  @inline export function resize(newSize: u32): void {
    const newPtr = __renew(buffer, newSize);
    byteLength = newSize;
    buffer = newPtr;
    offset = buffer + newSize;
    maxOffset = buffer + byteLength;
  }

  /**
   * Shrinks the buffer to fit the current offset.
   */
  // @ts-ignore: Decorator valid here
  @inline export function shrink(): void {
    byteLength = offset - buffer;
    buffer = __renew(buffer, byteLength);
    maxOffset = byteLength + buffer;
  }

  /**
   * Shrinks the buffer and resets the offset, returning the buffer as a specified type.
   * @returns The buffer cast to the specified type.
   */
  // @ts-ignore: Decorator valid here
  @inline export function shrinkTo<T>(): T {
    shrink();
    offset = buffer;
    return changetype<T>(buffer);
  }

  /**
   * Copies the buffer's content to a new object of a specified type.
   * @returns The new object containing the buffer's content.
   */
  // @ts-ignore: Decorator valid here
  @inline export function out<T>(): T {
    const len = offset - buffer;
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
