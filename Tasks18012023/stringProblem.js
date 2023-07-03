let str = "12345";

let sum = 0;
let num = 0;

for(let i = 0; i < str.length; i++) {
    if( isNaN(+str[i]) ) {
        sum += num;
        num = 0;
    } else {
        num *= 10;
        num += +str[i];
    }
}

sum += num;

console.log(sum, str);