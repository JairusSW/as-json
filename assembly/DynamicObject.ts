import { unknown } from "./unknown"

/**
 * Provides functionality common to all JavaScript objects.
 */
export class DynamicObject {
    [key: string]: any
    // Having it marked as 'any' is for intellisense only
    protected __data: Map<string, unknown> = new Map<string, unknown>()
    set(path: string, value: unknown): void {
        this.__data.set(path, value)
    }
    get<T = unknown>(path: string): T {
        let type!: T
        if (type instanceof unknown) {
            // @ts-ignore
            return this.__data.get(path)
        } else {
            // @ts-ignore
            return this.__data.get(path).get<T>()
        }
    }
    static keys(o: DynamicObject): string[] {
        return o.__data.keys()
    }
    static values(o: DynamicObject): unknown[] {
        return o.__data.values()
    }
}