const FILEDIR = require('path').resolve(__dirname,'./input')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

// let map iput
// pass in a call back ~ work like map
let mapInput = fileReader(line => {
    return parseInt(line)
})

let nums = mapInput.sort((a,b) => a - b)



let d1 = 0, d2 = 0, d3 = 0;

console.log(nums)
/*
for(let i = 1; i < nums.length; i++) {
    switch(nums[i] - nums[i-1]) {
        case 1:
            d1++;
            break;
        case 2:
            d2++;
            break;
        case 3:
            d3++;
            break;
    }
    console.log(nums[i] - nums[i-1])
}*/
for(let i = 1; i < nums.length; i++) {
    switch(nums[i] - nums[i-1]) {
        case 1:
            d1++;
            break;
        case 2:
            d2++;
            break;
        case 3:
            d3++;
            break;
    }
    console.log(nums[i] - nums[i-1])
}

// why the fuck its + 1 again
console.log((d1+1)*(d3+1))
console.log(d1,d2,d3)


/*
0 1 2 3 5 7



0 1 2 3 5 7
    3 5 7
  2 3 5 7
    5 7
  3 5 7 
*/