@json
class BaseObject {
  a: string;
  constructor(a: string) {
    this.a = a;
  }
}

@json
class DerivedObject extends BaseObject {
  b: string;
  constructor(a: string, b: string) {
    super(a);
    this.b = b;
  }
}
