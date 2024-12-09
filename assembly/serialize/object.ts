interface GeneratedInterface {
    __SERIALIZE(ptr: usize): string;
}

// @ts-ignore: Decorator valid here
@inline export function serializeObject<T extends GeneratedInterface>(data: T): string {
    return changetype<nonnull<T>>(data).__SERIALIZE(changetype<usize>(data));
}