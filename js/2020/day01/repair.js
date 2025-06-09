const FILE = './report_input';
const fileImport = require('../FileImport').default(FILE);

/* day 1: simple maths problem */
let report = fileImport.parse(n => parseInt(n));
console.log(report); console.log();


let part1 = [0, 0];
let part2 = [0, 0, 0];

// find 2 number add to 2020 and find the multiplication
report.forEach(first => {
    report.forEach(sec => {
        if (first + sec == 2020) { // part1 solution
            part1[0] = first;
            part1[1] = sec;
        }

        report.forEach(third => {   // part2 solution
            if (first + sec + third === 2020) {
                part2[0] = first;
                part2[1] = sec;
                part2[2] = third;
            }
        })
    })
})

console.log(part1);
console.log(part1[0] * part1[1]);
console.log();
// part 2
console.log(part2);
console.log(part2[0]* part2[1]* part2[2]);