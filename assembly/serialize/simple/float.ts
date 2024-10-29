// @ts-ignore: Decorator valid here
@inline export function serializeFloat<T extends number>(data: T): string {
    return data.toString();
}