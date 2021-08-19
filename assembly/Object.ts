import { unknown } from "./unknown"

/**
 * Provides functionality common to all JavaScript objects.
 */
export class Object {
    [key: string]: any
    // Having it marked as 'any' is for intellisense only
    protected __data: Map<string, unknown> = new Map<string, unknown>()
    @operator('[]')
    private __getKeyOp(key: usize): unknown {
        if (this.__data.has(changetype<string>(key))) {
            return this.__data.get(changetype<string>(key))
        } else {
            return unknown.wrap(null)
        }
    }
    @operator('[]=')
    private __setKeyOp(key: usize, value: unknown): void {
        this.__data.set(changetype<string>(key), value)
    }
    static keys(o: Object): string[] {
        return o.__data.keys()
    }
    static values(o: Object): unknown[] {
        return o.__data.values()
    }
}