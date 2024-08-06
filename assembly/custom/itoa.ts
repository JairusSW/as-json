@inline export function itoa_fast(out: usize, val: u32): void {
  const low = val % 100000;
  const high = val / 100000;

  let tmp_high = high * (26844) - (high / 4);
  let tmp_low = low * (26844) - (low / 4);

  const h1 = 48 + (tmp_high >> 28);
  tmp_high = (tmp_high & 268435455) * 5;

  const h2 = 48 + (tmp_high >> 27);
  tmp_high = (tmp_high & 134217727) * 5;

  const h3 = 48 + (tmp_high >> 26);
  tmp_high = (tmp_high & 67108863) * 5;

  const h4 = 48 + (tmp_high >> 25);
  tmp_high = (tmp_high & 33554431) * 5;

  const h5 = 48 + (tmp_low >> 24);

  const l1 = 48 + (tmp_low >> 28);
  tmp_low = (tmp_low & 268435455) * 5;

  const l2 = 48 + (tmp_low >> 27);
  tmp_low = (tmp_low & 134217727) * 5;

  const l3 = 48 + (tmp_low >> 26);
  tmp_low = (tmp_low & 67108863) * 5;

  const l4 = 48 + (tmp_low >> 25);
  tmp_low = (tmp_low & 33554431) * 5;

  const l5 = 48 + (tmp_low >> 24);

  store<v128>(out, i32x4(h1 | (h2 << 16), h3 | (h4 << 16), h5 | (l1 << 16), l2 | (l3 << 16)));
  store<u32>(out, l4 | (l5 << 16), 16);

}