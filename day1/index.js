const Read = require('../lib/read-file.js')
let read = new Read('input.txt')

readlines(read.openFile('input.1.txt'))
async function readlines (io) {
    let sum = 0;
    let lastChunk = 0
    if (io) {
        for await (const chunk of io) {
            //change function name from CalcFuel to Getfuel for p2
            for (const val of Getfuel(chunk,lastChunk)) {
                sum += val
            }
            console.log(`Getting total mass for ${chunk} ${sum}`)
        }
    }
}
function * Getfuel(mass) {
    let current = (Math.floor((mass / 3)) - 2);
    let next = (Math.floor((current / 3)) - 2);
    while (next >= 0) {
        yield current;
        [current, next] = [next, (Math.floor((next / 3)) - 2)];
    }
    yield current;
}
function * CalcFuel(data,lastChunk) {
    while (data != lastChunk) {
        yield (Math.floor((data / 3)) - 2)
        lastChunk = data
    }
}