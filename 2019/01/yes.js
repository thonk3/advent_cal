const INPUT = require('path').resolve(__dirname, './input');
const DEMO = require('path').resolve(__dirname, './demo');

const MODE = 1

// parsing input from file to array
const fileReader = require('../../scripts/FileImport')(MODE ? INPUT : DEMO);

// parsing input
let input = fileReader((e) => {
    return parseInt(e);
})


// UTILS
// console.log(input);

// OK GO
let sum = 0;
let count = 0;

let a
let b

// Part 1
/* 
    Fuel counting thing
    required fuel for each module is abased on its **mass**
    divide the mass by 3, round down subtract two

    add it all together at the end
*/
let sumA = input
    .map(e => {
        // div3 round down
        return Math.floor(e/3) - 2;
    })
    .reduce((a, b) => a+b, 0);

console.log(sumA)

// Part 2
/* 
    fuel requires fuel
*/