const { sign } = require('crypto');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();


let elves = [];

let sum = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i]){
        sum += Number(input[i]);
    }
    else {
        elves.push(sum)
        sum = 0;
    }
}

console.log(Math.max(...elves))
console.log(elves)

/// part 2
elves = elves.sort((a,b)=>b-a);
elves
console.log(elves[0]+elves[1]+elves[2])