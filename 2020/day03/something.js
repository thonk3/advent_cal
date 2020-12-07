const fs = require('fs');

var input = []
const FILE = './input';
fs.readFile(FILE, 'utf-8', (err, data) => {
    // split each line
    // console.log(object)
    input = data.split("\n");
    // input = input.map(i => {
    //     return i.repeat(33);
    // })

    // let valid = 0;
    // let r = 0
    // // ======================================================================
    // for(let down = 0; down < input.length; down+=2) {
    //     let line = [...input[down].toString()];

    //     if(line[r%line.length] === '#') valid++;
        
    //     console.log(down, r%line.length)

    //     r+=2;

    // }
    // ======================================================================
    // solution 2
    let slope = [
        { r: 1, d:1},
        { r: 3, d:1},
        { r: 5, d:1},
        { r: 7, d:1},
        { r: 1, d:2},
    ]

    let trees = []

    slope.forEach(slope => {
        let valid = 0;
        let right = slope.r, d = slope.d;
        let r = 0;

        for(let i = 0; i < input.length; i+=d) {
            let line = [...input[i].toString()];
            if(line[r%line.length] === '#') valid++;
            r+=right;
        }

        console.log(valid);
        trees.push(valid)
    })

    console.log(trees);
    console.log(trees.reduce((a,b) => a*b));
})


