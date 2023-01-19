// let matrix = [[1,2,3], [4,5,6], [7,8,9]];

// let password = "123786";

// let time = 0;

// let prev = -1;

// function locate(value) {
//     for(i = 0; i < 3; i++) {
//         for(j = 0; j < 3; j++) {
//             if(matrix[i][j] == value)
//                 return [i, j];
//         }
//     }
// }

// function ifAdjacent(prev, value) {
//     let pos = locate(value);
//     let rows = pos[0];
//     let cols = pos[1];

//     if(rows-1 >= 0) {
//         if(matrix[rows-1][cols] == prev) {
//             return true;
//         }
//     }
//     if(rows+1 < 3) {
//         if(matrix[rows+1][cols] == prev) {
//             return true;
//         }
//     }

//     if(cols-1 >= 0) {
//         if(matrix[rows][cols-1] == prev) {
//             return true;
//         }
//     }
//     if(cols+1 < 3) {
//         if(matrix[rows][cols+1] == prev) {
//             return true;
//         }
//     }
    
//     return false;
// }

// outer:
//     for(let i of password) {
//         if(prev == -1) {
//             time += 1;
//             prev = i;
//         } else {
//             if(i == prev) {
//                 continue outer;
//             }
//             if(ifAdjacent(prev, i)) {
//                 time += 1;
//                 prev = i;
//             } else {
//                 time += 2;
//                 prev = i;
//             }
//         }
//     }

// console.log(time);


let input = require("readline-sync");

let password = input.question("Enter a password: ");

let str = input.question("Enter a matrix: ");
let arr = str.split(" ");
let matrix = [];
let count = 0;

for(let i = 0; i < 3; i++) {
    let a = [];
    for(let j = 0; j < 3; j++) {
        a.push(arr[count]);
        count++;
    }
    matrix.push(a);
}

let obj = {};

function addObject(value, rows, cols) {
    if(!obj) {
        obj[value] = [matrix[rows][cols]];
    } else {
        if(obj[value] !== undefined) {
            obj[value].push(matrix[rows][cols]);
        } else {
            obj[value] = [matrix[rows][cols]];
        }
    }
}

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        if(i-1 >= 0) {
            addObject(matrix[i][j], i-1, j);
        }

        if(i+1 < 3) {
            addObject(matrix[i][j], i+1, j);
        }
    
        if(j-1 >= 0) {
            addObject(matrix[i][j], i, j-1);
        }
        if(j+1 < 3) {
            addObject(matrix[i][j], i, j+1);
        }
    }
}

let prev = -1;
let time = 0;
for(let i in password) {
    if(prev == -1) {
        prev = password[i];
        time++;
        continue;
    }
    if(password[i] == prev) {
        continue;
    }
    if(obj[password[i]].includes(prev)) {
        time++;
        prev = password[i];
    } else {
        time += 2;
        prev = password[i];
    }
}
console.log(time);