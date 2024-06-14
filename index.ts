function charCodeAt32(data: string, offset: number): number {
    return (data.charCodeAt(offset + 1) << 16) | data.charCodeAt(offset);
}
console.log(charCodeAt32("xx", 0))

function charCodeAt64(data: string, offset: number): bigint {
    if (offset + 3 >= data.length) {
        throw new Error("The string must have at least 4 characters from the specified offset.");
    }

    const firstCharCode = BigInt(data.charCodeAt(offset));
    const secondCharCode = BigInt(data.charCodeAt(offset + 1));
    const thirdCharCode = BigInt(data.charCodeAt(offset + 2));
    const fourthCharCode = BigInt(data.charCodeAt(offset + 3));

    const u64Value = (fourthCharCode << 48n) | (thirdCharCode << 32n) | (secondCharCode << 16n) | firstCharCode;

    return u64Value;
}