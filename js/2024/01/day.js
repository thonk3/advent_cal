// template last updated - 29 - 11 - 2024
const { readInput } = require('../../utils/readInput');
const INPUT = require('path').resolve(__dirname, './input');
const DEMO = require('path').resolve(__dirname, './demo');

const IS_DEMO = false
const INPUT_FILE = IS_DEMO ? DEMO : INPUT;

/* prompt notes

*/
// SETUP ========================================
// preset vars
let s = "";
let g = [], g1 = [], o = {}
let c = 0, sum = 0;

// pair smallest with first and second

const input = readInput(INPUT_FILE, (line) => {
    let l = line.split(" ").filter(ii => ii !== "");
    return [parseInt(l[0]), parseInt(l[1])];
}).forEach(e => {
    g.push(e[0])   
    g1.push(e[1])   
})
g.sort((a,b) =>a-b);
g1.sort((a,b) =>a-b);
let g2 = [];
for (let i = 0; i < g.length; i++) g2.push([g[i], g1[i]]);

// part1 ========================================
let PART_ONE = g2.reduce((a,b) => a + Math.abs(b[0]- b[1]), 0);
console.log(">p1\t", PART_ONE);

// part2 ========================================
let PART_TWO = g.reduce((a,b) => a+ (b*g1.filter(bb => bb==b).length),0)
console.log(">p2\t", PART_TWO);