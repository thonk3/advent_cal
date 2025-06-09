// template last updated - 29 - 11 - 2024
const { readInput } = require('../../src/utils/ReadInput');
const path = require('path');

const IS_DEMO = false
const INPUT_FILE = IS_DEMO ? 
    path.resolve(__dirname, './demo') : path.resolve(__dirname, './input');

/* prompt notes

*/
// SETUP ========================================
// preset vars
let s = "";
let g = [], o = {}
let c = 0, sum = 0;

const input = readInput(INPUT_FILE, (line) => {
    return line;
})
// console.log(input);

// part1 ========================================
let PART_ONE = 0;
console.log(">part one\t", PART_ONE);

// part2 ========================================
let PART_TWO = 0;
console.log(">part two\t", PART_TWO);

