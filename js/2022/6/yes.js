const { sign } = require('crypto');
const { FILE } = require('dns');
const { stripVTControlCharacters } = require('util');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

// --- part 1
let string = input[0].split('')

let MAXLEN = 14

// console.log(string)

let holder = []

for (let i = 0; i < string.length-MAXLEN; i++) {
    const e = string[i];

    if(holder.length==MAXLEN) {
        let x = [];

        holder.forEach(ee => {
            if(!x.includes(ee)) {
                x.push(ee);
            }
        })

        if(x.length==MAXLEN) console.log(i)
    }

    if(holder.length<MAXLEN){
        holder.push(e);
    } else {
        holder.shift()
        holder.push(e);
    }
    console.log(holder)
    
}