//Don't add this file to commit

// let arr = [0, 1, function a() {
//     alert("hello")
// }];

// console.log(arr.toString());


// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("Enter a number", "a number");
//         this.b = +prompt("Enter a number", "a number");
//     },
//     this.sum = function() {
//         return this.a+this.b;
//     },
//     this.mul = function() {
//         return this.a*this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// let calculator = {
//     read() {
//         this.a = +prompt("Enter a number", "a number");
//         this.b = +prompt("Enter a number", "a number");
//     },
//     sum() {
//         return this.a+this.b;
//     },
//     multiply() {
//         return this.a*this.b;
//     }
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.multiply());




// // console.log(typeof typeof 2);
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
   
// function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] == "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// // function multiplyNumeric(obj) {
// //     for (let key in obj) {
// //       if (typeof obj[key] == 'number') {
// //         obj[key] *= 2;
// //       }
// //     }
// //   }
 
// multiplyNumeric(menu);
// console.log(menu);

// let set = new Set([3,2,1,2,1]);

// console.log(set.values());

// let user = {
//     name: "shyam",
//     age: 21
// }

// Object.defineProperty(user, 'name', {
//     enumerable: false,
//     writable: false
// })

// user.name = "magi";
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(descriptor);

// for(let i in user) {
//     console.log(i);
// }


// let a = null;
// let b = 'string';

// console.log(a ?? b);

// let array = new Array(10).fill().map(() => Math.floor(Math.random()*10));
// console.log(array);

// let array = [-5, -2, -3, -4, -1];
// let answer = array.reduce((acc, val) => {
//     console.log(acc);
//     return val > acc ? val : acc;
// });
// console.log(answer);

// let array = [1,2,3,4,5];
// print(printElement, array);

// function print(callback, arr) {
//     callback(arr);
// }

// function printElement(arr) {
//     for(let item of arr) {
//         console.log(item);
//     }
// }

let array = [10, 5, 12, 8 , 9, 25];
array.sort((a,b) => b - a);
console.log(array);


