let input = require("readline-sync");

let array = input.question("Enter a list of numbers: ").split(" ");

let toBeSearched = input.question("Enter element to be searched: ");

let i;

for(i = 0; i < array.length; i++) {
    if(array[i] == toBeSearched) {
        console.log("Found element at " + (i+1));
        break;
    }
}

if(i == array.length) {
    console.log("Element not found");
}
