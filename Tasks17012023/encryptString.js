// //Brute Force Method
// let str = "CIRNOGTMDA";

// let rows = 3;

// let arr = [];

// for(let i = 0; i < rows; i++) {
//     arr.push([]);
// }

// let n = 0, flag = 0;
// for(let i = 0; i < str.length; i++) {
//     if(n == rows) {
//         flag = 1;
//     } else if(n == 0) {
//         flag = 0;
//     }

//     if(arr[n] === undefined) {
//         arr[n] = [];
//     }
//     arr[n].push(str[i]);

//     if(flag == 0) {
//         n++;
//     } else if(flag != 0) {
//         n--;
//     }
// }

// console.log(arr);


//No additional memory method
let str = "CIRNOGTMDA";

let rows = 3;

let step = (2 * rows) - 2;

let output = "";

for(i = 0; i < rows; i++) {
    for(j = i; j < str.length; j += step) {
        output += str.charAt(j) + " ";
        if(i != 0 && i != rows - 1 && (j + step - (2 * i)) < str.length) {
            output += str.charAt(j + step - (2 * i)) + " ";
        }
    }
}

console.log(output);
if(output == "CODINGMART") {
    console.log("true");
}