const { sign } = require('crypto');
const { FILE } = require('dns');
const { setMaxIdleHTTPParsers } = require('http');
const { stripVTControlCharacters } = require('util');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(DEMO);

// get input as an array of string
// seperated by new line
let input = fileReader();
let mInput = [];

let group = []
let count = 0;

input.forEach(e=> {
    if(e==='') {
        mInput.push(group);
        group = []
    } else {
        group.push(e.trim());
    }
})

console.log(mInput);

/* 
0   mid
1   starting list
2   calculation
3   testDivisible
4   true
5   false
*/
mInput = mInput.map(e=>{
    let mID = Number(e[0].split(' ')[1]);
    let starting = e[1].split(',');
    let calc = {
        sym: e[2].split(' ')[0],
        val: Number(e[2].split(' ')[1]),
    }
    let testDivisible = Number(e[3])
    let trueThrowTo = Number(e[4].split(' ')[1]);
    let falseThrowTo = Number(e[5].split(' ')[1]);


    return {
        mID, 
        starting: starting.map(e=>Number(e)),
        calc,
        testDivisible,
        trueThrowTo,
        falseThrowTo
    }
})

console.log(mInput);

console.log(mInput)