
const axios = require('axios');
const fs = require('fs');

/* 
    dumb script to quickly grab AoC input data 
    
    TO USE
    run default - retrieve current day - current year
    node get.js

    run day and year flags
    node get.js -y [year] -d [aoc-day]

    run -retrieve input for whole year
    $ node get.js -A [year]
*/

const YOUR_KEY = 'your key'
// get key after login
// inspect -> cookies -> copy value from session key

const NOW = new Date();
const IS_DECEMBER = NOW.getMonth() === 11;

let year = NOW.getFullYear();
let day = NOW.getDate();

const URL = `https://adventofcode.com/${year}/day/${day}/input`

// TODO: handle bad args input
// -- check if number
// -- year range is 2015 -> now 
// --- if year is this year and not december - throw error and end
// -- day range is 1 - 25

// handling args to set date to get
process.argv.forEach((value, index) => {
    if(index > 1 && value[0] === '-'){
        switch(value) {
            case '-y':
                year = process.argv[index+1];
                break;
            case '-d':
                day = process.argv[index+1];
                break;
            case '-A': // full year set up
                console.log('print last c');
                break;
        }
    }
});

// HELPERS FUNCTIONS -----------------------
const dayPad = (d) => {
    return d.toString().length === 1 ? `0${d}` : d;
}

const buildDirPath = (d, y) => {
    return `${__dirname}/../${y}/${dayPad(d)}`
}

const handleGetError = (e) => {
    console.log(e);
    if(e.response.status === 500) {
        console.log("Bad Token try again");
    } else console.log(e);
}

// DO THE THING ----------------------------

const FILE_PATH = buildDirPath(day, year);

if(!IS_DECEMBER && NOW.getFullYear() === year) {
    console.log("ERR - current month is not december, set the day and year to grab input from");
    return;
}

console.log("========================================")
console.log(`Grabbing input file for day${dayPad(day)}-${year}`)

axios.create({
    headers: { Cookie: `session=${YOUR_KEY}` }
}).get(URL)
    .then(res => {
        // check exist folder
        if(!fs.existsSync(FILE_PATH)){
            fs.mkdirSync(FILE_PATH);
        }

        fs.writeFileSync(FILE_PATH+'/input', res.data);
        console.log(`Saved input to - ${FILE_PATH}`)
        console.log("OK glhf");
    })
    // what are the possible errors
    // - 500 bad token
    .catch(handleGetError);