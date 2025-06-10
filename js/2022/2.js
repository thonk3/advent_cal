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
    let l = line.split(" ");
    let game = ['p1', 'p2'];

    switch(l[0]) {
      case 'A': game[0] = 'r';break;
      case 'B': game[0] = 'p';break;
      case 'C': game[0] = 's';break;
    }
    switch(l[1]) {
      case 'X': game[1] = 'r';break;
      case 'Y': game[1] = 'p';break;
      case 'Z': game[1] = 's';break;
    }

    out.push(game);
  });

  return out;
}

/**
 * game [p1,p2]
 * r p s
 * a b c
 * x y z
 */

// ----------------------------------------
// total score and highest
// r-1 p-2 s-3
// and outcome
// lost-0 draw-3 win-6
export const solutionA = (IS_DEMO = false) => {
  let p1 = 0, p2 = 0;
  const input = parseFile(!IS_DEMO? INPUT : DEMO);

  input.forEach(game => {

  })

  return p1 > p2 ? p1 : p2;
}

// ----------------------------------------
export const solutionB = (IS_DEMO = false) => {
  const input = parseFile(!IS_DEMO? INPUT : DEMO);
  return 0
}

// ----------------------------------------
export const testParse = (IS_DEMO = false) => parseFile(!IS_DEMO? INPUT : DEMO);