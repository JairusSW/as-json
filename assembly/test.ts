import "wasi";
import { JSON } from ".";
import { removeWhitespace } from "./util";

// @ts-ignore
@json
class Vec2 {
  x: f32
  y: f32
}

console.log(`Parsed String Array: ${JSON.stringify(JSON.parse<string[]>(`
[ "hello" ,  "world" ]  `))}`);

console.log(`Parsed Boolean Array: ${JSON.stringify(JSON.parse<boolean[]>(`
[ false ,  true ]  `))}`);