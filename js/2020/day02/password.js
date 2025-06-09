const FILE = './input';
const fileImport = require('../FileImport').default(FILE);

const parsedInput = fileImport.parse(line => {
    let parts = line.split(" ");

    return {
        min: parseInt(parts[0].split("-")[0]),
        max: parseInt(parts[0].split("-")[1]),
        char: parts[1][0],
        check: parts[2]
    }
})

let valid1 = 0; valid2 = 0;
let maxVal = 0;
let minVal = 0;
// ======================================================================
// solution part 1
parsedInput.forEach(pass => {
    // part 1
    let len = [...pass.check].filter(char => char === pass.char).length;
    if (len <= pass.max && len >= pass.min) valid1++;
    // ======================================================================
    // part 2
    let str = [...pass.check];
    let char = pass.char; c1 = str[pass.min - 1], c2 = str[pass.max - 1];
    let flag = false;

    if (c1 === char && c1 !== c2) valid2++;
    if (c2 === char && c1 !== c2) valid2++;
})

console.log("Part 1:", valid1);
console.log("Part 2:", valid2)
