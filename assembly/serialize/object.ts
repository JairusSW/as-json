interface GeneratedInterface {
    __SERIALIZE(): string;
}
// @ts-ignore
@inline export function serializeObject<T extends GeneratedInterface>(data: T): string {
    return changetype<nonnull<T>>(data).__SERIALIZE();
}