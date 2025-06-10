import fs from 'fs';

/**
 * 
 * @param {string} FILE_PATH input filepath
 * @param {function} action callback function to map each line file
 * @returns 
 */
export const readInput = (FILE_PATH, action = null) => 
    fs
        .readFileSync(FILE_PATH, 'utf8')
        .split('\n')
        .map(line => line.replace(/(\r\n|\n|\r)/gm, ""))
        .map((line, index, arr) => action ? action(line, index, arr) : line);


// return boolean
export const assert = (result, expected) => {
    if(result !== expected) {
        console.log("ERR: test with DEMO input failed");
        console.log(`ERR: expected ${expected}, received ${result}`)
        return false;
    }
    return true;
}