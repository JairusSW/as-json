/**
 * Central buffer namespace for managing memory operations.
 */
declare namespace bs {
  /** Current buffer pointer. */
  export let buffer: ArrayBuffer;

  /** Current offset within the buffer. */
  export let offset: usize;

  /** Proposed size of output. */
  export let stackSize: usize;

  /**
   * Ensures the buffer size is at least the proposed size.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to propose.
   */
  export function ensureSize(size: u32): void;

  /**
   * Proposes that the buffer size should be at least the given size.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to propose.
   */
  export function proposeSize(size: u32): void;

  /**
   * Increases the proposed size by nextPowerOf2(n + 64) if necessary.
   * If necessary, reallocates the buffer to the exact new size.
   * @param size - The size to grow by.
   */
  export function growSize(size: u32): void;

  /**
   * Resizes the buffer to the specified size.
   * @param newSize - The new buffer size.
   */
  export function resize(newSize: u32): void;

  /**
   * Copies the buffer's content to a new object of a specified type.
   * @returns The new object containing the buffer's content.
   */
  export function out<T>(): T;

  /**
   * Copies the buffer's content to a given destination pointer.
   * @param dst - The destination pointer.
   * @returns The destination pointer cast to the specified type.
   */
  export function outTo<T>(dst: usize): T;
}