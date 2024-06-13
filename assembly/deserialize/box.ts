import { JSON } from "../src/json";

// @ts-ignore: Decorator
@inline export function deserializeBox<T extends Box<any>>(data: string): T {
    const instance = changetype<nonnull<T>>(__new(offsetof<nonnull<T>>(), idof<nonnull<T>>()))// as Box<usize>;
    const val = instance._val;
    instance._val = parseDirectInference(val, data);
    // @ts-ignore
    return changetype<T>(instance);
}

@inline function parseDirectInference<T>(type: T, data: string, initializeDefaultValues: boolean = false): T {
    return JSON.parse<T>(data, initializeDefaultValues)
}