const { sign } = require('crypto');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();


/* 
    part A
    each module - find the fuel based on mass
        mass / 3
        round down
        subtract 2
*/

let total = 0;