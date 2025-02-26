import { JSON } from "..";
import { describe, expect } from "../../modules/test/assembly";
import { bytes } from "../util";

@json
class Point {
  x: f64 = 0.0;
  y: f64 = 0.0;
  constructor(x: f64, y: f64) {
    this.x = x;
    this.y = y;
  }
  @serializer
  serializer(self: Point): string {
    return `(${self.x},${self.y})`;
  }
  @deserializer
  deserializer(data: string): Point {
    const dataSize = bytes(data);
    if (dataSize <= 2) throw new Error("Could not deserialize provided data as type Point");

    const c = data.indexOf(",");
    const x = data.slice(1, c);
    const y = data.slice(c + 1, data.length - 1);

    return new Point(
      f64.parse(x),
      f64.parse(y)
    );
  }
}


describe("Should serialize using custom serializers", () => {
  expect(JSON.stringify<Point>(new Point(1,2))).toBe("(1.0,2.0)");
});

describe("Should deserialize using custom deserializers", () => {
  const p1 = JSON.parse<Point>("(1.0,2.0)");
  expect(p1.x.toString()).toBe("1.0");
  expect(p1.y.toString()).toBe("2.0");
});
