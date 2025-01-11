
@json
export class VecBase {
  base: i32 = 0;

  @inline __ALLOCATE(): void {
    bs.ensureSize(4);
  }

  @inline __SERIALIZE_BS(ptr: usize, staticSize: bool): void {
    store<u32>(bs.offset, 8192123);
    bs.offset += 4;
  }
}
