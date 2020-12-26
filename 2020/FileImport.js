const fs = require('fs');

/* Helper function to read and parse the input data using map */
exports.default = (FILE) => {
    const read = (READ) => fs.readFileSync(FILE, "utf8").split("\n");

    const parse = (action) => {
        return read(FILE).map(line => {
            return action ? action(line) : line;
        })
    };

    return { parse, read };
}