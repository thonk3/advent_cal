const { sign } = require('crypto');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

// --- part 1
let a = []
let b = 0

input.forEach(line => {
    let opp = 0
    let me = 0

    switch(line.charAt(0)){
        case 'A': opp = 1;break;
        case 'B': opp = 2;break;
        case 'C': opp = 3;break;
    }

    switch(line.charAt(2)){
        case 'X': me = 1;break;
        case 'Y': me = 2;break;
        case 'Z': me = 3;break;
    }

    a.push({
        opp: Number(opp),
        me: Number(me)
    })
    // a.push({
    //     opp: line.charAt(0),
    //     me: line.charAt(2)
    // })
})

let score = 0;

a.forEach(e => {
    let game = e.opp - e.me;
    // draw
    if(e.opp===e.me) {score+=3;}
    // loss
    let loss = (e.opp===1 & e.me ===3) || (e.opp===2 & e.me ===1) || (e.opp===3 & e.me ===2)
    if(loss) {score+=0;}
    //win
    let win = (e.opp===1 & e.me ===2) || (e.opp===2 & e.me ===3) || (e.opp===3 & e.me ===1)
    if(win) {score+=6;}

    score += e.me

    // loss
})

// a.forEach(e => {
//     let me = e.me === 'X' ? 1 : e.me === 'Y' ? 2 : 3;

//     // draw

//     // loose

//     // win


//     score+= me
// })

console.log(

a[a.length-1]
)
console.log(score)

/*
    a x 1 rock
    b y 2 paper
    c z 3 sci

    r < p < s

    loss
    1 - 2 = -1
    2 - 3 = -1
    3 - 1 = 2

    win
    1 - 3 = -2
    2 - 1 = 1
    3 - 1 = 1

    0 lost
    3 draw
    6 won

    score = selected + ourcome
*/

// -- part 2

/**
 * X loose
 * y draw
 * z win
 */

let c = []

input.forEach(line => {
    let opp = 0
    let me = 0

    switch(line.charAt(0)){
        case 'A': opp = 1;break;
        case 'B': opp = 2;break;
        case 'C': opp = 3;break;
    }

    switch(line.charAt(2)){
        case 'X': me = 0;break;
        case 'Y': me = 3;break;
        case 'Z': me = 6;break;
    }

    c.push({
        opp: Number(opp),
        res: Number(me)
    })
})

score = 0;

c.forEach(e=> {
    score+=e.res;

    // if loose
    if(e.res==0){
        switch(e.opp){
            case 1: score += 3; break;
            case 2: score += 1; break;
            case 3: score += 2; break;
        }
    }

    // if draw
    if(e.res===3){
        score+=e.opp;
    }

    // if win
    if(e.res===6){
        switch(e.opp){
            case 1: score += 2; break;
            case 2: score += 3; break;
            case 3: score += 1; break;
        }
    }
})


    // a x 1 rock
    // b y 2 paper
    // c z 3 sci

score;