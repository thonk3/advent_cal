const { sign } = require('crypto');
const { FILE } = require('dns');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();

// --- part 1
let ALPH = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ');


let prio = [];
let score = 0;


input.forEach(e=>{
    let a = new String(e).slice(0,e.length/2)
    let b = new String(e).slice(e.length/2)

    for(let i = 0; i < a.length; i++){
        if(b.includes(a[i])) {
            b=b.split('')
            b[b.indexOf(a[i])] = 0
            b=b.join('')

            if(!prio.includes(a[i])){
                prio.push(a[i]);
            }
        }


    }

    prio.forEach(e=>{
        score+= ALPH.indexOf(e)+1
    })

    prio = []

    // console.log(a)
    // console.log(b)

}
    // for each bag
    // get the list of priority items
    // get the priority score
)


console.log(input.length)

let cccc = 0; 

let groups = []
for(let i = 0; i<input.length; i=i+3){
    groups.push([input[i],input[i+2],input[i+1]])
}

groups.forEach(group => {
    let setA = group[0].split('');
    let setB = group[1].split('');
    let setC = group[2].split('');

    for(let i = 0; i < setA.length; i++) {
        let ccc = setA[i]
        if(setB.includes(ccc) && (setC.includes(ccc))) {
            score+= ALPH.indexOf(ccc)+1;
            break;
        }
    }
})

score