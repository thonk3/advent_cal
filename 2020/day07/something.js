
const fs = require('fs');

const FILE = './input';
let input = require("fs").readFileSync(FILE, "utf8").split("\n").map(i => i.slice(0, i.length-1));

input  = input.map(line => {
    let splitRules = line.split("contain");
    let rules = splitRules[1].split(",").map(i => {
        let one = i.trim().split(" ");
        return {
            qnt: parseInt(one.shift()),
            name: `${one[0]} ${one[1]}`
        }
    })

    let name = splitRules[0].trim().split(" ");

    return {
        name: `${name[0]} ${name[1]}`,
        rules
    }
})

// console.log(input[input.length-1]);

// part a
// tree with the root node is "shiny gold"
// each branch = { name, branches };
let tree  = {
    name: "shiny gold", 
    // branches: [],
}

// folder to get the list of branches
const getBranch = node => {
    let list = [];

    let name = node.name;
    input.forEach(rule => {
        rule.rules.forEach(inside => {
            if(inside.name === node.name) {
                list.push({
                    name: rule.name
                })
                return;
            }
        })
    })

    node.branches = list;
    // return node;
}


// function to create the whole tree
const createTree = root => {
    
}


console.log("--------------");
console.log(tree);
console.log("--------------");

// part b


// output
// bagLine.forEach(i => console.log(i[0]));