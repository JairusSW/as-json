import { unknown } from "./unknown"

export class Object {
    [key: string]: any
    protected dataStore: Map<string, unknown> = new Map<string, unknown>()
    @operator('[]')
    private __getKeyOp(key: usize): unknown {
        if (this.dataStore.has(changetype<string>(key))) {
            return this.dataStore.get(changetype<string>(key))
        } else {
            return unknown.wrap(null)
        }
    }
    @operator('[]=')
    private __setKeyOp(key: usize, value: unknown): void {
        this.dataStore.set(changetype<string>(key), value)
    }
    static keys(obj: Object): string[] {
        return obj.dataStore.keys()
    }
    static values(obj: Object): unknown[] {
        return obj.dataStore.values()
    }
    static fromMap(map: Map<string, unknown>): Object {
        const o = new Object()
        o.dataStore = map
        return o
    }
}