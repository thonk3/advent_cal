const FILEDIR = require('path').resolve(__dirname,'./input')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

// let map iput
// pass in a call back ~ work like map
let mapInput = fileReader(line => {
    // do things like array.map()
})



