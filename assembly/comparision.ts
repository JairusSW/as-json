import { JSON } from '.'

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

// Now, encode and decode
const encodedJSON: string = JSON.stringify(data)
console.log('JSON-AS: ' + encodedJSON)
// We perform an equality check
if (encodedJSON == JSON.stringify(JSON.parse<JSONSchema>(encodedJSON))) {
    console.log('Yay! JSON-AS works!')
} else {
    console.log('Oof. JSON-AS died.')
}

// AssemblyScript-JSON test

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

console.log('Near JSON: ' + JSON.stringify(data2))
if (encodedJSON == JSON.stringify(data2)) {
    console.log('Yay! NEAR JSON works!')
} else {
    console.log('Oof. NEAR JSON died')
}