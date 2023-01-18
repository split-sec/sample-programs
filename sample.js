//Don't add this file to commit

let arr = [0, 1, function a() {
    alert("hello")
}];

console.log(arr.toString());


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