let input = require("readline-sync");

let arr = input.question("Enter array: ").split(" ");

arr.sort();

for(let i = 1; i < arr.length-1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
}

console.log(arr);