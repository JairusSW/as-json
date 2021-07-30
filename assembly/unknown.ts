const enum Discriminator {
    Bool,
    I8, I16, I32, I64,
    U8, U16, U32, U64,
    F32, F64,
    UnmanagedRef,
    ManagedRef
}

// @ts-ignore: decorator
@inline
function DISCRIMINATOR<T>(): Discriminator {
    if (isManaged<T>()) return Discriminator.ManagedRef + idof<T>();
    if (isReference<T>()) return Discriminator.UnmanagedRef;
    let value!: T;
    if (value instanceof bool) return Discriminator.Bool;
    if (value instanceof i8) return Discriminator.I8;
    if (value instanceof i16) return Discriminator.I16;
    if (value instanceof i32) return Discriminator.I32;
    if (value instanceof i64) return Discriminator.I64;
    if (value instanceof u8) return Discriminator.U8;
    if (value instanceof u16) return Discriminator.U16;
    if (value instanceof u32) return Discriminator.U32;
    if (value instanceof u64) return Discriminator.U64;
    if (value instanceof f32) return Discriminator.F32;
    if (value instanceof f64) return Discriminator.F64;
    return unreachable();
}

@final
// @ts-ignore
export class unknown {

    @inline static from<T>(value: T): unknown {
        // @ts-ignore
        var out = changetype<unknown>(__new(offsetof<unknown>(), idof<unknown>()));
        // @ts-ignore
        out.set<T>(value);
        // @ts-ignore
        out.type = nameof(value)
        return out;
    }

    public type: string;
    private discriminator: i32;
    private storage: u64;

    private constructor() { unreachable(); }

    @inline set<T>(value: T): void {
        this.discriminator = DISCRIMINATOR<T>();
        store<T>(changetype<usize>(this), value, offsetof<unknown>("storage"));
    }

    @inline get<T>(): T {
        //if (!this.is<T>()) throw new Error("type mismatch");
        let value = load<T>(changetype<usize>(this), offsetof<unknown>("storage"));
        if (isReference<T>() && !isNullable<T>()) {
            if (!value) throw new Error("unexpected null");
        }
        return value;
    }

    @inline is<T>(): bool {
        return this.discriminator == DISCRIMINATOR<T>();
    }

    @unsafe private __visit(cookie: u32): void {
        if (this.discriminator >= Discriminator.ManagedRef) {
            let ptr = load<usize>(changetype<usize>(this), offsetof<unknown>("storage"));
            // @ts-ignore
            if (ptr) __visit(ptr, cookie);
        }
    }
}
