import 'wasi'

import { unknown } from './unknown'

const unkn = new unknown()

unkn._set('Hello World!')

console.log(unkn._get<string>())