import { fCode, tCode } from "../../src/chars";
import { unsafeCharCodeAt } from "../../src/util";

/**
 * Deserialize a string to type array
 * @param data data to parse
 * @returns boolean
 */
// @ts-ignore: Decorator
@inline export function deserializeArray<T extends any[]>(data: string, start: i32 = 0, end = data.length): T {
    if (start - end < 3) return instantiate<T>();
    
}