const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// UTILS
const drawPath = (xOrY, anchor, from, to) => {
    let larger = from >= to ? from : to;
    let smaller = to <= from ? to : from;

    for(let i = smaller; i <= larger; i++) {
        if(xOrY === 'y') { // draw y path
            mapThing[anchor][i] = '#'
        } else {
            mapThing[i][anchor] = '#'
        }
    }
}



// get input as an array of string
// seperated by new line
let input = fileReader();

let pathSets = [];
let maxX = 0;
let maxY = 0; 
let minX = 999;
let minY = 999;

input.forEach(e =>{
    let path = [];
    let cordsString = e.replace(/(\r\n|\n|\r)/gm, "").split('->');
    
    cordsString.forEach(cords => {{
        let x = Number(cords.split(',')[0]);
        let y = Number(cords.split(',')[1]);

        maxX = x >= maxX ? x : maxX;
        maxY = y >= maxY ? y : maxY;
        minY = y <= minY ? y : minY;
        minX = x <= minX ? x : minX;

        path.push({x,y});
    }})

    pathSets.push(path)
})


// y Depth
// x wide
let p2XWidth = maxX+500;

// map of diagram /1d array of strings
let mapThing = new Array(maxY + 4);
let depth = '.'.repeat(p2XWidth);
let base = '#'.repeat(p2XWidth);
mapThing.fill(depth)
mapThing[maxY + 2] = base; 
mapThing = mapThing.map(line => line.split(''));

// length is Y
// depth is X


// drawing rock paths
pathSets.forEach(pathsArr => {
    for(let i = 1; i < pathsArr.length; i++) {
        let setA = pathsArr[i-1];
        let setB = pathsArr[i];
        // x walk (ya === yb)
        if(setA.y === setB.y) {
            drawPath('y',setA.y, setA.x, setB.x);
        }
        // y walk (xa === xb)
        if(setA.x === setB.x) {
            drawPath('x',setA.x, setA.y, setB.y);
        }
    }
})

// recursive drop
// max call stack size exceeded
const drop = (x, y) => {
    console.log(x,y)
    // if under is blocked
    let blockUnderChar = mapThing[y+1][x];
    let blockUnderLeftChar = mapThing [y+1][x-1]
    let blockUnderRightChar = mapThing [y+1][x+1];

    let blockUnder = blockUnderChar === '#' || blockUnderChar === 'o' 
    let blockUnderLeft = blockUnderLeftChar === '#' || blockUnderLeftChar === 'o' 
    let blockUnderRight = blockUnderRightChar === '#' || blockUnderRightChar === 'o'
    if(!blockUnder) { // drop straight down
        if(y < maxY - 1)
        return drop(x, y+1);
    } else if(blockUnder && !blockUnderLeft) {
        return drop(x-1, y);
    } else if(blockUnder && blockUnderLeft && !blockUnderRight) {
        return drop(x+1, y-1);

    // drop down left

    // drop down right
    } else { // drop down by 1 blockunder
        console.log(x, y)
        mapThing[y][x] = 'o';
        return;
    }
}

// part 1 function
const dropItterative = () => {
    let x = 500;
    let y = 0;

    while(y !== maxY+2) {
        let blockUnderChar = mapThing[y+1][x];
        let blockUnderLeftChar = mapThing [y+1][x-1]
        let blockUnderRightChar = mapThing [y+1][x+1];

        let blockUnder = blockUnderChar === '#' || blockUnderChar === 'o' 
        let blockUnderLeft = blockUnderLeftChar === '#' || blockUnderLeftChar === 'o' 
        let blockUnderRight = blockUnderRightChar === '#' || blockUnderRightChar === 'o'

        if(!blockUnder) {
            mapThing[y][x] = '~';
            y++;
        } else if(blockUnder && !blockUnderLeft) {
            mapThing[y][x] = '~';
            x--;
            y++;
        } else if(blockUnder && blockUnderLeft && !blockUnderRight) {
            mapThing[y][x] = '~';
            x++;
            y++;
        } else {
            mapThing[y][x] = 'o';
            break;
        }
    }

}

// draw the diagram
const DROP_X = 500-1; // 500,0

// part 1 ok
for(let i = 0; i < 30000; i++) {
    dropItterative()
}

// part 2 - draw infinite base

let c = 0;
mapThing.forEach(line => {
    line.forEach(e => {
        if(e ==='o') c++
    })
})
console.log(c)

// drop sand

    // if under is empty (y+1)
    // drop(x,y)
    
    // recursive end 
    // bottom blocked

    // current position
// }

mapThing.forEach((e,i) => {
    console.log(e.join(''))
})





