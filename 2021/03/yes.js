const { Console } = require('console');

const FILEDIR = require('path').resolve(__dirname,'./input')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

// let map iput
// pass in a call back ~ work like map

// let thing = [0,0,0,0,0];
// let thing = [0,0,0,0,0,0,0,0,0,0,0,0];
// let mapInput = fileReader(line => {
//     let c = line.split("");

//     c.forEach((ee, i) => {
//         thing[i] += ee === "1"
//     });

//     return { dir: thing[0], pos: thing[1] };
// })

// input.forEach(e=> {
//     let c = e.split("");

//     c.forEach((ee, i) => {
//         thing[i] += ee === "1"
//     });
// })

// let fileLen = input.length
// console.log(fileLen)
// console.log(thing)

// let h = input.length/2
// let mostCommon = thing.map(e=> e>h? 1: 0)
// let leastCommon = thing.map(e=> e<h? 1: 0)



// let tob = (eee) => parseInt(eee,2)
// console.log(mostCommon.join(""))
// console.log(leastCommon.join(""))


// console.log(tob(mostCommon.join("")) * tob(leastCommon.join("")))
// console.log(tob(mostCommon.join("")))
// console.log(leastCommon.join(""))
/*

gamma rate
most common bit in corresponding position
ok most common bit in the position of the binary

epsilon rate
least commit bit 


gamma * epsilon
*/



/*
p2

life support rating

o2 gen * co2 scrub

filter most common
filter least common


keep num selected by criterea discard unmatch

*/

// file input

// let o2 = [...input]
// let co2 = [...input]

// let o2f = []
// for (let i = 0; i < mostCommon.length; i++) {
//     let c1 = 0;
//     o2.forEach(e=> {
//         if(e.split("")[i] == mostCommon[i]) c1++
//     })

//     o2f.push(c1)
//     console.log(mostCommon[i], c1)
// }


// console.log(o2)

// let co2f = [];
// for (let i = 0; i < mostCommon.length; i++) {
//     let c1 = 0;
//     o2.forEach(e=> {
//         if(e.split("")[i] != mostCommon[i]) c1++
//     })

//     co2f.push(c1);
// }

/*
let mostCommon = thing.map(e=> e>500? 1: 0)
let leastCommon = thing.map(e=> e<500? 1: 0)
*/

// console.log(thing)
// let halfLen = input.length/2
// let mostBin = thing.map(e=> e>halfLen?1:0).join("")

// console.log('==============================t')
// let o2f = []
// for (let i = 0; i < 12; i++) {
//     let c1 = 0;
//     o2.forEach(e=> {
//         if(e.split("")[i] == mostBin[i]) c1++
//     })

//     let newHalf = o2.length/2
//         let even = c1=== newHalf 
//         let most = c1> newHalf 
//         let least = c1< newHalf 

//     console.log(even, most, least, mostBin[i], c1)
//     console.log("before", o2.length)


//     o2 = o2.filter((bin,ii) => {

//         console.log(bin[i], mostBin[i])

//         if(even || most) return bin[i] == mostBin[i]
//         if(least) {
//             let rt = mostBin[i]===0? 1:0
//             return bin[i] == rt
//         }
// ;
//     })
//     console.log("after", o2.length)
//     console.log(o2)
//     if(o2.length === 1) return

//     console.log('--------------------')

// }

// console.log(mostBin)

// console.log(mostBin)
// // console.log(co2f)

// ------------------------------------------------------------------------------------------------------------------------

// let map iput
// pass in a call back ~ work like map
let strLen = input[0].length
// let count1 = [0,0,0,0,0];
let count1 = [0,0,0,0,0,0,0,0,0,0,0,0];

input.forEach(e=> {
    let c = e.split("");

    c.forEach((ee, i) => {
        count1[i] += ee === "1"
    });
})

let h = input.length/2

let mostCommon = count1.map(e=> e>h? 1: 0)
let leastCommon = count1.map(e=> e<h? 1: 0)

let arr2dec = (eee) => parseInt(eee.join(""),2)
console.log(arr2dec(mostCommon))
console.log(arr2dec(leastCommon))

/* 
    pseudo

    filter original list by criterea till 1 left
*/

// console.log(strLen)

let o2list = [...input]
let co2list = [...input]

console.log("--------------------")

for(let i =0; i < strLen;i++) {
    let cc1 = 0;

    // counting number of 1
    o2list.forEach(e => {
        if(e[i] == 1) cc1++
    })

    let cc0 = o2list.length-cc1

    o2list = o2list.filter(e => {
        if(cc1 == cc0) return e[i] == 1

        if(cc1 > cc0) {
            return e[i] == 1
        } else { // count 0 is higher
            return e[i] == 0
        }
    })

    console.log(o2list)
    if(o2list.length==1) break;
}

console.log("object")

let generator = o2list[0]

console.log("--------------------")

for(let i =0; i < strLen;i++) {
    let cc1 = 0;

    // counting number of 1
    co2list.forEach(e => {
        if(e[i] == 1) cc1++
    })

    let cc0 = co2list.length-cc1

    console.log(cc1, cc0)

    co2list = co2list.filter(e => {
        if(cc1 == cc0) return e[i] == 0

        if(cc1 < cc0) {
            return e[i] == 1
        } else { // count 0 is higher
            return e[i] == 0
        }
    })

    // console.log(co2list)
    if(co2list.length==1) break
}

let scrub = co2list[0]


console.log("p1---", mostCommon.join(""), leastCommon.join(""))
console.log("p2---", generator, scrub)