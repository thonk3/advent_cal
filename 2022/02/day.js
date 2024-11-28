// template last updated - 29 - 11 - 2024
const { readInput } = require("../../src/utils/ReadInput");
const INPUT = require("path").resolve(__dirname, "./input");
const DEMO = require("path").resolve(__dirname, "./demo");

const IS_DEMO = false;
const INPUT_FILE = IS_DEMO ? DEMO : INPUT;

/* prompt notes
    rps 
    abc first col - op
    xyz second col - me

    score - score of shape
    rps - 1 2 3

    and outcome
    0 loose 3 draw 6 win

*/
// SETUP ========================================
// preset vars
let s = "";
let g = [], o = {};
let c = 0, sum = 0;

// map input to score + add function to calc win
const input = readInput(INPUT_FILE, (line) => {
    // return line
    let gg = { op: 0, me: 0};
    switch(line.charAt(0)) {
        case 'A': gg.op = 1; break;
        case 'B': gg.op = 2; break;
        case 'C': gg.op = 3; break;
    }
    switch(line.charAt(2)) {
        case 'X': gg.me = 1; gg.out = 0; break;
        case 'Y': gg.me = 2; gg.out = 3; break;
        case 'Z': gg.me = 3; gg.out = 6; break;
    }


    return gg;
});
// console.log(input);

// part1 ========================================
let PART_ONE = input
    .map((gg, i) => {
        let s = 0;

    // 0 loose 3 draw 6 win
        switch(gg.me){
            case 1:  // rock
                switch(gg.op){
                    case 1: s= 3;break;
                    case 2: s= 0;break;
                    case 3: s= 6;break;}
            break;
            case 2: // pp
                switch(gg.op){
                    case 1: s= 6;break; 
                    case 2: s= 3;break; 
                    case 3: s= 0;break; }
                break;
            case 3: // ss
                switch(gg.op){
                    case 1: s= 0; break; 
                    case 2: s= 6; break; 
                    case 3: s= 3; break; }
            break;
        }

        // console.log("(",i,")", "-", gg.me, gg.op, "-", s)
        return gg.me + s;
    })
    .reduce((a,b) => a+b);
console.log(">part one\t", PART_ONE);

// part2 ========================================
let PART_TWO = input.map((gg, i) => {
    let s = 0
        switch(gg.out){ // r p s
            case 0:  // loose
                switch(gg.op){
                    case 1: s= 3;break; // 
                    case 2: s= 1;break;
                    case 3: s= 2;break;}
            break;
            case 3: // draw
                switch(gg.op){
                    case 1: s= 1;break; 
                    case 2: s= 2;break; 
                    case 3: s= 3;break; }
                break;
            case 6: // win
                switch(gg.op){
                    case 1: s= 2; break; 
                    case 2: s= 3; break; 
                    case 3: s= 1; break; }
            break;
        }
    return s + gg.out;
}).reduce((a,b) => a+b);
/**
 * col2 means ending condition
 * xyz loose draw win
 * 
 * col1 - op move
 * find move to reach desired
 */
console.log(">part two\t", PART_TWO);



// only problem is pretty much im bad
// might be nice to pre write callback functions for
// reduce total
// filter asc -desc