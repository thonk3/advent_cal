const { sign } = require('crypto');
const { FILE } = require('dns');
const { stripVTControlCharacters } = require('util');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(DEMO);

// get input as an array of string
// seperated by new line
let input = fileReader();

/* 
    array of numbers
    0 - noop 
    pos/negative val addx
*/
let commands = []
input.forEach(e => {
    let l = e.split(' ');

    if(l[1]) {
        commands.push(Number(l[1]));
        commands.push(0);
    } else commands.push(0)
})

const FIRST_CYCLE = 20;
const CYCLE_LOOP = 40;

let cycle = 0;
let x = 1;
let total = 0;

let read = false;

commands.forEach((e,i) => {
    let cycle = i+1;
    
    if(e!==0)
    console.log(e);

    // NOT WORKING - 1 off error somewhere

    if(cycle === 20) {
        total += x* cycle;
        console.log(i+1,'-', x, x*cycle)
    }
    if((cycle-20)%40 ===0 && cycle!==20) {
        total += x* cycle;
        console.log(i+1,'-', x, x*cycle)
    }


    x+=e;
});


console.log(commands.length-1);
console.log(x);

console.log(total);

