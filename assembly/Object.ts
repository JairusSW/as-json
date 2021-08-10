import { unknown } from "./unknown"

export class Object {
    [key: string]: unknown
    protected dataStore: Map<string, unknown> = new Map<string, unknown>()/*
    constructor() { }
    setKey<T>(key: string, value: T): void {
        this.dataStore.set(changetype<usize>(key), unknown.wrap(value))
    }
    getKey(key: string): unknown {
        if (this.dataStore.has(changetype<usize>(key))) {
            return this.dataStore.get(changetype<usize>(key))
        } else {
            return unknown.wrap(null)
        }
    }*/
    @operator('[]')
    private __getKeyOp(key: usize): unknown {
        if (this.dataStore.has(changetype<string>(key))) {
            return this.dataStore.get(changetype<string>(key))
        } else {
            return unknown.wrap(null)
        }
    }
    @operator('[]=')
    private __setKeyOp(key: usize, value: string): void {
        this.dataStore.set(changetype<string>(key), unknown.wrap(value))
    }
    static keys(obj: Object): string[] {
        return obj.dataStore.keys()
    }
    static values(obj: Object): unknown[] {
        return obj.dataStore.values()
    }
}