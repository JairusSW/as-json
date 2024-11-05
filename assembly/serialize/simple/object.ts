interface GeneratedInterface {
    __SERIALIZE(): string;
    __SERIALIZE_PRETTY(): string;
}

// @ts-ignore: Decorator valid here
@inline export function serializeObject<T extends GeneratedInterface>(data: T): string {
    return changetype<nonnull<T>>(data).__SERIALIZE();
}

// @ts-ignore: Decorator valid here
@inline export function serializeObject_Pretty<T extends GeneratedInterface>(data: T): string {
    return changetype<nonnull<T>>(data).__SERIALIZE_PRETTY();
}