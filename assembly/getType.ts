export class SwapType {}
export type swapType = SwapType
export function getType<T>(): string {
    const typeName = nameof<T>()
    return parseName(typeName)
}

export function parseName(typeName: string): string {
    return typeName
}