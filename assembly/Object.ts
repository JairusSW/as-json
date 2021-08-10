import { Unknown } from "./Unknown"

export class Object {
    [key: string]: any
    protected dataStore: Map<string, Unknown> = new Map<string, Unknown>()/*
    constructor() { }
    setKey<T>(key: string, value: T): void {
        this.dataStore.set(changetype<usize>(key), Unknown.wrap(value))
    }
    getKey(key: string): Unknown {
        if (this.dataStore.has(changetype<usize>(key))) {
            return this.dataStore.get(changetype<usize>(key))
        } else {
            return Unknown.wrap(null)
        }
    }*/
    @operator('[]')
    private __getKeyOp(key: usize): Unknown {
        if (this.dataStore.has(changetype<string>(key))) {
            return this.dataStore.get(changetype<string>(key))
        } else {
            return Unknown.wrap(null)
        }
    }
    @operator('[]=')
    private __setKeyOp(key: usize, value: string): void {
        this.dataStore.set(changetype<string>(key), Unknown.wrap(value))
    }
    static keys(obj: Object): string[] {
        return obj.dataStore.keys()
    }
    static values(obj: Object): Unknown[] {
        return obj.dataStore.values()
    }
}