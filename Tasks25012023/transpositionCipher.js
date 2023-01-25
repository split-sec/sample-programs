/*********************
**********************
Brute - force method
**********************
*********************/

// let input = require("readline-sync");

// let str = input.question("Enter encoded string: ");
// let rows = input.question("Enter no. of rows: ");

// let output = [];
// for(let i = 0; i < rows; i++) {
//     output.push([]);
// }


// let point = 0;

// //LOOP TO CREATE EMPTY SPACES IN THE FRONT
// for(let i = 1; i < rows; i++) {
//     let arr = [];
//     for(let j = 1; j < rows; j++) {
//         arr.push(" ");
//     }
//     output[i].push(...arr);
// }

// //loop to traverse the entire string
// while(point != str.length) {
//     let i = point % rows;
//     output[i].push(str[point]);
//     point++;
// }

// let stringOutput = "";

// for(let i = 0; i < output.length; i++) {
//     for(let j = 0; j < output[i].length; j++) {
//         if(output[i][j] == " ")
//             output[i][j] = "*";
//     }

//     stringOutput += output[i].toString().split(",").join("");
// }

// console.log(stringOutput);


/*********************
**********************
   Optimized method
**********************
*********************/

let input = require("readline-sync");

let str = input.question("Enter encoded string: ");
let rows = +input.question("Enter no. of rows: ");

let output = "";

for(let i = 0; i < rows; i++) {
    for(let j = 0; j < i; j++) {
        output += "*";
    }

    for(let j = i; j < str.length; j = j + rows) {
        if(str[j] == " " && j+rows <= str.length)
            output += "*";
        else {
            output += str[j];
        }
    }
}

console.log(output);