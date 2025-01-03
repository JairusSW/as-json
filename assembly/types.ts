import { bs } from "./custom/bs";
import { serialize_simple } from "./serialize/simple";

@json
export class VecBase {
    @omit()
    base: i32 = 0;
}