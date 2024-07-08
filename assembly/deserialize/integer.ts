import { snip_fast } from "../custom/util";

// @ts-ignore: Decorator valid here
@inline export function deserializeInteger<T>(data: string): T {
    // @ts-ignore
    return snip_fast<T>(data);
}