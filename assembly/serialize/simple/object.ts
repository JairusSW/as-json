interface GeneratedInterface {
  __SERIALIZE(ptr: usize): string;
}

export function serializeObject<T extends GeneratedInterface>(data: T): string {
  return changetype<nonnull<T>>(data).__SERIALIZE(changetype<usize>(data));
}
