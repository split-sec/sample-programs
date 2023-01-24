let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// arr.push(2**6);
// console.log(arr);

// function partition(l, h) {
//     let i = l;

//     let j = h;

//     let pivot = arr[l];

//     let temp;

//     while(i < j) {
//         do {
//             i++;
//         } while(arr[i] <= pivot);
//         do {
//             j++;
//         } while(arr[j] > pivot);

//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = arr[j];
//     }
//     temp = arr[l];
//     arr[l] = arr[j];
//     arr[j] = temp;

//     return j;
// }

// function quicksort(l, h) {
//     if(l < h) {
//         let j = partition(l, h);
//         quicksort(l, j);
//         quicksort(j+1, h);
//     }
// }

// quicksort(0, arr.length);
// console.log(arr.slice(0,arr.length-1));

function quicksort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let left = [];
    let right = [];

    let pivot = arr[arr.length-1];

    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

let sorted = quicksort(arr);
console.log(sorted);