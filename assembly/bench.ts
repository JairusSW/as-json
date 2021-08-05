import 'wasi'

import { Date } from 'as-wasi'

import { JSON } from './json'

export function bench(title: string, code: () => void): void {
    let ops: u32 = 100_000
    const start: f64 = Date.now()
    while (ops--) {
        code()
    }
    const time: f64 = Date.now() - start
    if (time <= 0) {
        console.log(`${title}: ~${100_000 * 1000}.00 ops/s | ${Math.round((time * 100)) / 100}ms`)
    } else {
        console.log(`${title}: ~${Math.round(((100_000 * 1000) / time) * 100) / 100} ops/s | ${Math.round((time * 100)) / 100}ms`)
    }
}

bench('Stringify String', () => {
    JSON.stringify<string>('Hello World')
})

bench('Parse String', () => {
    JSON.parse<string>('"Hello World"')
})

bench('Stringify Integer', () => {
    JSON.stringify<i32>(14)
})

bench('Parse Integer', () => {
    JSON.parse<i32>('14')
})

bench('Stringify Float', () => {
    JSON.stringify<f64>(7.3)
})

bench('Parse Float', () => {
    JSON.parse<f64>('7.3')
})

bench('Stringify Boolean', () => {
    JSON.stringify<boolean>(true)
})

bench('Parse Boolean', () => {
    JSON.parse<boolean>('true')
})

bench('Stringify Bool', () => {
    JSON.stringify<bool>(true)
})

bench('Parse Bool', () => {
    JSON.parse<bool>('true')
})