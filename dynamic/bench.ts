import 'wasi'

import { Date } from 'as-wasi'

import { Unknown } from './unknown'

function bench(title: string, code: () => void): void {
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

const unkn = new Unknown()

bench('Unknown set', () => {
    unkn._set('haha')
})

bench('Unknown get', () => {
    unkn._get<string>()
})