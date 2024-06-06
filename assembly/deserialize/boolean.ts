import { fCode, tCode } from "../src/chars";
import { unsafeCharCodeAt } from "../src/util";

/**
 * Deserialize a string to type boolean
 * @param data data to parse
 * @returns boolean
 */
// @ts-ignore: Decorator
@inline export function deserializeBoolean(data: string, start: i32 = 0, end: i32 = 0): boolean {
    if (!end) end = data.length;
    const len = end - start;
    const ptr = changetype<usize>(data) + <usize>(start << 1);
    const firstChar = unsafeCharCodeAt(data, start);
    if (len === 4 && firstChar === tCode && load<u64>(ptr) === 28429475166421108) return true;
    else if (len === 5 && firstChar === fCode && load<u64>(ptr, 2) === 28429466576093281) return false;
    return false//ERROR(`Expected to find boolean, but found "${data.slice(0, 100)}" instead!`);
}