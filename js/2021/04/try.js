const { strictEqual } = require('assert');
const { Console } = require('console');
const { FILE } = require('dns');
const { clearScreenDown } = require('readline');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();
let a1 = 0; a2= 0;

let egg = [...input]
let seq = egg.shift().split(",").map(e=>parseInt(e));
egg.shift()

// creating boards
// array of rows each board to check and rotate/ check again
let boards = [];
let board = [];

while(egg.length!=0){
    let line = egg.shift().replace(/[\n\r]+/g, '');
    // console.log(line, Boolean(line))

    if(!line) {
        boards.push(board);
        board = [];
    } else {
        let row = line.split(/[ ,]+/).map(e=>parseInt(e))
        if(isNaN(row[0])) row.shift();
        board.push(row);
    }
}

// boards are set

// helper functions
const checkRow = (row, seq) => row.every(e=>seq.includes(parseInt(e)))

const roltate = (board) => {
    let cols = [[],[],[],[],[]]

    try{

    board.forEach((ee,ix) => {
        for(let i=0; i<5;i++) {
            cols[i][ix] = ee[i];
        }
    });
} catch {
    console.log(board)
}
    return cols
}

let bingoFlag = false;
// search for board
while(boards.length != 0) {
    console.log("go again", boards.length)
    // if (boards.length == 2)
for(let i=3;i < seq.length; i++) {
    let testSeq = seq.slice(0, i)

    for(let ii = 0; ii <boards.length; ii++) {
        let b = boards[ii];
        // console.log(" > len", boards.length )
        if(boards.length == 2) {
            console.log("reading", ii, b);
        }
        let cols = roltate(b)

        let rowCheck = b.some(e=> checkRow(e, testSeq));
        let colCheck = cols.some(e=> checkRow(e, testSeq));

        if(colCheck || rowCheck) {
            // console.log(b)
            // console.log(colCheck, rowCheck)
            console.log("board", ii, "seq", i);
            boards.splice(ii, 1);
            bingoFlag = true;
            break;
        }
    }

    if(bingoFlag) {
        break;
    }
}
    console.log("----------", boards.length)
    bingoFlag = false;
}

console.log(boards)

// console.log(boards.length)


// let bb = roltate(boards[99]);
console.log("-------------------------")
console.log(a1)
console.log(a2)