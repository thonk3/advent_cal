
const fs = require('fs');

var input = []
const FILE = './input';
fs.readFile(FILE, 'utf-8', (err, data) => {
    input = data.split("\n").map(item => {
        let row = item.slice(0, 7).replace(/F/g, "0").replace(/B/g, "1");
        let col = item.slice(7)
            .replace(/R/g, "1")
            .replace(/L/g, "0");
        // R 1 L 0
        // console.log(col);
        return {
            row, col
        }
    });

    let max = 0;
    const form = (row, col) => row * 8 + col;

    let zz = []


    input.forEach(item => {
        let a = parseInt(item.row, 2);
        let b = parseInt(item.col, 2);

        max = max > form(a, b) ? max : form(a, b)
        //console.log(a)
        zz.push(form(a, b))
    })

    // console.log(input[input.length-1])

    // console.log(max)

    input = input.map(i =>
        form(parseInt(i.col, 2), parseInt(i.row, 2))
    )

    zz.sort((a, b) => a - b)

    for (let i = 0; i < zz.length - 1; i++)
        if (zz[i + 1] === zz[i] + 2) console.log(zz[i]);
    // prints out id of -1;
    // the real answer is +1

})

