import { dtoa_buffered, itoa_buffered } from "util/number";
import { OBJECT, TOTAL_OVERHEAD } from "rt/common";
@inline const MAX_LEN: usize = 65536;
const STORE: usize[] = [];
let STORE_LEN: usize = 0;
const CACHE = memory.data(i32(MAX_LEN));
// Configurable amount of referenceable strings
let POINTER = changetype<usize>(CACHE);
@inline const MAX_CACHE = CACHE + MAX_LEN;

export namespace bs {
    @inline export function write_int<T extends number>(num: T): void {
        POINTER += itoa_buffered(POINTER, num) << 1;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_int_u<T extends number>(num: T): void {
        POINTER += itoa_buffered(POINTER, num) << 1;
    }

    @inline export function write_fl<T extends number>(num: T): void {
        POINTER += dtoa_buffered(POINTER, num) << 1;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_fl_u<T extends number>(num: T): void {
        POINTER += dtoa_buffered(POINTER, num) << 1;
    }

    @inline export function write_b(buf: usize, bytes: usize = changetype<OBJECT>(buf - TOTAL_OVERHEAD).rtSize): void {
        memory.copy(POINTER, buf, bytes);
        POINTER += bytes;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_b_u(buf: usize, bytes: usize = changetype<OBJECT>(buf - TOTAL_OVERHEAD).rtSize): void {
        memory.copy(POINTER, buf, bytes);
        POINTER += bytes;
    }

    @inline export function write_s(str: string, bytes: usize = changetype<OBJECT>(changetype<usize>(str) - TOTAL_OVERHEAD).rtSize): void {
        memory.copy(POINTER, changetype<usize>(str), bytes);
        POINTER += bytes;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_s_u(str: string, bytes: usize = changetype<OBJECT>(changetype<usize>(str) - TOTAL_OVERHEAD).rtSize): void {
        memory.copy(POINTER, changetype<usize>(str), bytes);
        POINTER += bytes;
    }

    @inline export function write_s_se(str: string, start: usize, end: usize): void {
        const bytes = end - start;
        memory.copy(POINTER, changetype<usize>(str) + start, bytes);
        POINTER += bytes;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_s_se_u(str: string, start: usize, end: usize): void {
        const bytes = end - start;
        memory.copy(POINTER, changetype<usize>(str) + start, bytes);
        POINTER += bytes;
    }

    @inline export function write_16(char: i32): void {
        store<u16>(POINTER, char);
        POINTER += 2;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_16_u(char: i32): void {
        store<u16>(POINTER, char);
        //POINTER += 2;
    }

    @inline export function write_32(chars: i32): void {
        store<u32>(POINTER, chars);
        POINTER += 4;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_32_u(chars: i32): void {
        store<u32>(POINTER, chars);
        //POINTER += 4;
    }

    @inline export function write_64(chars: i64): void {
        store<u64>(POINTER, chars);
        POINTER += 8;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }

    @inline export function write_64_u(chars: i64): void {
        store<u64>(POINTER, chars);
        POINTER += 8;
    }

    @inline export function write_128(chars: v128): void {
        store<v128>(POINTER, chars);
        POINTER += 16;
        if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function write_128_u(chars: v128): void {
        store<v128>(POINTER, chars);
        //POINTER += 16;
       //if (MAX_CACHE <= POINTER) bs.shrink();
    }
    @inline export function shrink(): void {
        const len = POINTER - CACHE;
        STORE_LEN += len;
        const out = __new(
            len,
            idof<ArrayBuffer>()
        );
        memory.copy(out, CACHE, len);
        bs.reset();
        STORE.push(out);
    }
    @inline export function out<T>(): T {
        const len = POINTER - CACHE;
        let out = __new(
            len + STORE_LEN,
            idof<T>()
        );

        memory.copy(out, CACHE, len);
        if (STORE_LEN) {
            out += len;
            for (let i = 0; i < STORE.length; i++) {
                const ptr = changetype<usize>(unchecked(STORE[i]));
                const storeLen = changetype<OBJECT>(ptr - TOTAL_OVERHEAD).rtSize;
                memory.copy(out, ptr, storeLen);
                //__unpin(ptr);
                out += storeLen;
            }
            STORE_LEN = 0;
        }
        bs.reset();

        return changetype<T>(out);
    }

    @inline export function out_u<T>(): T {
        const len = POINTER - CACHE;
        const out = __new(
            len + STORE_LEN,
            idof<T>()
        );

        memory.copy(out, CACHE, len);
        bs.reset();

        return changetype<T>(out);
    }

    @inline export function _out(out: usize): void {
        memory.copy(out, CACHE, POINTER - CACHE);
    }
    @inline export function reset(): void {
        POINTER = CACHE;
    }
}