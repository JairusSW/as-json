export function add(a: i32 = 1, b: i32 = 2, c: i32 = 3): i32 {
    return a + b + c;
}

// add() Should transform to

// if we call the GraphQL, say add(a: 2, c: 9), b is not defined--this is not possible.
// So, in that case, we set the bits in this order
// 0b1010000000000000
//   abcdefghijklmnop
//   |||
//   2|9
//    2 <--- set to default since toggle is 0
// Thus, that gives us the following arguments:
// a: 2, b: 2, c: 9

export function _add(a: i32, b: i32, c: i32, _mask: u64): i32 {
    if ((_mask & 1) == 0) a = 1;
    if ((_mask >> 1 & 1) == 0) b = 2;
    if ((_mask >> 2 & 1) == 0) c = 3;
    return a + b + c;
}

console.log("add(1,2,3: " + add(1,2,3).toString());
console.log("add(2,nil,9): " + _add(2,0,9,0b101).toString());