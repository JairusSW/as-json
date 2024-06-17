/**
 * Serialize a bool to type string
 * @param data data to serialize
 * @returns string
 */
// @ts-ignore
export function serializeBool(data: bool): string {
    return data ? "true" : "false";
}