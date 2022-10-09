export class Type<T> {
    // Edited by transform at compile-time
    public value: any;
    constructor(value: T) {
        this.value = value;
    }
    static from<T>(value: T): Type<T> {
        return new Type<T>(value);
    }
}