const { readInput } = require('../../src/utils/ReadInput');
const INPUT = require('path').resolve(__dirname, './input');
const DEMO = require('path').resolve(__dirname, './demo');

const IS_DEMO = true
const INPUT_FILE = IS_DEMO ? DEMO : INPUT;
// string array by 
const input = readInput(INPUT_FILE, (line) => {
    return line;
})

console.log(input);

// OK GO ========================================
let sum = 0;
let count = 0;

let a
let b

// part1 ========================================

// part2 ========================================