export class anyType {
    public value: usize
    public type: usize
    get<T>(): T {
      // @ts-ignore
      return changetype<T>(this.value)
    }
    set<T>(data: T): void {
      this.type = idof<T>()
      this.value = changetype<usize>(data)
    }
    is<T>(): boolean {
      return idof<T>() == this.type;
    }
  }