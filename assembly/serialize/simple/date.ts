// @ts-ignore: Decorator valid here
@inline export function serializeDate(data: Date): string {
    return `"${data.toISOString()}"`
}