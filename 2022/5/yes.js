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
let stacks = [
    ['G','T','R','W'],
    ['G','C','H','P','M','S','V','W'],
    ['C','L','T','S','G','M'],
    ['J','H','D','M','W','R','F'],
    ['P','Q','L','H','S','W','F','J'],
    ['P','J','D','N','F','M','S'],
    ['Z','B','D','F','G','C','S','J'],
    ['B','T','R'],
    ['H','N','W','L','C'],
]

let demoS = [
    ['Z','N'],
    ['M','C','D'],
    ['P']
]
let selecArr = stacks


let commands = input.map(e=> {
    let ss = e.split(' ')
    return {
        mv: Number(ss[1]),
        from: Number(ss[3])-1,
        to: Number(ss[5])-1
    }
})



// part 1
commands.forEach(e=> {
    let from = selecArr[e.from];
    let to = selecArr[e.to];
    
    for(let i = e.mv; i > 0; i--) {
        let c = from.pop();
        if(c) to.push(c)
    }
})


// part 2
commands.forEach(e=> {
    selecArr[e.to].push(...selecArr[e.from].splice(selecArr[e.from].length - e.mv));
})


console.log(selecArr)
selecArr.forEach(e=>console.log(e.pop()));

// console.log(stacks)