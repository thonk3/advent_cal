// template last updated - 29 - 11 - 2024
import path from "path";
import { fileURLToPath } from 'url';

import { readInput } from "../utils/utils.js";

// jank repeated path resolve code
const DAY = 1;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT = path.resolve(__dirname, `./inputs/input_${DAY}`);
const DEMO = path.resolve(__dirname, `./inputs/demo_${DAY}`);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// move the path parsing to utils
export const DEMO_A_EXPECTED = 24000;
export const DEMO_B_EXPECTED = 45000;

// parse data to custom data structure
const parseFile = (INPUT_FILE) => {
  let c = 0, out = [];

  const data = readInput(INPUT_FILE, (line, i, a) => {
    if (line === "") {
      out.push(c); c = 0;
    } else if(i === a.length-1) { // last line
      out.push(c+parseInt(line));
    } else {
      c += parseInt(line);
    }
  });

  return out;
}

export const solutionA = (IS_DEMO = false) => {
  const input = parseFile(!IS_DEMO? INPUT : DEMO);

  // get max 
  return input.reduce((a,b) => a < b ? b : a, 0);
}

export const solutionB = (IS_DEMO = false) => {
  const input = parseFile(!IS_DEMO? INPUT : DEMO);

  return input.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b);
}

// TODO: api concept
// api.sumbit1(false);
// api.go1(PART_ONE); only logs if submit is true - default to false
