export enum unknownTypes {
    u8,
    u16,
    u32,
    u64,
    i8,
    i16,
    i32,
    i64,
    f32,
    f64,
    infinite,
    boolean,
    null,
}

// @ts-ignore
export class unknown {
    public value: usize = 0
    public type: usize = 0
    public typeName: string = ''
    public f64: f64 = 0
    public f32: f32 = 0
    set<T>(data: T): void {
        if (isBoolean<T>()) {
            this.value = data ? 1 : 0
            this.type = unknownTypes.boolean
        } else if (isFloat<T>()) {
            if (data instanceof f32) {
                // @ts-ignore
                this.f32 = data
                this.type = unknownTypes.f32
            } else {
                // @ts-ignore
                this.f64 = data
                this.type = unknownTypes.f64
            }
        } else if (isInteger<T>()) {
            if (isSigned<T>()) {
                if (data instanceof i8) {
                    this.value = usize(data)
                    this.type = unknownTypes.i8
                } else if (data instanceof i16) {
                    this.value = usize(data)
                    this.type = unknownTypes.i16
                } else if (data instanceof i32) {
                    this.value = usize(data)
                    this.type = unknownTypes.i32
                } else if (data instanceof i64) {
                    this.value = usize(data)
                    this.type = unknownTypes.i64
                }
            } else {
                if (data instanceof u8) {
                    this.value = usize(data)
                    this.type = unknownTypes.u8
                } else if (data instanceof u16) {
                    this.value = usize(data)
                    this.type = unknownTypes.u16
                } else if (data instanceof u32) {
                    this.value = usize(data)
                    this.type = unknownTypes.u32
                } else if (data instanceof u64) {
                    this.value = usize(data)
                    this.type = unknownTypes.u64
                }
            }
        } else if (data === null) {
            this.value = usize(0)
            this.type = unknownTypes.null
        } else {
            this.value = changetype<usize>(data)
            this.type = idof<T>()
        }
        this.typeName = nameof<T>()
    }
    // @ts-ignore
    get<T>(): T {
        let type!: T
        if (isBoolean<T>()) {
            // @ts-ignore
            if (this.value === 1) return true
            // @ts-ignore
            else return false
        } else if (isFloat<T>()) {
            if (type instanceof f32) {
                // @ts-ignore
                return f32(this.f32)
            } else {
                // @ts-ignore
                return f64(this.f64)
            }
        } else if (isInteger<T>()) {
            if (isSigned<T>()) {
                if (type instanceof i8) {
                    // @ts-ignore
                    return i8(this.value)
                } else if (type instanceof i16) {
                    // @ts-ignore
                    return i16(this.value)
                } else if (type instanceof i32) {
                    // @ts-ignore
                    return i32(this.value)
                } else if (type instanceof i64) {
                    // @ts-ignore
                    return i64(this.value)
                }
            } else {
                if (type instanceof u8) {
                    // @ts-ignore
                    return u8(this.value)
                } else if (type instanceof u16) {
                    // @ts-ignore
                    return u16(this.value)
                } else if (type instanceof u32) {
                    // @ts-ignore
                    return u32(this.value)
                } else if (type instanceof u64) {
                    // @ts-ignore
                    return u64(this.value)
                }
            }
        } else if (isNullable<T>()) {
            // @ts-ignore
            if (this.value === 0) return null
        } else {
            return changetype<T>(this.value)
        }
    }
    static wrap<T>(data: T): unknown {
        const unk = new unknown()
        unk.set(data)
        return unk
    }
}