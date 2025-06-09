const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

input = input.map(e => e.split('').map(ee => Number(ee)));

// theoretically 25
let count = 0;
const WIDE = input.length;
const DEEP = input[1].length;

const checkVisible = (x,y) => {
    let target = input[x][y]; //?
    let arr = [];

    // from left
    for(let i = 0; i <y; i++) {
        arr.push(input[x][i])
    }
    if(arr.every(e => e < target)) return true
    
    // from right
    arr = [];
    for(let i = y+1; i <WIDE; i++){
        arr.push(input[x][i])
    }
    if(arr.every(e => e < target)) return true

    // from top
    let vertArr = [];
    for(let i = 0; i < DEEP; i++) {
        vertArr.push(input[i][y]);
    }
    vertArr
    arr = vertArr.slice(0,x);
    if(arr.every(e => e < target)) return true

    // from bottom
    arr = vertArr.slice(x+1, DEEP)
    if(arr.every(e => e < target)) return true

    return false
}
/* 
    1,1 The top-left 5 is visible from the left and top. (It isn't visible from the right or bottom since other trees of height 5 are in the way.)
    1,2 The top-middle 5 is visible from the top and right.
    2,1 The left-middle 5 is visible, but only from the right.
    2,3 The right-middle 3 is visible from the right.
    3,2 In the bottom row, the middle 5 is visible, but the 3 and 4 are not.

*/
checkVisible(2,3); //?

for(let i = 1; i < WIDE-1; i++) {
    for(let ii = 1; ii < DEEP-1; ii++) {
        if(checkVisible(i,ii)) count++;
    }
}

count += DEEP+DEEP+WIDE-2+WIDE-2

console.log(count)

// Part 2
let scoreList = [];

const countTrees = (target, treesFrom) => {
    let count = 0;
    for(let i = 0; i < treesFrom.length; i++) {
        count++;
        if(treesFrom[i] >= target) break;
    }

    return count;
}

const getScore = (x, y) => {
    let score = 1;
    let target = input[x][y]; //?
    let arr = [];
    ;
    // from left
    for(let i = 0; i <y; i++) {
        arr.push(input[x][i])
    }
    arr.reverse();
    score *= countTrees(target, arr) //?


    // from right
    arr = [];
    for(let i = y+1; i <WIDE; i++){
        arr.push(input[x][i])
    }
    arr//
    score *= countTrees(target, arr) //?

    // from top
    let vertArr = [];
    for(let i = 0; i < DEEP; i++) {
        vertArr.push(input[i][y]);
    }
    arr = vertArr.slice(0,x);
    arr
    score *= countTrees(target, arr.reverse()) // ?

    // from bottom
    arr = vertArr.slice(x+1, DEEP)
    score *= countTrees(target, arr) 

    return score;
}

getScore(2,1) //?

for(let i = 1; i < WIDE-1; i++) {
    for(let ii = 1; ii < DEEP-1; ii++) {
        console.log(i, ii, getScore(i,ii))
        scoreList.push(getScore(i,ii));
    }
}

Math.max(...scoreList)//?