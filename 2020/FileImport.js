const fs = require('fs');

exports.default = (FILE) => {
    const read = (READ) => fs.readFileSync(FILE, "utf8").split("\n");
    const parse = (action) => {
        return read(FILE).map(line => {
            return action ? action(line) : line;
        })
    }

    return { parse, read }
}