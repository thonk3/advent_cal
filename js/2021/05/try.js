const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);
let dim = 1000

// get input as an array of string
// seperated by new line
let input = fileReader(e=>{
    let cordSet = e.split(" -> ");
    
    let toCords = (cordStr) => {
        let c = cordStr.split(",");
        return {x: parseInt(c[0]), y:parseInt(c[1])};
    }

    return { from: toCords(cordSet[0]), to: toCords(cordSet[1]) }
});
let a1 = 0; a2= 0;

// part 1
/* 
    spec /pseudo

    data
        from: {x,y}
        to: {x,y}
*/
console.log(input[0])

// max map should be [1000][1000]
let seaMap = [];
for(let x = 0; x<dim; x++) {
    seaMap[x] = [];
    for(let y = 0; y<dim;y++) seaMap[x].push(0)
}

// draw map
// foreach cords set

input.forEach(e=> {

    // if vertical draw vertical
    if(e.from.x === e.to.x) {
        let smaller = e.from.y < e.to.y ? e.from.y : e.to.y
        let larger = e.from.y > e.to.y ? e.from.y : e.to.y

        for(let i = smaller; i <= larger; i++) seaMap[e.from.x][i]++
    }
    // if horizontal draw horizontal
    if(e.from.y === e.to.y) {
        let smaller = e.from.x < e.to.x ? e.from.x : e.to.x
        let larger = e.from.x > e.to.x ? e.from.x : e.to.x

        for(let i = smaller; i <= larger; i++) seaMap[i][e.from.y]++
    }

    // diagonal line check
    let rise = e.from.x - e.to.x
    let run = e.from.y - e.to.y
    if(Math.abs(rise/run)===1) {
        let smX = e.from.x < e.to.x ? e.from.x : e.to.x
        let lgX = e.from.x > e.to.x ? e.from.x : e.to.x
        let smY = e.from.y < e.to.y ? e.from.y : e.to.y
        let lgY = e.from.y > e.to.y ? e.from.y : e.to.y

        
        if(rise/run === 1) {
            for(let x=smX, y = smY; x<=lgX, y<=lgY; x++, y++) seaMap[x][y]++
        }
        if(rise/run === -1) {
            for(let x=smX, y = lgY; x<=lgX, y>=smY; x++, y--) seaMap[x][y]++
        }
        


        console.log("DRAW DIAG----------------------------------")
        // console.log(smX, smY, 'to', lgX, lgY)

        // for(let x=smX, y = smY; x<=lgX, y<=lgY; x++, y++) seaMap[x][y]++
    // }
})

// count more than 2 points assign to a1
for(let x = 0; x<dim; x++) {
    for(let y = 0; y<dim;y++) {
        if(seaMap[x][y] >= 2) a1++;
    }
}

// PRINT
for(let x = 0; x<dim; x++) {
    let line = ""
    for(let y = 0; y<dim;y++) {
        line += seaMap[y][x] + " "
    }
    console.log(line)
}




// part 2
/* 
    spec /pseudo


    NOT

    23509
*/



// let bb = roltate(boards[99]);
console.log("-------------------------")
console.log(a1)
console.log(a2)