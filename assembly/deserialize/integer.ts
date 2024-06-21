import { snip_fast } from "../util";

// @ts-ignore: Decorator
export function deserializeInteger<T>(data: string): T {
    // @ts-ignore
    return snip_fast<T>(data);
}