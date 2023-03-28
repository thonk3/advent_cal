
const KEY = 'YOUR_KEY';

const NOW = new Date();
let year = 2022
// let year = NOW.getFullYear().toString();
let day = 5
// let day = NOW.getDate().toString();
const IS_DECEMBER = NOW.getMonth() === 11;

// handling args to set date to get
process.argv.forEach((value, index) => {
    if(index > 1 && value[0] === '-'){
        switch(value) {
            case '-a':
                let i = value[index+1];
                console.log('print a', i);
                break;
            case '-b':
                console.log('print another b');
                break;
            case '-c':
                console.log('print last c');
                break;
        }
    }
});

// print out what year is being retrieved
// by default get current day input

// if current month is not december ask user to set month and year to retrieve

// PAIN POINTS -----------------------------
// credentials, for now write a README on how to set your creds later

// HELPERS FUNCTIONS -----------------------
const dayPad = (d) => {
    return d.toString().length === 1 ? `0${d}` : d;
}

const buildFilePath = (d, y) => {
    return `${__dirname}/../${y}/${dayPad(d)}/input`
}

// DO THE THING ----------------------------

const axios = require('axios');
const fs = require('fs');

const url = `https://adventofcode.com/${year}/day/${day}/input`
const session = 'yourToken'

// TODO: better handlng bad token error
// TODO: set day year args
// TODO: handle bad args input

const opt = {
    headers: { Cookie: `session=${session}` }
} 


let client = axios.create(opt);

client.get(url)
    .then(res => {

        if(res.status === 200) {
            fs.writeFileSync(buildFilePath(day, year), res.data);
            console.log("saved to", buildFilePath(day, year));
        }
        console.log(typeof res.data);
        console.log(res.status)
        
        console.log("eee");
    })
    // what are the possible errors
    // status code 500 - bad token
    .catch(e => console.log(e));

    //TODO: if no dir - create dir