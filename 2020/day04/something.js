const FILE = './input';
const fi = require('../FileImport').default(FILE);

/* regex problem */

let input = fi.read();
let list = [], pass = {};

// generating objects
while (input.length != 0) {
    let line = input.shift().split(" ");

    // done with object
    if (line[0] === "") {
        list.push(pass);
        pass = {};
    } else {
        line.forEach(phrase => {
            let key = phrase.split(":")[0],
                val = phrase.split(":")[1];
            pass = { ...pass, [key]: val, }
        })
    }
}

// part 1
let part1 = 0; v2 = 0;
list.forEach(item => {
    let passField = Object.keys(item);
    let vvv = ['ecl', 'iyr', 'hgt', 'byr', 'hcl', 'eyr', 'pid'];

    if (passField.length === 8) part1++;
    else if (passField.length === 7)
        if (passField.every(item => vvv.includes(item))) part1++;

});


// part 2

const checkValid = pass => {
    if ('byr' in pass) {
        let isnum = /^\d+$/.test(pass.byr);
        if (isnum) {
            let n = parseInt(pass.byr);
            if (n > 2002 || n < 1920) return false;
        } else return false;
    }
    if ('iyr' in pass) {
        let isnum = /^\d+$/.test(pass.iyr);
        if (isnum) {
            let n = parseInt(pass.iyr);
            if (n > 2020 || n < 2010) return false;
        } else return false;
    }
    if ('eyr' in pass) {
        let isnum = /^\d+$/.test(pass.eyr);
        if (isnum) {
            let n = parseInt(pass.eyr);
            if (n > 2030 || n < 2020) return false;
        } else return false;
    }
    if ('hgt' in pass) {
        let nume = parseInt(pass.hgt.slice(0, pass.hgt.length - 2));
        let thing = pass.hgt.slice(pass.hgt.length - 2, pass.hgt.length);
        if (thing === "cm") {
            if (nume > 193 || nume < 150) return false
        } else if (thing === "in") {
            if (nume > 76 || nume < 59) return false;
        } else return false;
    }
    if ('hcl' in pass) {
        let col = /^#([0-9a-f]+){6,6}/.test(pass.hcl);
        if (!col) return false;
    }
    if ('ecl' in pass) {
        let eyeCol = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        if (!eyeCol.includes(pass.ecl)) return false
    }
    if ('hcl' in pass) {
        let col = /^#([0-9a-f]+){6}/.test(pass.hcl);
        if (!col) return false;
    }
    if ('pid' in pass) {
        let col = /^\w{9}$/.test(pass.pid);
        if (!col) return false;
    }

    return true;
}

list.forEach(item => {
    let passField = Object.keys(item);
    let vvv = ['ecl', 'iyr', 'hgt', 'byr', 'hcl', 'eyr', 'pid'];

    if (passField.length === 8) {
        if (checkValid(item)) v2++;
    } else if (passField.length === 7) {
        if (passField.every(item => vvv.includes(item)))
            if (checkValid(item)) v2++;
    }
})


console.log("part 1:", part1);
console.log("part 2:", v2);

