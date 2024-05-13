import { Variant } from "as-variant/assembly";

@global let __PRODUCT_INSTANCE = changetype<ProductValue>(__new(offsetof<ProductValue>(), idof<ProductValue>()));

export namespace Product {
    // @ts-ignore: Decorator
    @inline export function Ok<O>(ok: O): ProductValue {
        __PRODUCT_INSTANCE.ok(ok);
        return __PRODUCT_INSTANCE;
    }
    // @ts-ignore: Decorator
    @inline export function Err(err: string): ProductValue {
        __PRODUCT_INSTANCE.err(err);
        return __PRODUCT_INSTANCE;
    }
    // @ts-ignore: Decorator
    @inline export function Init(): ProductValue {
        return __PRODUCT_INSTANCE;
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
        throw new Error(message + ": " + this._err!);
    }
}