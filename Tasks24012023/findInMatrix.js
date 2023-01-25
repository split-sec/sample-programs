function isValid(x, y) {
    if((x >= 0 && x < matrix.length) &&
        (y >= 0 && y < matrix[0].length)) {
        return true;
    }

    return false;
}

function search(x, y, target) {
    res.push(matrix[x][y]);

    if(res.length == str.length) {
        return true;
    }

    let directions = [[0,-1], [-1,0], [0,1], [1,0]];

    for(let i = 0; i < directions.length; i++) {
        let m = x + directions[i][0];
        let n = y + directions[i][1];
        if(isValid(m, n) && matrix[m][n] == str[target]) {
            search(m, n, target+1);
            if(res.length == str.length) {
                return true;
            }
        }
    }
    return false;
}


let input = require("readline-sync");

let x = input.question("Enter number of rows: ");
let y = input.question("Enter number of columns: ");
let matrix = [];

for(let i = 0; i < x; i++) {
    let oneRow = input.question().split(" ");
    matrix.push(oneRow);
}

let str = input.question("Enter string to be found: ");

let res;
let flag = 0;

outer:
for(let i = 0; i < x; i++) {
    for(let j = 0; j < y; j++) {
        if(matrix[i][j] == str[0]) {
            res = [];
            search(i, j, 1);

            if(res.toString().split(",").join("") == str) {
                console.log("Found");
                flag = 1;
                break outer;
            }
        }
    }
}

if(flag == 0) {
    console.log("Not found");
}