const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();
let a1 = 0; a2= 0;

// part 1

/* 
    spec /pseudo
*/
let fishes = input[0].split(",").map(e=>([parseInt(e)]))
console.log(fishes)
    
 for(let i=0;i<80;i++){
  // set
    for(let s =0)

 }
let a =0

for(let i=0;i<fishes.length;i++)
    a+=fishes[i].length

console.log(fishes[0])



// part 2
/* 
    spec /pseudo
*/


// let bb = roltate(boards[99]);
console.log("-------------------------")