let input = require("readline-sync");

function isValid(i, j) {
    if(i >= 0 && i < inputMatrix.length && 
        j >= 0 && j < inputMatrix[0].length &&
        inputMatrix[i][j] != 0 &&
        outputMatrix[i][j] != 1) {
            return true;
    }

    return false;
}

function findPath(i, j) {
    outputMatrix[i][j] = 1;

    if(i == inputMatrix.length-1 && j == inputMatrix[0].length-1) {
        console.log(outputMatrix);
        return;
    }

    for(let k = inputMatrix[i][j]; k > 0 && k<inputMatrix.length-1; k--) {
        // if(isValid(i, j-1)) {
        //     findPath(i, j-1);
        // }
        if(isValid(i, j+k)) {
            findPath(i, j+k);
        }
        // if(isValid(i-1, j)) {
        //     findPath(i-1, j);
        // }
        if(isValid(i+k, j)) {
            findPath(i+k, j);
        }
        // console.log(`i: ${i}, j: ${j}`);
    }
    
    outputMatrix[i][j] = 0;
    // console.log("here");
    return false;
}

// let rows = input.question("Enter no. of rows: ");
// let cols = input.question("Enter no. of cols: ");

let rows = 5;
let cols = 5;

// let inputMatrix = [];
// for(let i = 0; i < rows; i++) {
//     inputMatrix.push(+input.question().split(" "));
// }

let inputMatrix = [
  [ 1, 2, 1, 1, 1 ],
  [ 0, 0, 0, 0, 1 ],
  [ 0, 0, 0, 0, 2 ],
  [ 0, 1, 1, 0, 1 ],
  [ 0, 0, 1, 1, 1 ]
];

outputMatrix = JSON.parse(JSON.stringify(inputMatrix));

for(let ele of outputMatrix) {
    ele.fill(0);
}

findPath(0, 0);