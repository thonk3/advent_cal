const { sign } = require('crypto');
const { FILE } = require('dns');
const { stripVTControlCharacters } = require('util');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')
const DEMO1 = require('path').resolve(__dirname,'./demo1')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

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

    if(l[1]) { // two cycle
        commands.push(0);
        commands.push(Number(l[1]));
    } else commands.push(0) // one cycle
})

const FIRST_CYCLE = 20;
const CYCLE_LOOP = 40;

let cycle = 0;
let x = 1;
let total = 0;

let read = false;

commands.forEach((e,i) => {
    // loop
    let c = i+2;
    x += e;

    if(c===20) {
        total += (x*c);
    }
    if((c-20)%40===0 && c!==20) {
        c//?
        total += (x*c);
    }
});

// part 2

let pixel = '###.....................................'
let midPos = 1;
let screen = new Array(6);
for (let i = 0; i < screen.length; i++) {
    screen[i] = new Array(40).fill('.')
}

console.log(screen)
let cc = [];

for(let i = 0; i < 6;i++) {
    let scc = []
    for(let ii = 0; ii < 40; ii++) {
        scc.push(commands.shift());
    }
    cc.push(scc);
}

const getPixelLine = () => {
    let pixel = '.'.repeat(40).split('');

    pixel[midPos] = '#';
    pixel[midPos+1] = '#';
    pixel[midPos-1] = '#';

    return pixel.join('');
}

cc.forEach((line, i) => {
    line.forEach((cycle, ii) => {
        let line = getPixelLine().split('');

        screen[i][ii] = line[ii];

        midPos += cycle;
        // thing
        
        console.log(i, ii, line[ii])
        // console.log(getPixelLine())
    })
})


screen.forEach(e=> console.log(e.join('')))


###....##.####.###..###..####.####..##..
#..#....#.#....#..#.#..#.#....#....#..#.
#..#....#.###..#..#.#..#.###..###..#....
###.....#.#....###..###..#....#....#....
#.#..#..#.#....#.#..#....#....#....#..#.
#..#..##..####.#..#.#....####.#.....##..