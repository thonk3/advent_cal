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
let inputM = fileReader(e => {

})

// part 1
let aa = 0;
let bb = 0;
let cc = 0;

let a1 = 0;
let a2 = 0

// --
let seq = input[0].split(",").map(e=>parseInt(e))
let bData = input.splice(2)

let boards = [];

let board = {rows:[]};

while (bData.length != 0) { // for each line
    let line = bData.shift()

    // done with object
    if (line[0] === "\r") {   // if new line then add passport object / start new object
        boards.push(board);
        board = {rows:[]};
    } else {
        let row = line.split(/[ ,]+/)
        if(row[0] === '') row.shift();
        board.rows.push(row);
    }
}

console.log(seq.length)

const checkRow = (row, seq) => {
    return row.every(e => seq.includes(parseInt(e)))
}


// make a list of columns
const makeRows = (rows) => {
    let cols = [[],[],[],[],[]]

    rows.forEach((ee,ix) => {
        for(let i=0; i<5;i++) {
            cols[i][ix] = ee[i];
        }
    });
    return cols
}

// for each sequence increase
// check bingo


let seqIndex = 0;
let boardIndex = 0;
let bingoFl = false;

for(let i=4; i<seq.length; i++) {
    // for each number in sequence
    
    let testSeq = seq.slice(0, i);

    // console.log(testSeq)
    // check every board for bingo
    console.log("sequence", i , "----------")
    for(let bi=0; bi< boards.length;bi++){
        let b = boards[bi];

        // console.log("> ", bi)
        let rowCheck = b.rows.some(e=> {
            // console.log("row", e)
            // console.log("seq", testSeq)
            return checkRow(e, testSeq)
        });
        // console.log(rowCheck)

        let cols = makeRows(b.rows)
        let colCheck = cols.some(e=>checkRow(e,testSeq));

        if(rowCheck) {
            console.log("hi", i, "board", bi)
            break;
        }
    }

    // console.log(i, bingoFl)

    // if(bingoFl) {
    //     seqIndex = i;
    //     break;;
    // }
}

// console.log(seqIndex, boardIndex)
// 40, 26
// 2, 12
// let bboard = boards[1]
let bboard =   [
    [ 91, 51, 90, 93, 6 ],
    [ 77, 35, 13, 50, 17 ],
    [ 89, 75, 57, 39, 36 ],
    [ 92, 64, 56, 20, 78 ],
    [ 12, 80, 34, 69, 9 ]
  ]
let bseq = seq.slice(0,84)

console.log(bboard)

let nums = [...bboard.flat()].map(e=>parseInt(e))
// console.log(nums)

let tt = []
nums.forEach(e=>{
    if(!bseq.includes(e)) tt.push(e);
})

// console.log(tt)
let ttt = tt.reduce((a,b)=>a+b);

console.log(tt.reduce((a,b)=>a+b) * bseq[bseq.length-1])
// part 2


// \
console.log("--------------------")
console.log(a1)
console.log(a1)