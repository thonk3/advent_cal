const INPUT = require('path').resolve(__dirname, './input');
const DEMO = require('path').resolve(__dirname, './demo');

const MODE = 0

// parsing input from file to array
const fileReader = require('../../scripts/FileImport')(MODE ? INPUT : DEMO);

// parsing input
let input = fileReader((e) => {
    return e.split(',').map(e=>parseInt(e));
});

input =[...input[0]];
input.length//?

// UTILS

// Part 1
/* 
    parsing intcode, to run 

    start at index `0` finding opcode 1 or 2 or 99

    1 --add values from 
        index+1
        index+2
        store value at [index+3]
    2 --multiplication
    99--stop
*/

const OP1 = (currIndex) => {
    let valA = input[input[currIndex+1]]; 
    let valB = input[input[currIndex+2]];
    console.log(`pos${currIndex+1} + pos${currIndex+2} => pos${currIndex+3}`);
    console.log(`${valA}+${valB}=${valA+valB}`);


    let newArr = [...input]
    newArr[input[currIndex+3]] = valA+valB;
    input = [...newArr]; //?
}

const OP2 = (currIndex) => {
    let valA = input[input[currIndex+1]]; //?
    let valB = input[input[currIndex+2]]; //?
    console.log(`pos${currIndex+1} + pos${currIndex+2}`);
    console.log(`${valA}*${valB}=${valA*valB}`);

    input[input[currIndex+3]] = valA*valB;
}
input[0]//?
input[1]//?

// input[1] = 12;
// input[2] = 2;

let x = [];

for(let i=0; i<input.length; i++) {
    console.log("====================")
    console.log(i,"==", input[i], input);
    switch(input[i]) {
        case 99: 
            i = input.length;
            console.log("END");
        break;
        case 1: 
            OP1(i);
        break;
        case 2: 
            OP2(i);
        break;
    }

   console.log();
}

//input
console.log("egg====================")
input//?

/* 
|1|,1,1,4,99,5,6,0,99
p1 + p1 = p4
1+1= 2

1,|1|,1,4,2,5,6,0,99
p1 + p4 = p2
1 + 2 = 3


1,1,|2|,4,2,5,6,0,99
p4*p2=p5
2*2 = 



*/
input[0];//?
input[1];//?
console.log(input[0]);


// Stuck on case 4 - need to go through each step
// work input gives nan for index 1 might be something broken in the code

// Part 2