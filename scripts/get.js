
const KEY = 'YOUR_KEY';

const NOW = new Date();
let year = NOW.getFullYear();
let day = NOW.getDate();
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


// DO THE THING ----------------------------

const axios = require('axios');

const url = 'https://adventofcode.com/2022/day/3/input'
const session = ''
const opt = {
    headers: { Cookie: `session=${session}` }
} 


let client = axios.create(opt);

client.get(url)
    .then(res => {

        console.log(res.data);
    })
    // what are the possible errors
    // status code 500 - bad token
    .catch(e => console.log(e));