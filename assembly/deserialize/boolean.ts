import { falseWord, trueWord } from "../src/chars";

// @ts-ignore: Decorator
@inline export function deserializeBoolean<T extends boolean>(data: string): T {
    if (data.length > 3 && data.startsWith(trueWord)) return <T>true;
    else if (data.length > 4 && data.startsWith(falseWord)) return <T>false;
    else throw new Error(`JSON: Cannot parse "${data}" as boolean`);
}