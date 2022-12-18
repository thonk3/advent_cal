const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(DEMO);

// get input as an array of string
// seperated by new line
let input = fileReader();
const MAX_G = 10;


input = input.map(e=>{
    let ll = e.split(' ');
    return {
        dir: ll[0],
        pos: Number(ll[1])
    }
})

let grid = [];
let visited = [];
for(let i = 0; i< MAX_G;i++) {
    let gridLine = new Array(MAX_G).fill('.');
    grid.push(gridLine);
}


const debugGrid = () => {
    grid.forEach(e => console.log(e.join('')));
}
const drawTail = (dir, prev) => {
    let x = HeadPoint.x - TailPoint.x;
    let y = HeadPoint.y - TailPoint.y;

    console.log(x,y)
    if(Math.abs(x) !== 1 && Math.abs(y) !== 1) {
        TailPoint = {...prev};
        grid[TailPoint.x][TailPoint.y] = 'T'
    }
}

/* 
    only moved head
*/
const move = (dir, pos) => {
    let current = {...HeadPoint}

    switch(dir){
        case 'R':
            HeadPoint.y++; ; break;
        case 'L':
            HeadPoint.y--; ; break;
        case 'U':
            HeadPoint.x--; ; break;
        case 'D':
            HeadPoint.x++ ; break;
    }

    grid[HeadPoint.x][HeadPoint.y] = 'H';
    drawTail(dir, current);
    // maybe remove this later
    // grid[current.x][current.y] = '.';

    // debugGrid();
    // console.log();

    if(pos!=1) return move(dir, pos-1);
}

// starting point is 4,4 the mid point
let HeadPoint = {x:4, y:4};
let TailPoint = {x:4, y:4};

grid[4][4] = 'H'

/* 
e.dir e.pos
 */

// move('R', 2)

input.forEach(e => {
    console.log('step', e.dir, e.pos)
    move(e.dir, e.pos);
    // debugGrid();
})

debugGrid()