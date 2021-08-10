import { Unknown } from './Unknown'
import { console } from "../node_modules/as-console/assembly/wasi"

import { JSON, serializeUnknown } from './json'

import { Object } from './Object'

function check<T>(message: string, data: T): void {
    const encoded = JSON.stringify<T>(data)
    const decoded = JSON.parse<T>(encoded)
    if (encoded == JSON.stringify(decoded)) {
        console.log(`Success: ${message}`)
    } else {
        console.log(`Fail: ${message}`)
    }
}

// @ts-ignore
@json
class EmptySchema { }

// @ts-ignore
@json
class JSONSchema {
    string1: string
    string2: string
    string3: string
    f641: f64
    f642: f64
    f643: f64
    f644: f64
    f645: f64
    f646: f64
    f321: f32
    f322: f32
    f323: f32
    f324: f32
    f325: f32
    f326: f32
    u8: u8
    u16: u16
    u32: u32
    u64: u64
    i8: i8
    i16: i16
    i32: i32
    i64: i64
    bool: bool
    boolean: boolean
    stringArr: string[]
    f64Arr: f64[]
    u8Arr: u8[]
    u16Arr: u16[]
    u32Arr: u32[]
    u64Arr: u64[]
    i8Arr: i8[]
    i16Arr: i16[]
    i32Arr: i32[]
    i64Arr: i64[]
    emptyArr: string[]
    boolArr: bool[]
    booleanArr: boolean[]
    stringArrArr: string[][]
    object: JSONSchema2
}

// @ts-ignore
@json
class JSONSchema2 {
    string1: string
}

const obj: JSONSchema = {
    string1: 'Hello World',
    string2: 'Hell[}o Wo[rld}{',
    string3: 'Hel`"lo Wo"`r"ld',
    f641: 7.23,
    f642: 10e2,
    f643: 10E2,
    f644: 123456e-5,
    f645: 123456E-5,
    f646: 0.0,
    f321: 7.23,
    f322: 10e2,
    f323: 10E2,
    f324: 123456e-5,
    f325: 123456E-5,
    f326: 0.0,
    u8: 100,
    u16: 101,
    u32: 102,
    u64: 103,
    i8: -100,
    i16: -101,
    i32: -102,
    i64: -103,
    bool: true,
    boolean: false,
    stringArr: ['Hello World', 'Hell[}o Wo[rld}{', 'Hel`"lo Wo"`r"ld'],
    f64Arr: [7.23, 10e2, 10e2, 10E2, 123456e-5, 123456E-5, 0.0],
    u8Arr: [100, 100, 100],
    u16Arr: [101, 101, 101],
    u32Arr: [102, 102, 102],
    u64Arr: [103, 103, 103],
    i8Arr: [-100, -100, -100],
    i16Arr: [-101, -101, -101],
    i32Arr: [-102, -102, -102],
    i64Arr: [-103, -103, -103],
    emptyArr: [],
    boolArr: [true, false, true],
    booleanArr: [true, false, true],
    stringArrArr: [['Hey'], ['ha'], ['ho']],
    object: {
        string1: 'Hello World'
    }
}

const emptyObj: EmptySchema = {}/*
// Strings
check<string>('Encode/Decode String', 'Hello World')
check<string>('Encode/Decode String', 'Hell[}o Wo[rld}{')
check<string>('Encode/Decode String', 'Hel`"lo Wo"`r"ld')
// Floats
check<f64>('Encode/Decode f64', 7.23)
check<f64>('Encode/Decode f64', 10e2)
check<f64>('Encode/Decode f64', 10E2)
check<f64>('Encode/Decode f64', 123456e-5)
check<f64>('Encode/Decode f64', 123456E-5)
check<f64>('Encode/Decode f64', 0.0)

check<f32>('Encode/Decode f32', 7.23)
check<f32>('Encode/Decode f32', 10e2)
check<f32>('Encode/Decode f32', 10E2)
check<f32>('Encode/Decode f32', 123456e-5)
check<f32>('Encode/Decode f32', 123456E-5)
check<f32>('Encode/Decode f32', 0.0)
// Integers
check<u8>('Encode/Decode u8', 100)
check<u16>('Encode/Decode u16', 101)
check<u32>('Encode/Decode u32', 102)
check<u64>('Encode/Decode u64', 103)

check<i8>('Encode/Decode i8', -100)
check<i16>('Encode/Decode i16', -101)
check<i32>('Encode/Decode i32', -102)
check<i64>('Encode/Decode i64', -103)

// Bools
check<bool>('Encode/Decode bool', true)
check<bool>('Encode/Decode bool', false)

// Booleans
check<boolean>('Encode/Decode boolean', true)
check<boolean>('Encode/Decode boolean', false)

// Null 
check('Encode/Decode null', null)

// Arrays
check<string[]>('Encode/Decode string[]', ['Hello World', 'Hell[}o Wo[rld}{', 'Hel`"lo Wo"`r"ld'])
check<f64[]>('Encode/Decode f32[]', [7.23, 10e2, 10e2, 10E2, 123456e-5, 123456E-5, 0.0])
check<u8[]>('Encode/Decode u8[]', [100, 100, 100])
check<u16[]>('Encode/Decode u16[]', [101, 101, 101])
check<u32[]>('Encode/Decode u32[]', [102, 102, 102])
check<u64[]>('Encode/Decode u64[]', [103, 103, 103])
check<i8[]>('Encode/Decode i8[]', [-100, -100, -100])
check<i16[]>('Encode/Decode i16[]', [-101, -101, -101])
check<i32[]>('Encode/Decode i32[]', [-102, -102, -102])
check<i64[]>('Encode/Decode i64[]', [-103, -103, -103])
check<string[]>('Encode/Decode empty[]', [])
check<bool[]>('Encode/Decode bool[]', [true, false, true])
check<boolean[]>('Encode/Decode boolean[]', [true, false, true])
check<string[][]>('Encode/Decode string[][]', [['Hey'], ['ha'], ['ho']])

// Object
check<JSONSchema>('Encode/Decode object', obj)

check<EmptySchema>('Encode/Decode object', emptyObj)*/

// Variant
//console.log(JSON.stringify<Unknown[]>([Unknown.wrap(3.14), Unknown.wrap('strings too!'), Unknown.wrap<u32>(14), Unknown.wrap(false), Unknown.wrap(true), Unknown.wrap(['Deep arrays too!'])]))

const o = new Object()

o['haha'] = 'ha'

console.log(o['haha'].get<string>())

// const UnknownArray = ["Hello Dynamic Arrays", 3.14, true, false, ["haha"]]

// console.log(UnknownArray[0].get<string>())