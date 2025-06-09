// template last updated - 29 - 11 - 2024
const { readInput } = require("../../src/utils/ReadInput");
const INPUT = require("path").resolve(__dirname, "./input");
const DEMO = require("path").resolve(__dirname, "./demo");

const IS_DEMO = true;
const INPUT_FILE = IS_DEMO ? DEMO : INPUT;

/* prompt notes

*/
// SETUP ========================================
// preset vars
let s = "";
let g = [
  '-',
  ...'abcdefghijklmnopqrstuvwxyz',
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
], o = {};
let c = 0, sum = 0;


const input = readInput(INPUT_FILE, (line) => {
  const midIndex = line.split("").length/2;
  const one = line.split("").slice(0, midIndex);
  const two = line.split("").slice(midIndex);

  return { one, two }
});
// console.log(input[0].one.length, input[0].two.length);

// part1 ========================================
let PART_ONE = 0;

input.forEach((line, i) => { // each set
  console.log(`---`);
  console.log(`${line.one} - ${line.two}`)
  line.one.forEach((cc, ii) => {
    if(line.two.indexOf(cc) !== -1) {
      console.log(`>${ii}< ${cc} - ${line.two[line.two.indexOf(cc)]}`)
      PART_ONE += g.indexOf(cc);
    }
  })
})

console.log(">part one\t", PART_ONE);

// part2 ========================================
let PART_TWO = 0;
console.log(">part two\t", PART_TWO);

