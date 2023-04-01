
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

const YOUR_KEY = ''
// get key after login
// inspect -> cookies -> copy value from session key

const NOW = new Date();
const IS_DECEMBER = NOW.getMonth() === 11;

let year = NOW.getFullYear();
let day = NOW.getDate();

let runMode = 0; // default geDay

// TODO: handle bad args input
// -- check if number
// -- year range is 2015 -> now 
// --- if year is this year and not december - throw error and end
// -- day range is 1 - 25

// TODO: setup npm scripts in package.json

// TODO: set up -A flag 

// handling args to set date to get
process.argv.forEach((value, index) => {
    if(index > 1 && value[0] === '-'){
        switch(value) {
            case '-y':
                if(!!process.argv[index+1]) {
                    year = process.argv[index+1];
                } else return 1;
                break;
            case '-d':
                if(!!process.argv[index+1]) {
                    day = process.argv[index+1];
                } else return 1;
                break;
            case '-A': // full year set up
                if(!!process.argv[index+1]) {
                    year = process.argv[index+1];
                    runMode = 1;
                } else return 1;
                break;
        }
    }
});

// HELPERS FUNCTIONS -----------------------


const dayPad = (d) => {
    return d.toString().length === 1 ? `0${d}` : d;
}

const buildYearPath = (y) => {
    return `${__dirname}/../${y}/`
}
const buildDirPath = (d, y) => {
    return `${__dirname}/../${y}/${dayPad(d)}/`
}

const buildURL = (d, y) => {
    return `https://adventofcode.com/${y}/day/${d}/input`
}

const handleGetError = (e) => {
    console.log(e);
    if(e.response.status === 500) {
        console.log("Bad Token try again");
    if(e.response.status === 404) {
        console.log("Bad URL " + e.response.url);
    }
    } else console.log(e);
}

// DO THE THING ----------------------------

const copyTemplate = (path) => {
    if(!fs.existsSync(path+'yes.js')) {
        fs.copyFileSync(
            __dirname+"/../templates/yes.js", 
            path+"yes.js"
        );
    }
}

const setupYearFolder = (y) => {
    const yearPath = buildYearPath(y);
    if(!fs.existsSync(yearPath)) {
        fs.mkdirSync(yearPath);
    }
}

const setupFolder = (path) => {
    // check exist folder
    if(!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}

const HEADERS = { Cookie: `session=${YOUR_KEY}` }
const axi = axios.create({ headers: HEADERS });

const getInput = (path, url) => {
    axi.get(url).then(res => {
        fs.writeFileSync(path+'input', res.data.toString());
        console.log(`Saved input to - ${path}`);
    })
    .catch(handleGetError);
    // what are the possible errors
    // - 500 bad token
}

/* 
    0 - get today - setup day
        error if not december - and ask for date input
        start code buffer for the day
    1 - setup year
*/

// DO THE THING 
// safe guard
// TODO: rethink this

if(!IS_DECEMBER && NOW.getFullYear() === year) {
    console.log("ERR - current month is not december, set the day and year to grab input from");
    return;
}

const runDay = (path, url) => {
    setupYearFolder(year);
    setupFolder(path);
    copyTemplate(path);
    getInput(path, url);
}

var monthD = 1;
const runMonthLoop = () => {
    setTimeout(() => {
        const DAY_PATH = buildDirPath(monthD, year); //?
        const URL = buildURL(monthD, year); //?
        
        runDay(DAY_PATH, URL);

        monthD++;
        if (monthD<26) runMonthLoop();
    }, 200);
}

switch(runMode){
    case 0: // get day
        console.log("========================================")
        console.log(`Grabbing input file for day${dayPad(day)}-${year}`)

        const DAY_PATH = buildDirPath(day, year);
        const URL = buildURL(day, year);

        runDay(DAY_PATH, URL);
        break;
    case 1: // setup past year year - require year input - not current year
        if(year === NOW.getFullYear()) {
            console("ERR - cannot be current year");
        } else {
            runMonthLoop();
            console.log(`SUcc - setup for ${year} completed`);
        }
        break;
    default:
        console.log("kek ok den");
}