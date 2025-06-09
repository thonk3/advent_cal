const { min } = require('mathjs');
const math = require('mathjs');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(DEMO);

// get input as an array of string
// seperated by new line
let input = fileReader();

let groups = []

let gr = []
input.forEach(e => {

    if(e!== '') {
        gr.push(JSON.parse(e));
    } else {
        groups.push(gr);
        gr = [];
    }
})

groups = groups.map(e=> ({
    a: e[0],
    b: e[1]
}))

let count = 0;

// part 1 right order

const testPair = (a,b) => {
    console.log(a,b);
}

/* 
    a right
    b left

    left side should be smaller
    left side should have less values
*/
groups.forEach((e,i) => {
    let {a,b} = e;

    let flag = true;
    // how do i iterate 
    console.log(a, b)

    // iterate right because its suppose to be higher
    // for(let ii = 0; ii < b.length; ii++) {
    //     testPair(a[ii],b[ii]);
    // }
    
    if(flag) {
        count++
    }
    // console.log(i+1, '-', flag, e);
})