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

  /**
   * Sets the buffer to a given data object and initializes related properties.
   * @param data - The data object to set as the buffer.
   */
  // @ts-ignore: Decorator valid here
  @inline export function setBuffer<T>(data: T): void {
    buffer = changetype<usize>(data);
    offset = changetype<usize>(data);
    byteLength = bytes(data);
    maxOffset = byteLength + buffer;
  }

  /**
   * Ensures the buffer has sufficient capacity for a given size.
   * If necessary, reallocates the buffer to accommodate the new size.
   * @param size - The size to ensure capacity for.
   */
  // @ts-ignore: Decorator valid here
  @inline export function ensureCapacity(size: u32): void {
    const newSize = offset + size;
    if (newSize > maxOffset) {
      const newPtr = __renew(buffer, (byteLength = nextPowerOf2(newSize - buffer)));
      offset = offset - buffer + newPtr;
      maxOffset = newPtr + byteLength;
      buffer = newPtr;
    }
  }

  /**
   * Ensures the buffer size is sufficient for a given size.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to ensure.
   */
  // @ts-ignore: Decorator valid here
  @inline export function ensureSize(size: u32): void {
    const newSize = offset + size;
    if (newSize > maxOffset) {
      const newPtr = __renew(buffer, (byteLength = newSize - buffer));
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
   * Gets the remaining space available in the buffer.
   * @returns The number of bytes remaining.
   */
  // @ts-ignore: Decorator valid here
  @inline export function getRemainingSize(): usize {
    return maxOffset - offset;
  }

  /**
   * Clears data from a specified offset onward.
   * @param fromOffset - The starting offset to clear from.
   */
  // @ts-ignore: Decorator valid here
  @inline export function clearFromOffset(fromOffset: usize): void {
    if (fromOffset < offset) {
      memory.fill(fromOffset, 0, offset - fromOffset);
      offset = fromOffset;
    }
  }

  /**
   * Shrinks the buffer to fit the current offset.
   */
  // @ts-ignore: Decorator valid here
  @inline export function shrink(): void {
    if (offset > maxOffset) {
      byteLength = offset - buffer;
      buffer = __renew(buffer, byteLength);
      maxOffset = byteLength + buffer;
    }
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
   * Optionally shrinks the buffer after copying.
   * @param s - Whether to shrink the buffer after copying.
   * @returns The new object containing the buffer's content.
   */
  // @ts-ignore: Decorator valid here
  @inline export function out<T>(s: bool = false): T {
    const len = offset - buffer;
    const _out = __new(len, idof<T>());
    memory.copy(_out, buffer, len);
    if (s) shrink();
    offset = buffer;
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
  @inline export function outTo<T>(dst: usize, s: bool = false): T {
    const len = offset - buffer;
    if (len != changetype<OBJECT>(dst - TOTAL_OVERHEAD).rtSize) __renew(len, idof<T>());
    memory.copy(dst, buffer, len);
    if (s) shrink();
    offset = buffer;
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
    ERROR("Cannot convert type " + nameof<T>() + " to bytes!");
  }
}