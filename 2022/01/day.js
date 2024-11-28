const INPUT = require('path').resolve(__dirname, './input');
const DEMO = require('path').resolve(__dirname, './demo');

const MODE = 1
// string array by 
const fileReader = require('../../scripts/FileImport')(MODE ? INPUT : DEMO);

let input = fileReader((e) => {
    // parsing input

    return e
})

// UTILS

// OK GO
let sum = 0;
let count = 0;

let a
let b

// Part 1

// Part 2