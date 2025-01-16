interface GeneratedInterface {
  __SERIALIZE(ptr: usize, staticSize: bool): string;
}

export function serializeObject<T extends GeneratedInterface>(data: T, staticSize: bool): void {
  changetype<nonnull<T>>(data).__SERIALIZE(changetype<usize>(data), staticSize);
}
