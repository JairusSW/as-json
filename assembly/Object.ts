import { any } from "./any"

export class Object {
    [key: string]: any
    protected dataStore: Map<string, any> = new Map<string, any>()/*
    constructor() { }
    setKey<T>(key: string, value: T): void {
        this.dataStore.set(changetype<usize>(key), any.wrap(value))
    }
    getKey(key: string): any {
        if (this.dataStore.has(changetype<usize>(key))) {
            return this.dataStore.get(changetype<usize>(key))
        } else {
            return any.wrap(null)
        }
    }*/
    @operator('[]')
    private __getKeyOp(key: usize): any {
        if (this.dataStore.has(changetype<string>(key))) {
            return this.dataStore.get(changetype<string>(key))
        } else {
            return any.wrap(null)
        }
    }
    @operator('[]=')
    private __setKeyOp(key: usize, value: string): void {
        this.dataStore.set(changetype<string>(key), any.wrap(value))
    }
    static keys(obj: Object): string[] {
        return obj.dataStore.keys()
    }
    static values(obj: Object): any[] {
        return obj.dataStore.values()
    }
}