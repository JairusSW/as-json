// @ts-ignore
export class unknown {
    protected ptr: usize
    constructor() { }
    _get<T>(): T {
        if (isInteger<T>()) {
            if (isSigned<T>()) {
                if (sizeof<T>() == 1) {
                    // @ts-ignore
                    return i8(ptr)
                } else if (sizeof<T>() == 2) {
                    // @ts-ignore
                    return i16(ptr)
                } else if (sizeof<T>() == 4) {
                    // @ts-ignore
                    return i32(ptr)
                } else {
                    // @ts-ignore
                    return i64(ptr)
                }
            } else {
                if (sizeof<T>() == 1) {
                    // @ts-ignore
                    return u8(ptr)
                } else if (sizeof<T>() == 2) {
                    // @ts-ignore
                    return u16(ptr)
                } else if (sizeof<T>() == 4) {
                    // @ts-ignore
                    return u32(ptr)
                } else {
                    // @ts-ignore
                    return u64(ptr)
                }
            }
        } else if (isFloat<T>()) {
            if (sizeof<T>() == 4) {
                //@ts-ignore
                return f32(ptr)
            } else {
                //@ts-ignore
                return f64(ptr)
            }
        } else {
            return changetype<T>(this.ptr)
        }
    }
    _set<T>(data: T): void {
        if (isInteger<T>() || isFloat<T>()) {
            this.ptr = usize(data)
        } else {
            this.ptr = changetype<usize>(data)
        }
    }
}