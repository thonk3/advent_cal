const fs = require('fs');

/**
 * 
 * @param {string} FILE_PATH input filepath
 * @param {function} action callback function to map each line file
 * @returns 
 */
const readInput = (FILE_PATH, action = null) => 
    fs
        .readFileSync(FILE_PATH, 'utf8')
        .split('\n')
        .map(line => line.replace(/(\r\n|\n|\r)/gm, ""))
        .map(line => action ? action(line) : line);

module.exports = { readInput };

// I could overkill this 