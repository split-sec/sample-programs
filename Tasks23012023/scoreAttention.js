// function calculateAttention(array) {
//     let attention = new Array(array.length).fill(1);

//     if(array.length == 2) {
//         if(array[0] < array[1]) {
//             attention[0]++;
//         }
//         return attention;
//     }

//     if(array[0] < array[1]) {
//         attention[0]++;
//     }

//     if(array[array.length-2] > array[array.length-1]) {
//         attention[array.length-1]++;
//     }

//     for(let i = 1; i < array.length-1; i++) {
//         if(array[i] < array[i-1]) {
//             attention[i] += attention[i-1] + 1;
//         }
//         if(array[i] < array[i+1]) {
//             if(attention[i] <= attention[i+1])
//                 attention[i] += attention[i+1] + 1;
//         }
//     }

//     return attention;
// }

// let array = [5, 1, 2, 6, 3, 4];

// console.log(calculateAttention(array));


function calculateAttention(array) {
    let attention = new Array(array.length).fill(1);

    for(let i = 0; i < array.length-1; i++) {
        if(array[i+1] < array[i]) {
            attention[i+1] = attention[i] + 1;
        }
    }

    for(let i = array.length-1; i > 0; i--) {
        if(array[i-1] < array[i]) {
            if(attention[i-1] < (attention[i] + 1)) {
                attention[i-1] = attention[i] + 1;
            }
        }
    }

    return attention;
}

let array = [7,6,5,4,3,2,1];

console.log(calculateAttention(array));