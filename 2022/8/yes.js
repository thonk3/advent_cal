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

// parsing
let commands = []
let command = null;
let output = [];

// command start with $, output does not

input.forEach(e => {
    let ee = e.replace(/(\r\n|\n|\r)/gm, "").split(' ');
    
    if(ee[0] === '$' && command) {
        if(output.length != 0) command.output = output;
        commands.push(command);
        command = null;
        output = [];
    }

    if(ee[0] === '$') {
        command = {
            cc: ee[1],
            dir: ee[2]
        }
    } else {
        output.push(e.replace(/(\r\n|\n|\r)/gm, ""));
    }


});

console.log(commands)

// --- part 1