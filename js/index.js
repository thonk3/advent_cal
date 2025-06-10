import * as solutions from './utils/solutionExports.js';
import { assert } from "./utils/utils.js";

// CODE AND SET PARAMS
const YEAR = "year2022", DAY = "day1"
const RUN_A = true, RUN_B = true;

const play = solutions[YEAR][DAY]

// run part A
if(RUN_A) {
  console.log(`${YEAR}-${DAY}-partA`);
  if(assert(play.solutionA(true), play.DEMO_A_EXPECTED))
    console.log(">\t", play.solutionA());
}

// run part B
if(RUN_B) {
  console.log(`${YEAR}-${DAY}-partB`);
  if(assert(play.solutionB(true), play.DEMO_B_EXPECTED))
    console.log(">\t", play.solutionB());
}

