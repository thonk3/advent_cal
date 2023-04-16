const INPUT = require('path').resolve(__dirname, './input');
const DEMO = require('path').resolve(__dirname, './demo');

const MODE = 1

// parsing input from file to array
const fileReader = require('../../scripts/FileImport')(MODE ? INPUT : DEMO);

// parsing input
let input = fileReader((e) => {
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