// @ts-ignore
@inline export function serializeDate(data: Date): string {
    return `"${data.toISOString()}"`
}