import { snip_fast } from "../src/util";

// @ts-ignore: Decorator
@inline export function deserializeInteger<T>(data: string): T {
    // @ts-ignore
    return snip_fast<T>(data);
}