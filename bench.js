import { Bench } from "tinybench";

const vec = {
    x: 3.4,
    y: 1.2,
    z: 8.1,
};

let data;

let b = [[],[[]],[[],[[]]]];

let str = randomAlphabet() + '0123456789!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

function randomAlphabet() {
    // Generate the alphabet arrays for lowercase and uppercase letters
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Combine both arrays
    let alphabet = lowercase + uppercase;

    // Convert the combined string into an array of characters
    alphabet = alphabet.split('');

    // Shuffle the array using Fisher-Yates (Knuth) Shuffle algorithm
    for (let i = alphabet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
    }

    // Join the shuffled array back into a string and return
    return alphabet.join('');
}
(async () => {
setInterval(async () => {
    str = randomAlphabet() + '0123456789!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
    b[0][0] = [1];
    b[0][0] = [];
    vec.x = Math.random()<<1;
    vec.y = Math.random()<<1;
    vec.z = Math.random()<<1;
}, 0);
})();
// to prevent v8 from compiling a static output

const bench = new Bench({ time: 1000 })
    // .add("stringify float", () => {
    //     data = JSON.stringify(1.2345)
    // })
    // .add("parse float", () => {
    //     data = JSON.parse("1.2345")
    // })
    // .add("stringify int", () => {
    //     data = JSON.stringify(12345)
    // })
    // .add("parse int", () => {
    //     data = JSON.parse("12345")
    // })
    // .add("Stringify Object (Vec3)", () => {
    //     data = JSON.stringify(vec);
    // })

    // .add("Parse Object (Vec3)", () => {
    //     data = JSON.parse('{"x":0,"y":0,"z":0}');
    // })

    // .add("Stringify Number Array", () => {
    //     data = JSON.stringify([1, 2, 3]);
    // })

    // .add("Parse Number Array", () => {
    //     data = JSON.parse("[1,2,3]");
    // })

    .add("Stringify String", () => {
        data = JSON.stringify("hello world");
    })

    .add("Parse String", () => {
        data = JSON.parse('[[],[[]],[[],[[]]]]');
    })

    .add("Stringify [[],[[]],[[],[[]]]]", () => {
        data = JSON.stringify(b)
    })

await bench.run();

console.table(bench.table());