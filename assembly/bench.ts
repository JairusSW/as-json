import { JSON, removeJSONWhitespace } from '.'

import * as asJSON from "assemblyscript-json";

const str = "Hello Wor\"[]{}ld!"

const num: i32 = 12345

const bool = true

const arr = ["hello", "world", str]

const strstr = JSON.stringify(str)

const strnum = JSON.stringify(num)

const strbool = JSON.stringify(bool)

const strarr = JSON.stringify(arr)

// @ts-ignore
@json
class JSONSchema {
    firstName: string;
    lastName: string;
    human: boolean;
    age: i32;
    meta: Meta;
    language: string;
    location: f64[];
}

// @ts-ignore
@json
class Meta {
    country: string;
    awesome: boolean;
    spooky: boolean;
}

// Create the JSON object
const obj: JSONSchema = {
    firstName: 'Jair"us',
    lastName: 'T}an""aka',
    age: 14,
    human: true,
    meta: {
        country: 'U{S',
        awesome: true,
        spooky: false
    },
    language: 'en[glis]h',
    location: [-43.130850291, 32.926401705]
};

const data2: JSONSchema = {
    firstName: 'haha',
    lastName: 'haha',
    age: 14,
    human: false,
    meta: {
        country: 'USAAAA',
        awesome: false,
        spooky: true
    },
    language: 'engrish',
    location: [1.0, 2.0]
};

const strobj = JSON.stringify(obj)

function bench(title: string, code: () => void): void {
    let ops = 100_000
    const start = Date.now()
    while (ops--) {
        code()
    }
    const time = Date.now() - start
    if (time === 0) {
        trace(`${title}: ~${100_000 * 1000} ops/s | ${time}ms`)
    } else {
        trace(`${title}: ~${(100_000 * 1000) / time} ops/s | ${time}ms`)
    }
}

trace(`Benchmarking... (x1,000,000 ops)`)

// JSON-AS Stringify
bench('JSON-AS Stringify (string)', () => {
    JSON.stringify(str)
})

bench('JSON-AS Stringify (number)', () => {
    JSON.stringify(num)
})

bench('JSON-AS Stringify (boolean)', () => {
    JSON.stringify(bool)
})

bench('JSON-AS Stringify (array)', () => {
    JSON.stringify(arr)
})

bench('JSON-AS Stringify (object)', () => {
    JSON.stringify(obj)
})

// AssemblyScript-JSON Stringify

bench('AssemblyScript-JSON Stringify (string)', () => {
    const encoder = new asJSON.JSONEncoder()
    encoder.setString(null, str)
    String.UTF8.decode(encoder.serialize().buffer)
})

bench('AssemblyScript-JSON Stringify (number)', () => {
    const encoder = new asJSON.JSONEncoder()
    encoder.setInteger(null, num)
    String.UTF8.decode(encoder.serialize().buffer)
})

bench('AssemblyScript-JSON Stringify (boolean)', () => {
    const encoder = new asJSON.JSONEncoder()
    encoder.setBoolean(null, bool)
    String.UTF8.decode(encoder.serialize().buffer)
})

bench('AssemblyScript-JSON Stringify (array)', () => {
    const encoder = new asJSON.JSONEncoder()
    encoder.pushArray(null)
    encoder.setString(null, arr[0])
    encoder.setString(null, arr[1])
    encoder.setString(null, arr[2])
    encoder.popArray()
    String.UTF8.decode(encoder.serialize().buffer)
})

bench('AssemblyScript-JSON Stringify (object)', () => {
    const encoder = new asJSON.JSONEncoder()
    encoder.setString('firstName', 'Jair"us')
    encoder.setString('lastName', 'T}an""aka')
    encoder.setInteger('age', 14)
    encoder.setBoolean('human', false)
    encoder.pushObject('meta')
    encoder.setString('country', 'U{S')
    encoder.setBoolean('awesome', false)
    encoder.setBoolean('spooky', false)
    encoder.popObject()
    encoder.setString('language', 'en[glis]h')
    encoder.pushArray('location')
    encoder.setFloat(null, -43.130850291)
    encoder.setFloat(null, 32.926401705)
    encoder.popArray()
    String.UTF8.decode(encoder.serialize().buffer)
})

