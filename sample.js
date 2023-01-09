function Accumulator(startingValue) {
    this.value = +startingValue;

    this.read = function(adds) {
        this.value += +prompt("Enter a value: ", 0);
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);


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