import { unknown } from './unknown'
import { JSON, parseUnknownArray } from './json'

// @ts-ignore
@json
class JSONSchema {
    firstName: string
    lastName: string
    human: boolean
    age: i32
    meta: Meta
}

// @ts-ignore
@json
class Meta {
    country: string
    awesome: boolean
    spooky: boolean
}

// Create the JSON object
const data: JSONSchema = {
    firstName: 'Ja""irus',
    lastName: 'Ta[]{}naka',
    age: 14,
    human: true,
    meta: {
        country: 'US',
        awesome: true,
        spooky: false
    }
}

const str = 'Hello World'
const num = 3.14
const bool = true

const arr = new Array<unknown>()

const arr2 = new Array<unknown>()

arr2.push(unknown.from(str))
arr2.push(unknown.from(num))
arr2.push(unknown.from(bool))
arr2.push(unknown.from('Hello Dynamic Arrays!'))
arr2.push(unknown.from('Muhahhaa!'))

arr.push(unknown.from(str))
arr.push(unknown.from(num))
arr.push(unknown.from(bool))
arr.push(unknown.from(arr2))
//arr.push(unknown.from(data))

const encoded = JSON.stringify(arr)
const decoded = JSON.parse<unknown>(encoded)

console.log(`Encoded: ${encoded}`)
// @ts-ignore
console.log(`Decoded: ${JSON.stringify(decoded.get<Array<unknown>>())}`)