// JSON-AS Parse
bench('JSON-AS Parse (string)', () => {
    JSON.parse<string>(strstr)
})

bench('JSON-AS Parse (number)', () => {
    JSON.parse<i32>(strnum)
})

bench('JSON-AS Parse (boolean)', () => {
    JSON.parse<boolean>(strbool)
})

bench('JSON-AS Parse (array)', () => {
    JSON.parse<string[]>(strarr)
})

bench('JSON-AS Parse (object)', () => {
    JSON.parse<JSONSchema>(strobj)
})

// AssemblyScript-JSON Parse

bench('AssemblyScript-JSON Parse (string)', () => {
    const decoder: asJSON.JSON.Str = <asJSON.JSON.Str>(asJSON.JSON.parse(strstr));
    decoder!.valueOf()
})

bench('AssemblyScript-JSON Parse (number)', () => {
    const decoder: asJSON.JSON.Integer = <asJSON.JSON.Integer>(asJSON.JSON.parse(strnum));
    decoder!.valueOf()
})

bench('AssemblyScript-JSON Parse (boolean)', () => {
    const decoder: asJSON.JSON.Bool = <asJSON.JSON.Bool>(asJSON.JSON.parse(strbool));
    decoder!.valueOf()
})

bench('AssemblyScript-JSON Parse (array)', () => {
    const result: string[] = []
    const decoder: asJSON.JSON.Arr = <asJSON.JSON.Arr>(asJSON.JSON.parse(strarr));
    const val = decoder.valueOf()
    result.push(val.at(0).toString())
    result.push(val.at(1).toString())
    result.push(val.at(2).toString())
})

bench('AssemblyScript-JSON Parse (object)', () => {
    let decodedASJSON: asJSON.JSON.Obj = <asJSON.JSON.Obj>(asJSON.JSON.parse(strobj));
    const firstNameVal = decodedASJSON.getString('firstName')
    if (firstNameVal) {
        data2.firstName = firstNameVal!.valueOf()
    }
    const lastNameVal = decodedASJSON.getString('lastName')
    if (lastNameVal) {
        data2.lastName = lastNameVal!.valueOf()
    }
    const ageVal = decodedASJSON.getInteger('age')
    if (ageVal) {
        data2.age = i32(ageVal!.valueOf())
    }
    const humanVal = decodedASJSON.getBool('human')
    if (humanVal) {
        data2.human = humanVal ? humanVal!.valueOf() ? true : false : false
    }
    const metaVal = decodedASJSON.getObj('meta')
    if (metaVal) {
        const metaCountryVal = metaVal!.getString('country')
        const metaAwesomeVal = metaVal!.getBool('awesome')
        const metaSpookyVal = metaVal!.getBool('spooky')
        if (metaCountryVal) {
            data2.meta.country = metaCountryVal.valueOf()
        }
        if (metaAwesomeVal) {
            data2.meta.awesome = metaAwesomeVal.valueOf() ? true : false
        }
        if (metaSpookyVal) {
            data2.meta.spooky = metaSpookyVal.valueOf() ? true : false
        }
    }
    const languageVal = decodedASJSON.getString('language')
    if (languageVal) {
        data2.language = languageVal!.valueOf()
    }
    const locationVal = decodedASJSON.getArr('location')
    if (locationVal) {
        data2.location[0] = parseFloat(locationVal!.valueOf().at(0).toString())
        data2.location[1] = parseFloat(locationVal!.valueOf().at(1).toString())
    }
})

bench('Strip Whitespace', () => {
    removeJSONWhitespace(`{"firstName"  :  "Jairus",  "lastName":  "Tanaka"  ,  "human":true,"age":14,"meta":{"country":"US","awesome":true},"language":"english","location":[-43.130850291,32.926401705]}`)
})