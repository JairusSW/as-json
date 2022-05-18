import "wasi"
import { StringSink } from "as-string-sink/assembly";

export function serializeString(data: string): string {
  const result = new StringSink("\"")
  for (let i = 0; i < data.length; i++) {
    if (data.codePointAt(i) == "\"".codePointAt(0)) {
      result.write("\\\"")
    } else {
      result.writeCodePoint(data.codePointAt(i))
    }
  }
  result.write("\"")
  return result.toString()
  //return "\"" + data.replaceAll("\"", "\\\"") + "\""
}

console.log(serializeString("\"hello world\""))