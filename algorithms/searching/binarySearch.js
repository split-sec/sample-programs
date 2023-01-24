let input = require("readline-sync");

// let array = input.question("Enter a list of numbers: ").split(" ");

let array = [1, 2, 3, 5, 7, 9, 10];

let toBeSearched = input.question("Enter element to be searched: ");

let flag = 0;
let low = 0, high = array.length-1, middle;

//using recursion
function bSearch(array) {
    let halfpoint = Math.floor((array.length)/2);
    if(toBeSearched == array[halfpoint]) {
        console.log("Found element");
        flag = 1;
        return;
    }

    if(toBeSearched < array[halfpoint]) {
        bSearch(array.slice(0, halfpoint));
    } else if(toBeSearched > array[halfpoint]) {
        bSearch(array.slice(halfpoint+1, array.length));
    }
} 

bSearch(array);


//using iteration
// while(low != high) {
//     middle = Math.floor((low+high)/2);
//     console.log(middle + " " + array[middle]);

//     if(array[middle] == +toBeSearched) {
//         console.log("Element found at " + (middle + 1));
//         flag = 1;
//         break;
//     }

//     if(toBeSearched < +array[middle]) {
//         high = middle - 1;
//     } else if(toBeSearched > +array[middle]) {
//         low = middle + 1;
//     }
// }

// middle = Math.floor((low+high)/2);
// if(array[middle] == toBeSearched) {
//     console.log("Element found at " + (middle + 1));
//         flag = 1;
// }

if(flag != 1) {
    console.log("Element not found");
}