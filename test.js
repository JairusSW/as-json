const kati = require('./')

const a = {
    0: 'haha',
    1: 'baba',
    2: {
        0: 'mama'
    }
}

console.log('Kati:\n', kati.stringify(a))

console.log('JSON:\n', JSON.stringify(a))