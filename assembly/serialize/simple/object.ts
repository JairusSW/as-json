interface GeneratedInterface {
  __SERIALIZE(ptr: usize): string;
  __SERIALIZE_BS(ptr: usize, staticSize: bool): void;
}

export function serializeObject<T extends GeneratedInterface>(data: T, staticSize: bool = false): void {
  return changetype<nonnull<T>>(data).__SERIALIZE_BS(changetype<usize>(data), staticSize);
}
