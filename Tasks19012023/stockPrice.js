// let arr = [7,1,5,3,6,4];

// let stockAtHand = 0;
// let stockPrice;

// let maxProfit = -1;

// for(let i = 0; i < arr.length; i++) {
//     stockAtHand = 1;
//     stockPrice = arr[i];
//     let profit = 0;

//     for(let j = i+1; j < arr.length; j++) {
//         if(arr[i] < arr[j]) {
//             if(stockAtHand == 0) {
//                 stockAtHand = 1;
//                 stockPrice = arr[i];
//             } 
//         }
//         else {
//             if(stockAtHand == 1) {
//                 stockAtHand = 0;
//                 profit += arr[j] - stockPrice;
//             }
//         }
//     }

//     if(profit > maxProfit) {
//         maxProfit = profit;
//         console.log(maxProfit);
//     }

// }

// console.log(maxProfit);

let arr = [1,2,3,8,5];

let profit = 0;

let max = 0;
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i-1]) {
        profit += arr[i] - arr[i-1];
    }
}

console.log(profit);