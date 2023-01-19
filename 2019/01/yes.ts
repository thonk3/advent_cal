const { sign } = require('crypto');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input: string[] = fileReader();


/* helpers */
function getFuel(mass: number): number {
    return Math.floor(mass/3) - 2;
}


/* 
    part A
    each module - find the fuel based on mass
        mass / 3
        round down
        subtract 2
*/

let total: number = 0;
let modules: number[] = input.map(e => parseInt(e));

modules.forEach((e:number ) => {
    let fuel: number = getFuel(e);
    console.log(fuel);
    total += fuel;
})

total//?

/* 
    part B
    calculate the fuel for fuel - add to total until it is 0 or negative
*/

let totalB: number = 0;
modules.forEach((e:number) => {
    let moduleTotal = e;
    while(moduleTotal > 0) {
        moduleTotal = getFuel(moduleTotal);

        totalB += moduleTotal > 0 ? moduleTotal : 0;
    }
})

totalB//?