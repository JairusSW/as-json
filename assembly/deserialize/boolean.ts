import { fCode, tCode } from "../src/chars";
import { unsafeCharCodeAt } from "../src/util";

// @ts-ignore: Decorator
@inline export function deserializeBoolean(data: string): boolean {
    const firstChar = unsafeCharCodeAt(data, 0);
    if (firstChar === tCode && load<u64>(changetype<usize>(data)) === 28429475166421108) return true;
    else if (firstChar === fCode && load<u64>(changetype<usize>(data), 2) === 28429466576093281) return false;
    else throw new Error(`JSON: Cannot parse "${data}" as boolean`);
}