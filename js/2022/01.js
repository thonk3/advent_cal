// template last updated - 29 - 11 - 2024
import path from "path";
import { readInput } from "../utils/readInput.js";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT = path.resolve(__dirname, "./01/input");
const DEMO = path.resolve(__dirname, "./01/demo");

// move the path parsing to utils

const IS_DEMO = false;
const INPUT_FILE = IS_DEMO ? DEMO : INPUT;

// NEW SHIT
// export solution function that accept a filepath

const parseFile = (INPUT_FILE) => {
  let data = null;
  
  return data;
}
export const solutionA = (INPUT_FILE) => {
  let result = 0;
  return result;
}

export const solutionB = (INPUT_FILE) => {
  let result = 0;

  return result;
}


/* prompt notes

*/
// SETUP ========================================

let sum = 0;
let count = 0;

let g = [];

let c = 0;
const input = readInput(INPUT_FILE, (line) => {
  if (line !== "") {
    c += parseInt(line);
  } else {
    g.push(c);
    c = 0;
  }
  return line;
});
// console.log(input);

// part1 ========================================
let PART_ONE = 0;
PART_ONE = Math.max(...g);
// count of highest sum
console.log("part one", PART_ONE);

// part2 ========================================
let PART_TWO = 0;
PART_TWO = g.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b);
// console.log(g.sort((a,b) => b-a))
console.log("part one", PART_TWO);

// can I tidy this up and make it faster
// api concept
// api.sumbit1(false);
// api.go1(PART_ONE); only logs if submit is true - default to false
