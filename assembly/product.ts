import { Variant } from "as-variant/assembly";

@global let __PRODUCT_INSTANCE = changetype<ProductValue>(__new(offsetof<ProductValue>(), idof<ProductValue>()));
@global let __PRODUCT_SAFE: boolean = false;
@global let __PRODUCT_ERR: string = "";
@global let __PRODUCT_OK: u64 = 0;

@unmanaged export class Product {
    constructor() { unreachable(); }
    // @ts-ignore: Decorator
    @inline static Ok<O>(ok: O): ProductValue {
        __PRODUCT_SAFE = true;
        return __PRODUCT_INSTANCE;
    }
    // @ts-ignore: Decorator
    @inline static Err(err: string): ProductValue {
        __PRODUCT_SAFE = false;
        __PRODUCT_ERR = err;
        return __PRODUCT_INSTANCE;
    }
    // @ts-ignore: Decorator
    @inline static Init(): ProductValue {
        return __PRODUCT_INSTANCE;
    }
    // @ts-ignore: Decorator
    @inline static Wrap<T>(x: T): void {

    }
    // @ts-ignore: Decorator
    @inline static catch(catchFn: ((err: string) => void)): void {
        // nop
    }
    
}

export class ProductValue {
    public _ok: Variant = changetype<Variant>(__new(offsetof<Variant>(), idof<Variant>()));
    public _err: string | null = null;
    public safe: boolean = false;
    constructor() { unreachable(); }
    @inline private ok<O>(ok: O): void {
        this.safe = true;
        this._ok.set<O>(ok);
    }
    @inline private err(err: string): void {
        this.safe = false;
        this._err = err;
    }
    @inline unwrap<O>(): O {
        return this.expect<O>("Product: Unwrap Ok");
    }
    @inline unwrapErr(): string {
        return this.expect<O>("Product: Unwrap Err");
    }
    @inline unwrapUnsafe<O>(): O {
        return this._ok.get<O>();
    }
    @inline expect<O>(message: string): O {
        if (this.safe) return this._ok.get<O>();
        else assert(false, message + ": " + this._err!);
        return this._ok.get<O>();
    }
}