import { backSlashCode, commaCode, eCode, fCode, leftBraceCode, leftBracketCode, nCode, nullWord, quoteCode, rCode, rightBraceCode, rightBracketCode, tCode, trueWord, uCode } from "./src/chars";
import { isSpace } from "util/string";
import { JSON } from "./src/json";
import { fast_itoa32, snip_fast, unsafeCharCodeAt } from "./src/util";

import { bench, blackbox } from "../../../WebAssembly/benchmark-wasm/assembly/bench";
import { decimalCount32 } from "util/number";
class Vec3 {
    x: i32;
    y: i32;
    z: i32;
    @inline
    __JSON_Serialize(): string {
        return `{"x":${this.x},"y":${this.y},"z":${this.z}}`;
    }
    @inline
    __JSON_Set_Key(key: string, value: string): void {
        if (unsafeCharCodeAt(key, 0) == 120) {
            this.x = snip_fast<i32>(value);
            return;
        }
        if (unsafeCharCodeAt(key, 0) == 121) {
            this.y = snip_fast<i32>(value);
            return;
        }
        if (unsafeCharCodeAt(key, 0) == 122) {
            this.z = snip_fast<i32>(value);
            return;
        }
    }
    @inline
    __JSON_Deserialize(data: string): Vec3 {
        let schema: nonnull<Vec3> = changetype<nonnull<Vec3>>(
            __new(offsetof<nonnull<Vec3>>(), idof<nonnull<Vec3>>())
        );
        let key = "";
        let isKey = false;
        let outerLoopIndex = 1;
        for (; outerLoopIndex < data.length - 1; outerLoopIndex++) {
            const char = unsafeCharCodeAt(data, outerLoopIndex);
            if (char === quoteCode) {
                for (
                    let stringValueIndex = ++outerLoopIndex;
                    stringValueIndex < data.length - 1;
                    stringValueIndex++
                ) {
                    const char = unsafeCharCodeAt(data, stringValueIndex);
                    if (
                        char === quoteCode &&
                        unsafeCharCodeAt(data, stringValueIndex - 1) !== backSlashCode
                    ) {
                        if (isKey === false) {
                            key = data.slice(outerLoopIndex, stringValueIndex);
                            isKey = true;
                        } else {
                            // @ts-ignore
                            schema.__JSON_Set_Key(
                                key,
                                data.slice(outerLoopIndex, stringValueIndex)
                            );
                            isKey = false;
                        }
                        outerLoopIndex = ++stringValueIndex;
                        break;
                    }
                }
            } else if ((char >= 48 && char <= 57) || char === 45) {
                let numberValueIndex = ++outerLoopIndex;
                for (; numberValueIndex < data.length; numberValueIndex++) {
                    const char = unsafeCharCodeAt(data, numberValueIndex);
                    if (char === commaCode || char === rightBraceCode || isSpace(char)) {
                        if (key == "x") {
                            schema.x = snip_fast<i32>(data, numberValueIndex << 1, (outerLoopIndex - 1) << 1);
                        } else if (key == "y") {
                            schema.y = snip_fast<i32>(data, numberValueIndex << 1, (outerLoopIndex - 1) << 1);
                        } else if (key == "z") {
                            schema.z = snip_fast<i32>(data, numberValueIndex << 1, (outerLoopIndex - 1) << 1);
                        }
                        outerLoopIndex = numberValueIndex;
                        isKey = false;
                        break;
                    }
                }
            }
        }
        return schema;
    }
}

const vec: Vec3 = {
    x: 3,
    y: 1,
    z: 8,
}

console.log(vec.__JSON_Serialize());
console.log(vec.__JSON_Deserialize('{"x":3,"y":1,"z":8}').__JSON_Serialize())

// 9,325,755
bench("Stringify Object (Vec3)", () => {
    blackbox<string>(vec.__JSON_Serialize());
});

// 8,159,838
bench("Parse Object (Vec3)", () => {
    blackbox<Vec3>(vec.__JSON_Deserialize(blackbox<string>('{"x":0,"y":0,"z":0}')));
});
