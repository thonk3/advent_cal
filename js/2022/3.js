// template last updated - 29 - 11 - 2024
import path, { parse } from "path";
import { fileURLToPath } from 'url';

import { readInput } from "../utils/utils.js";

// jank repeated path resolve code
const DAY = 2;  // EDIT ON NEW FILE
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT = path.resolve(__dirname, `./inputs/input_${DAY}`);
const DEMO = path.resolve(__dirname, `./inputs/demo_${DAY}`);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// move the path parsing to utils
export const DEMO_A_EXPECTED = 15;
export const DEMO_B_EXPECTED = 12;

// ----------------------------------------
// parse data to custom data structure
const parseFile = (INPUT_FILE) => {
  let out = [];
  const data = readInput(INPUT_FILE, (line, i, a) => {

  });

  return out;
}

// ----------------------------------------
export const solutionA = (IS_DEMO = false) => {

  return 0
}

// ----------------------------------------
export const solutionB = (IS_DEMO = false) => {
  return 0
}

// ----------------------------------------
export const testParse = (IS_DEMO = false) => parseFile(!IS_DEMO? INPUT : DEMO);