
const fs = require('fs');

var input = []
const FILE = './input';
fs.readFile(FILE, 'utf-8', (err, data) => {
    input = data.split("\n");

    let answers = [];
    let group = [];
    let all = [];
    let len = 0;

    while (input.length != 0) {
        // =============================================
        // let answer = [...input.shift()];
        // if(answer.length === 0) {
        //     console.log(group.length)
        //     answers.push(group);
        //     len++;
        //     group = [];
        // }
        // else {
        //     answer.forEach(ans => {
        //             if(!group.includes(ans)) group.push(ans)
        //         }
        //     )
        // }
        // =============================================

        // ans group all
        let ans = [...input.shift()];
        if (ans.length === 0) {
            all.push(group);
            group = [];
        }
        else {
            group.push(ans);
        }
    }

    const something = () => {
        let a = []; AA = 'a'.charCodeAt(0), ZZ = 'z'.charCodeAt(0);
        for (; AA <= ZZ; AA++) {
            a.push(String.fromCharCode(AA));
        }

        return a;
    }

    console.log(all[0]);
    // ok count of duplicated questions
    let final = [];
    let alpha = something();

    all.forEach(ggg => {
        let group = [];
        ggg.sort((a, b) => b.length - a.length);
        alpha.forEach(let => {
            let all = true;
            ggg.forEach(person => {
                if(!person.includes(let)) all = false;
            })
            if(all) group.push(let);
        })
        final.push(group);
    })


    let sum = 0;
    final.forEach(i => sum += i.length);
    console.log(sum)


    // console.log(sum);
    // console.log(len);
    // console.log(answers.length);

    // console.log(alpha);

});



/* 
    lr
    bw
*/

