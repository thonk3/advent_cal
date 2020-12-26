const FILE = './input';
const fileImport = require('../FileImport').default(FILE);
const fs = require('fs');

const parsedInput = fileImport.parse(line => {
    let parts = line.split(" ");

    return {
        min: parseInt(parts[0].split("-")[0]),
        max: parseInt(parts[0].split("-")[1]),
        char: parts[1][0],
        check: parts[2]
    }
})

    let valid = 0;

    let maxVal = 0;
    let minVal = 0;
    // ======================================================================
    // solution part 1
    input.forEach(pass => {
        let len = [...pass.check].filter(char => char === pass.char).length;

        if(len <= pass.max && len >= pass.min) valid++;
    })

    console.log(valid);

/*

var input = []
fs.readFile(FILE, 'utf-8', (err, data) => {
    input = data.split("\n").map(line => {
        let parts = line.split(" ");

        return {
            min: parseInt(parts[0].split("-")[0]),
            max: parseInt(parts[0].split("-")[1]),
            char: parts[1][0],
            check: parts[2]
        }
    });

    let valid = 0;

    let maxVal = 0;
    let minVal = 0;
    // ======================================================================
    // solution part 1
    // input.forEach(pass => {
    //     let len = [...pass.check].filter(char => char === pass.char).length;

    //     if(len <= pass.max && len >= pass.min) valid++;
    // })

    // ======================================================================
    // solution part 2
    input.forEach(pass => {
        let str = [...pass.check];
        let char = pass.char; c1 = str[pass.min -1], c2 = str[pass.max -1];
        let flag = false;

        if(c1 === char && c1 !== c2) valid++;
        if(c2 === char && c1 !== c2) valid++;
    })


    console.log("valid", valid);


})

// let input = [];
// readline.on('line', (line) => {
//     input.push(line.toString());
//     // console.log(typeof line);
// })

// console.log(input[0]);
console.log(input)

*/