import "wasi"
import { Date } from "as-wasi"
import { parseOnStr } from "."

function bench(cb: () => void): void {
    const start = Date.now()
    let i = 2_000_000
    while (i--) {
        cb()
    }
    console.log(`Took ${Date.now() - start}ms`)
}

bench(() => {
    parseOnStr('{"hello":"world","this":{"is":"cool"}}', { value: 0 })
})