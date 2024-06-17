// @ts-ignore
export function serializeDate(data: Date): string {
    return `"${data.toISOString()}"`
}