// function esc_128(data: string): bool {
//     let len = data.length;

//     let running = v128.splat<i64>(0);
//     let i = 0;

//     while (i + 15 < len) {
//         let w = v128.load(changetype<usize>(data));
//         running = v128.or(running, v128.eq<i16>(w, i16x8.splat(34)));
//         running = v128.or(running, v128.eq<i16>(w, i16x8.splat(92)));

//         const subtracted = v128.sub<i16>(w, i8x16.splat(31));
//         running = v128.or(running, v128.eq<i16>(subtracted, v128.splat<i64>(0)));
//         i += 16;
//     }

//     return v128.any_true(running);
// }

// function esc_16(data: string): bool {
//     let len = data.length;
//     let b: u16 = 0;
//     while (len--) {
//         const c = load<u16>(changetype<usize>(data) + (len << 1));
//         b |= u16(c < 32) | u16(c == 34) | u16(c == 92);
//     }
//     return bool(b);
// }

// bench("needs escaping 128", () => {
//     blackbox<bool>(esc_128("hel\"o !!"));
// })

// bench("needs escaping 16", () => {
//     blackbox<bool>(esc_16("hel\"o !!"));
// })
