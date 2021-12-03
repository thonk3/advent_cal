const FILEDIR = require('path').resolve(__dirname,'./input')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

// let map iput
// pass in a call back ~ work like map
let mapInput = fileReader(line => {
    let thing = line.split(" ");

    return { dir: thing[0], pos: thing[1] };
})


console.log(mapInput)

let up = 0, down = 0, fwd = 0;
let aim = 0, hoz = 0, dept = 0;

mapInput.forEach(e => {
    up += e.dir === 'up' ? parseInt(e.pos) : 0;
    down += e.dir === 'down' ? parseInt(e.pos) : 0;
    fwd += e.dir === 'forward' ? parseInt(e.pos) : 0;

    if(e.dir === 'down'){
        aim += parseInt(e.pos);
    }
    if(e.dir === 'up') {
        aim -= parseInt(e.pos);
    }
    if(e.dir === 'forward') {
        hoz += parseInt(e.pos);
        dept += parseInt(e.pos) * aim;
    }
    
})

console.log(up, down, fwd);
console.log( fwd * (down - up));

console.log(hoz * dept)