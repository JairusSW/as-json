import { JSON, removeJSONWhitespace } from '.'

import * as asJSON from "assemblyscript-json";

// JSON-AS test

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
}

// Create the JSON object
const data: JSONSchema = {
    firstName: 'Jair"us',
    lastName: 'T}an""aka',
    age: 14,
    human: true,
    meta: {
        country: 'U{S',
        awesome: true
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
        awesome: false
    },
    language: 'engrish',
    location: [1.0, 2.0]
};

const encodedJSON: string = JSON.stringify(data)

// Benchmark (Parse)
let ops1: u32 = 100_000

let ops2: u32 = 100_000

let ops3: u32 = 100_000

let ops4: u32 = 100_000

let ops5: u32 = 100_000

let jsonASTimeStringify: i64 = 0

let jsonASTimeParse: i64 = 0

let nearASTimeStringify: i64 = 0

let nearASTimeParse: i64 = 0

const jsonASstart = Date.now()

while (ops1--) {
    JSON.parse<JSONSchema>(encodedJSON)
}

jsonASTimeParse = Date.now() - jsonASstart

trace(`JSON-AS Deserialize (100,000 ops): ${jsonASTimeParse}ms`)

const nearJsonstart = Date.now()

while (ops2--) {
    let decodedASJSON: asJSON.JSON.Obj = <asJSON.JSON.Obj>(asJSON.JSON.parse(encodedJSON));
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
        if (metaCountryVal) {
            data2.meta.country = metaCountryVal.valueOf()
        }
        if (metaAwesomeVal) {
            data2.meta.awesome = metaAwesomeVal.valueOf() ? true : false
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
}

nearASTimeParse = Date.now() - nearJsonstart

trace(`NEAR-JSON Deserialize (100,000 ops): ${nearASTimeParse}ms`)

// Benchmark (Stringify)

const jsonASstart1 = Date.now()

while (ops3--) {
    JSON.stringify(data)
}

jsonASTimeStringify = Date.now() - jsonASstart1

trace(`JSON-AS Serialize (100,000 ops): ${jsonASTimeStringify}ms`)

const nearJsonstart1 = Date.now()

while (ops4--) {
    const encoder = new asJSON.JSONEncoder()
    encoder.setString('firstName', 'Jair"us')
    encoder.setString('lastName', 'T}an""aka')
    encoder.setInteger('age', 14)
    encoder.setBoolean('human', false)
    encoder.pushObject('meta')
    encoder.setString('country', 'U{S')
    encoder.setBoolean('awesome', false)
    encoder.popObject()
    encoder.setString('language', 'en[glis]h')
    encoder.pushArray('location')
    encoder.setFloat(null, -43.130850291)
    encoder.setFloat(null, 32.926401705)
    encoder.popArray()
    String.UTF8.decode(encoder.serialize().buffer)
    // Have to decode into string because JSON-AS returns a string.
    // Were comparing with perfect equality here. :)
}

nearASTimeStringify = Date.now() - nearJsonstart1

trace(`NEAR-JSON Serialize (100,000 ops): ${nearASTimeStringify}ms`)

const stripWhite = Date.now()

while (ops5--) {
    removeJSONWhitespace(encodedJSON)
}

trace(`StripWhite (100,000 ops): ${Date.now() - stripWhite}ms`);

if (jsonASTimeParse < nearASTimeParse) {
    trace(`Fastest Parse: (JSON-AS)\nOps Faster: ${nearASTimeParse - jsonASTimeParse} ops`)
} else {
    trace(`Fastest Parse: (AssemblyScript-JSON)\nOps Faster: ${jsonASTimeParse - nearASTimeParse} ops`)
}

if (jsonASTimeStringify < nearASTimeStringify) {
    trace(`Fastest Stringify: (JSON-AS)\nOps Faster: ${nearASTimeStringify - jsonASTimeStringify} ops`)
} else {
    trace(`Fastest Stringify: (AssemblyScript-JSON)\nOps Faster: ${jsonASTimeStringify - nearASTimeStringify} ops`)
}