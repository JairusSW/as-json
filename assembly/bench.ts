import { JSON } from "./index";

import { console } from "as-console";

function benchStringify<T>(name: string, data: T): void {
  // Pre-run
  let preRuns = 10;
  while (preRuns--) {
    JSON.stringify<T>(data);
  }
  // Bench
  const start = Date.now()
  let runs = 100_000;
  while (runs--) {
    JSON.stringify<T>(data);
  }
  console.log(`Stringify (AS) ${name}: ~${Date.now() - start}ms`)
}

// @ts-ignore
@json
class schema {
    name: string
    age: u32
}

const data: schema = {
    name: 'Jairus',
    age: 14
}

benchStringify<string>('string', 'Hello World')

benchStringify<i32>('number', 123)

benchStringify<boolean>('boolean', true)

benchStringify<Array<u32>>('array', [1,2,3,4,5])

benchStringify<schema>('object', data)