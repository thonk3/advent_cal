const fs = require('fs');

/* Helper function to read and parse the input data using map */
module.exports = (FILE) => 
    (action = null) => {
        return fs
            .readFileSync(FILE, 'utf8')
            .split('\n')
            .map(line => action ? action(line) : line)
    }