import { fCode, tCode } from "../src/chars";
import { unsafeCharCodeAt } from "../src/util";

/**
 * Deserialize a string to type boolean
 * @param data data to parse
 * @returns boolean
 */
// @ts-ignore: Decorator
@inline export function deserializeBoolean(data: string): boolean {
    const firstChar = unsafeCharCodeAt(data, 0);
    if (data.length === 4 && firstChar === tCode && load<u64>(changetype<usize>(data)) === 28429475166421108) return true;
    else if (data.length === 5 && firstChar === fCode && load<u64>(changetype<usize>(data), 2) === 28429466576093281) return false;
    return false//ERROR(`Expected to find boolean, but found "${data.slice(0, 100)}" instead!`);
}