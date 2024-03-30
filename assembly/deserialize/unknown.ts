import { JSON } from "..";
import { eCode, fCode, quoteCode, tCode } from "../src/chars";
import { unsafeCharCodeAt } from "../src/util";
import { deserializeBoolean } from "./boolean";
import { deserializeNumber } from "./number";
import { deserializeString } from "./string";

/**
 * Parses unknown data into their correct parsers and returns the data.
 *
 * @param data - The string containing the unknown data.
 * @returns The parsed JSON.Value.
 */
@inline export function deserializeUnknown(data: string): JSON.Value {
    const firstChar = unsafeCharCodeAt(data, 0);
    const lastChar = unsafeCharCodeAt(data, data.length - 1);
    if (firstChar === quoteCode && lastChar === quoteCode) {
        return JSON.Value.from<string>(deserializeString(data));
    } else if (firstChar === 45 || (firstChar < 58 && firstChar > 47)) {
        return JSON.Value.from<i64>(deserializeNumber<i64>(data));
    } else if (firstChar === tCode || firstChar === fCode && lastChar === eCode) {
        return JSON.Value.from<boolean>(deserializeBoolean(data));
    }
    return unreachable();
}