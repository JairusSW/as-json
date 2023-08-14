import { bench, blackbox } from "../../../WebAssembly/benchmark-wasm/assembly/bench";
import { atoi_fast, snip_fast, unsafeCharCodeAt } from "../assembly/src/util";
import { JSON } from "../assembly";
import { backSlashCode, commaCode, eCode, fCode, leftBraceCode, leftBracketCode, nCode, nullWord, quoteCode, rCode, rightBraceCode, rightBracketCode, tCode, trueWord, uCode } from "../assembly/src/chars";
import { isSpace } from "util/string";
class Vec3 {
    x: i32;
    y: i32;
    z: i32;
    @inline
    __JSON_Serialize(): string {
        return `{"x":${this.x.toString()},"y":${this.y.toString()},"z":${this.z.toString()}}`;
    }
    @inline
    __JSON_Set_Key(key: string, value: string): void {
        if (key == "x") {
            this.x = JSON.parseObjectValue<i32>(value);
            return;
        }
        if (key == "y") {
            this.y = JSON.parseObjectValue<i32>(value);
            return;
        }
        if (key == "z") {
            this.z = JSON.parseObjectValue<i32>(value);
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
        let depth = 0;
        let outerLoopIndex = 1;
        for (; outerLoopIndex < data.length - 1; outerLoopIndex++) {
            const char = unsafeCharCodeAt(data, outerLoopIndex);
            if (char === leftBracketCode) {
                for (
                    let arrayValueIndex = outerLoopIndex;
                    arrayValueIndex < data.length - 1;
                    arrayValueIndex++
                ) {
                    const char = unsafeCharCodeAt(data, arrayValueIndex);
                    if (char === leftBracketCode) {
                        depth++;
                    } else if (char === rightBracketCode) {
                        depth--;
                        if (depth === 0) {
                            ++arrayValueIndex;
                            // @ts-ignore
                            schema.__JSON_Set_Key(
                                key,
                                data.slice(outerLoopIndex, arrayValueIndex)
                            );
                            outerLoopIndex = arrayValueIndex;
                            isKey = false;
                            break;
                        }
                    }
                }
            } else if (char === leftBraceCode) {
                for (
                    let objectValueIndex = outerLoopIndex;
                    objectValueIndex < data.length - 1;
                    objectValueIndex++
                ) {
                    const char = unsafeCharCodeAt(data, objectValueIndex);
                    if (char === leftBraceCode) {
                        depth++;
                    } else if (char === rightBraceCode) {
                        depth--;
                        if (depth === 0) {
                            ++objectValueIndex;
                            // @ts-ignore
                            schema.__JSON_Set_Key(
                                key,
                                data.slice(outerLoopIndex, objectValueIndex)
                            );
                            outerLoopIndex = objectValueIndex;
                            isKey = false;
                            break;
                        }
                    }
                }
            } else if (char === quoteCode) {
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
            } else if (char == nCode) {
                // @ts-ignore
                schema.__JSON_Set_Key(key, nullWord);
                isKey = false;
            } else if (
                char === tCode &&
                unsafeCharCodeAt(data, ++outerLoopIndex) === rCode &&
                unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
                unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
            ) {
                // @ts-ignore
                schema.__JSON_Set_Key(key, trueWord);
                isKey = false;
            } else if (
                char === fCode &&
                unsafeCharCodeAt(data, ++outerLoopIndex) === "a".charCodeAt(0) &&
                unsafeCharCodeAt(data, ++outerLoopIndex) === "l".charCodeAt(0) &&
                unsafeCharCodeAt(data, ++outerLoopIndex) === "s".charCodeAt(0) &&
                unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
            ) {
                // @ts-ignore
                schema.__JSON_Set_Key(key, "false");
                isKey = false;
            } else if ((char >= 48 && char <= 57) || char === 45) {
                let numberValueIndex = ++outerLoopIndex;
                for (; numberValueIndex < data.length; numberValueIndex++) {
                    const char = unsafeCharCodeAt(data, numberValueIndex);
                    if (char === commaCode || char === rightBraceCode || isSpace(char)) {
                        // @ts-ignore
                        schema.__JSON_Set_Key(
                            key,
                            data.slice(outerLoopIndex - 1, numberValueIndex)
                        );
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
/*
bench("Parse Number SNIP", () => {
    blackbox<i32>(snip_fast<i32>("12345"));
});

bench("Parse Number ATOI", () => {
    blackbox<i32>(atoi_fast<i32>("12345"));
})

bench("Parse Number STDLIB", () => {
    blackbox<i32>(i32.parse("12345"));
});

bench("Stringify Object (Vec3)", () => {
    blackbox<string>(vec.__JSON_Serialize());
});*/

bench("Parse Object (Vec3)", () => {
  blackbox<Vec3>(vec.__JSON_Deserialize('{"x":0,"y":0,"z":0}'));
});

bench("Stringify Number Array", () => {
    blackbox<string>(JSON.stringify<i32[]>([1, 2, 3]));
});

bench("Parse Number Array", () => {
    blackbox<i32[]>(JSON.parse<i32[]>(blackbox("[1,2,3]")));
});

bench("Stringify String", () => {
    blackbox<string>(JSON.stringify(blackbox('Hello "World!')));
});

bench("Parse String", () => {
    blackbox<string>(JSON.parse<string>(blackbox('"Hello "World!"')));
});

bench("Stringify Boolean Array", () => {
  blackbox(JSON.stringify<boolean[]>([true, false, true]));
});

bench("Stringify String Array", () => {
  blackbox(JSON.stringify<string[]>(["a", "b", "c"]));
});