import { Unknown } from "./Unknown"

/**
 * Provides functionality common to all JavaScript objects.
 */
export class DynamicObject {
    [key: string]: any
    // Having it marked as 'any' is for intellisense only
    protected __data: Map<string, Unknown> = new Map<string, Unknown>()
    set(path: string, value: Unknown): void {
        this.__data.set(path, value)
    }
    get<T = Unknown>(path: string): T {
        let type!: T
        if (type instanceof Unknown) {
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
    static values(o: DynamicObject): Unknown[] {
        return o.__data.values()
    }
}