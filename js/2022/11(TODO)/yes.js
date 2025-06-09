const { min } = require('mathjs');
const math = require('mathjs');

const FILEDIR = require('path').resolve(__dirname,'./input')
const DEMO = require('path').resolve(__dirname,'./demo')

// pass the path of the input file
const fileReader = require('../FileImport')(FILEDIR);

// get input as an array of string
// seperated by new line
let input = fileReader();
let mInput = [];

let group = []
let count = 0;

input.forEach(e=> {
    if(e==='') {
        mInput.push(group);
        group = []
    } else {
        group.push(e.trim());
    }
})


/* 
0   mid
1   starting list
2   calculation
3   testDivisible
4   true
5   false
*/
mInput = mInput.map(e=>{
    let mID = Number(e[0].split(' ')[1])
    let starting = e[1].split(',')
    let calc = e[2].trim()
    let testDivisible = Number(e[3])
    let trueThrowTo = Number(e[4].split(' ')[1]);
    let falseThrowTo = Number(e[5].split(' ')[1]);


    return {
        mID, 
        starting: starting.map(e=>Number(e)),
        calc,
        testDivisible,
        trueThrowTo,
        falseThrowTo,
        inspect: 0
    }
})

console.log(mInput[0]);

let inspect = []
let debug = (outFlag) => {
    mInput.forEach(e => {
        if(!outFlag) {
            console.log("Monke", e.mID, e.starting)
        } else {
            inspect.push(e.inspect)
            console.log("Monke", e.mID, e.inspect)
        }
    })
    
    if(outFlag) {
        console.log(math.multiply(...inspect.sort((a,b) =>a-b).slice(-2)))//?
    }
}

let modulo = 1;
mInput.forEach(e=> modulo *= e.testDivisible);

let yeetMonke = (monke, monkeList, cycle) => {
    let {starting, calc, testDivisible, falseThrowTo, trueThrowTo} = monke;

    starting.forEach(item => {
        monke.inspect++;
        let iii = doCalc(item, calc);

        if(iii%testDivisible===0) {
            monkeList[trueThrowTo].starting.push(iii);
        } else monkeList[falseThrowTo].starting.push(iii);
    })

    monkeList[monke.mID].starting = [];
}

let doCalc = (val, calcString) => {
    let res = math.evaluate(calcString, {old:val})
    return math.chain(res).mod(modulo).done(); 
}


// yeetMonke(mInput[0], mInput);

for (let i = 0; i < 10000; i++) {
    mInput.forEach(e=> yeetMonke(e, mInput, i));
}

debug(true);


// for each monkey
    // for each holding items
    // item calculate / then divide 3
    // check divisible
        // throw


