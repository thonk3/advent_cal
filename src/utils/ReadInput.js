const fs = require('fs');

/**
 * 
 * @param {string} FILE input filepath
 * @param {function} action callback function to parse the file
 * @returns 
 */
const readInput = (FILE, action = null) => 
    fs
        .readFileSync(FILE, 'utf8')
        .split('\n')
        .map(line => line.replace(/(\r\n|\n|\r)/gm, "")) // input array separated by newline
        .map(line => action ? action(line) : line);

module.exports = { readInput };

// I could overkill this 