import { JSON } from "..";
import { Result } from "as-container";
import { fCode, quoteCode, tCode } from "../src/chars";
import { unsafeCharCodeAt } from "../src/util";
import { deserializeNumber } from "./number";
import { deserializeString } from "./string";

/**
 * Parses unknown data into their correct parsers and returns the data.
 *
 * @param data - The string containing the unknown data.
 * @returns The parsed JSON.Value.
 */
@inline export function deserializeUnknown(data: string): Result<JSON.Value, string> {
    const firstChar = unsafeCharCodeAt(data, 0);
    const lastChar = unsafeCharCodeAt(data, data.length - 1);
    if (firstChar === quoteCode && lastChar === quoteCode) {
        return Result.Ok<JSON.Value, string>(JSON.Value.from<string>(deserializeString(data)));
    } else if (firstChar === 45 || (firstChar < 58 && firstChar > 47)) {
        return Result.Ok<JSON.Value, string>(JSON.Value.from<i64>(deserializeNumber<i64>(data)));
    } else if (
        firstChar === tCode
        && load<u64>(changetype<usize>(data)) === 28429475166421108 // "true"
    ) {
        return Result.Ok<JSON.Value, string>(JSON.Value.from<boolean>(true));
    } else if (
        firstChar === fCode
        && load<u64>(changetype<usize>(data), 2) === 28429466576093281 // "alse"
    ) {
        return Result.Ok<JSON.Value, string>(JSON.Value.from<boolean>(false));
    }
    return Result.Err<JSON.Value, string>("Could not deserialize " + (data.length > 150 ? data.slice(0, 150) + "..." : data) + " as a valid JSON value!");
}