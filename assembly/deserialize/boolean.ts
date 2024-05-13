import { Product, ProductValue } from "../product";
import { fCode, tCode } from "../src/chars";
import { unsafeCharCodeAt } from "../src/util";

/**
 * 
 * @param data data to parse
 * @returns 0 for false, 1 for true, -1 for error
 */
// @ts-ignore: Decorator
@inline export function deserializeBoolean(data: string): ProductValue {
    const firstChar = unsafeCharCodeAt(data, 0);
    if (firstChar === tCode && load<u64>(changetype<usize>(data)) === 28429475166421108) return Product.Ok<boolean>(true);
    else if (firstChar === fCode && load<u64>(changetype<usize>(data), 2) === 28429466576093281) return Product.Ok<boolean>(false);
    else {
        return Product.Err(`Expected to find boolean, but found ${data.slice(0, 100)} instead!`);
    }
}