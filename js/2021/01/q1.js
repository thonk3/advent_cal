
const path = require('path')
// const FILE = './input';
// const fileImport = require('../FileImport').default(FILE);

console.log(path.resolve('./input'))

const parsedInput = fileImport.parse(line => {
    // let parts = line.split(" ");

    return parseInt(line)
})

console.log(fileImport.read())


// let c = 0 
// let a = 0
// for(let i = 1; i < parsedInput.length; i++) {
//     console.log("---")
//     console.log(`index ${i} with ${i-1}`)
//     if(parsedInput[i] > parsedInput[i-1]) c++
//     a++

//     console.log(`index ${parsedInput[i]} with ${parsedInput[i-1]}, ${c}`)
// }
// console.log(c, a)
// console.log(parsedInput.length)
// fucking + 1


// part 2
// create sliding window
let slide = []
for(let i = 0; i < parsedInput.length - 2; i++) {
    slide.push(parsedInput[i] + parsedInput[i+1] + parsedInput[i+2]) 
}

console.log(slide[1997])

let c = 0, a = 0;
for(let i = 1; i < slide.length; i++) {
    console.log("---")
    console.log(`index ${i} with ${i-1}`)

    if(slide[i] > slide[i-1]) c++
    a++

    console.log(`index ${slide[i]} with ${slide[i-1]}, ${c}`)
}
console.log(c, a)
console.log(parsedInput.length)