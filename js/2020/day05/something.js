const FILE = './input';
const fi = require('../FileImport').default(FILE);

/* this be binary problem */

let input = fi.parse(item => {
    let row = item.slice(0, 7).replace(/F/g, "0").replace(/B/g, "1");
    let col = item.slice(7).replace(/R/g, "1").replace(/L/g, "0");
    // R 1 L 0
    return { row, col }
})

// part 1
let max = 0;
const form = (row, col) => row * 8 + col;
let zz = []

input.forEach(item => {
    let a = parseInt(item.row, 2);
    let b = parseInt(item.col, 2);

    max = max > form(a, b) ? max : form(a, b)
    zz.push(form(a, b))
})

console.log("part 1:", max)


// part 2
input = input.map(i =>
    form(parseInt(i.col, 2), parseInt(i.row, 2)))

zz.sort((a, b) => a - b)

for (let i = 0; i < zz.length - 1; i++)
    if (zz[i + 1] === zz[i] + 2) console.log("part 2:", zz[i] + 1);



