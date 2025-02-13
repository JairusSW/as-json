import { JSON } from ".";
import { bs } from "../modules/as-bs/assembly";
import { bytes } from "./util";

// bs.ensureSize(1024);
const a1 = JSON.stringify("\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000a\u000b\u000c\u000d\u000e\u000f\u000f\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f");
console.log("Bytes    " + bytes(a1).toString());
console.log("a1: " + a1);