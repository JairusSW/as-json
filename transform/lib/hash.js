// XXHash 32-bit as a starting point, see: https://cyan4973.github.io/xxHash
// primes
// @ts-ignore: decorator
const XXH32_P1 = 2654435761;
// @ts-ignore: decorator
const XXH32_P2 = 2246822519;
// @ts-ignore: decorator
const XXH32_P3 = 3266489917;
// @ts-ignore: decorator
const XXH32_P4 = 668265263;
// @ts-ignore: decorator
const XXH32_P5 = 374761393;
// @ts-ignore: decorator
const XXH32_SEED = 0;
function hash32(key, len = 4) {
    let h = XXH32_SEED + XXH32_P5 + len;
    h += key * XXH32_P3;
    h = rotl(h, 17) * XXH32_P4;
    h ^= h >> 15;
    h *= XXH32_P2;
    h ^= h >> 13;
    h *= XXH32_P3;
    h ^= h >> 16;
    return h;
}
function rotl(x, r) {
    return (x << r) | (x >>> (32 - r));
}
function mix(h, key) {
    return rotl(h + key * XXH32_P2, 13) * XXH32_P1;
}
export function hashStr(key) {
    if (key == null)
        return XXH32_SEED;
    let h = key.length;
    let len = h;
    let pos = 0;
    if (len >= 16) {
        let s1 = XXH32_SEED + XXH32_P1 + XXH32_P2;
        let s2 = XXH32_SEED + XXH32_P2;
        let s3 = XXH32_SEED;
        let s4 = XXH32_SEED - XXH32_P1;
        let end = len + pos - 16;
        while (pos <= end) {
            s1 = mix(s1, key.charCodeAt(pos));
            s2 = mix(s2, key.charCodeAt(pos + 1));
            s3 = mix(s3, key.charCodeAt(pos + 2));
            s4 = mix(s4, load(pos, 12));
            pos += 16;
        }
        h += rotl(s1, 1) + rotl(s2, 7) + rotl(s3, 12) + rotl(s4, 18);
    }
    else {
        h += XXH32_SEED + XXH32_P5;
    }
    let end = changetype(key) + len - 4;
    while (pos <= end) {
        h += load(pos) * XXH32_P3;
        h = rotl(h, 17) * XXH32_P4;
        pos += 4;
    }
    end = changetype(key) + len;
    while (pos < end) {
        h += load(pos) * XXH32_P5;
        h = rotl(h, 11) * XXH32_P1;
        pos++;
    }
    h ^= h >> 15;
    h *= XXH32_P2;
    h ^= h >> 13;
    h *= XXH32_P3;
    h ^= h >> 16;
    return h;
}
