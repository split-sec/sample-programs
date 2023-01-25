let input = require("readline-sync");

function isValid(i, j) {
    if(i >= 0 && i < inputMatrix.length && 
        j >= 0 && j < inputMatrix[0].length &&
        inputMatrix[i][j] == 1 &&
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

    if(isValid(i, j-1)) {
        findPath(i, j-1);
    }
    if(isValid(i, j+1)) {
        findPath(i, j+1);
    }
    if(isValid(i-1, j)) {
        findPath(i-1, j);
    }
    if(isValid(i+1, j)) {
        findPath(i+1, j);
    }
    
    outputMatrix[i][j] = 0;
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
  [ 1, 1, 1, 1, 1 ],
  [ 0, 1, 0, 0, 1 ],
  [ 0, 1, 0, 0, 1 ],
  [ 0, 1, 1, 0, 0 ],
  [ 0, 0, 1, 1, 1 ]
];

outputMatrix = JSON.parse(JSON.stringify(inputMatrix));

for(let ele of outputMatrix) {
    ele.fill(0);
}

findPath(0, 0);