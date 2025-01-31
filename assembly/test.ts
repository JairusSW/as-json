import { bs } from "../modules/as-bs/assembly";
import { serializeString } from "./serialize/simple/string";
import { bytes } from "./util";

serializeString("hello\"\"\"\" world");
console.log("\n-------------------------\nWritten: " + (bs.offset - bs.buffer).toString())
const serialized = bs.out<string>();
console.log("Data: " + serialized);
console.log("Bytes: " + bytes(serialized).toString());