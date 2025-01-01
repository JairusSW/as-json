import { BLOCK_MAXSIZE, OBJECT, TOTAL_OVERHEAD } from "rt/common";
import { E_INVALIDLENGTH } from "util/error";

// @ts-ignore: Decorator valid here
@inline export function ensureCapacity<T>(obj: T, newSize: usize): usize {
  const ptr = changetype<usize>(obj);
  const oldCapacity = changetype<OBJECT>(ptr - TOTAL_OVERHEAD).rtSize;
  if (newSize > oldCapacity) {
    if (newSize > BLOCK_MAXSIZE) throw new RangeError(E_INVALIDLENGTH);
    const newCapacity = max(min(oldCapacity << 1, BLOCK_MAXSIZE), newSize);
    const newObj = __renew(ptr, newCapacity);
    return newObj;
  }
  return ptr;
}

// @ts-ignore: Decorator valid here
@inline export function setCapacity<T>(obj: T, oldCapacity: usize, newCapacity: usize): usize {
  const ptr = changetype<usize>(obj);
  if (newCapacity > oldCapacity) {
    if (newCapacity > BLOCK_MAXSIZE) throw new RangeError(E_INVALIDLENGTH);
    return __renew(ptr, newCapacity);
  }
  return ptr;
}
