function mergeArrays(leftArray, rightArray) {
    let array = [];

    while(leftArray.length && rightArray.length) {
        if(leftArray[0] < rightArray[0]) {
            array.push(leftArray.shift()); 
        } else {
            array.push(rightArray.shift());
        }
    }

    return [...array, ...leftArray, ...rightArray];
}

function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }

    let middle = Math.floor(array.length)/2;
    let leftSubArray = array.splice(0, middle);

    return mergeArrays(mergeSort(leftSubArray), mergeSort(array));
}

let unsorted = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let sorted = mergeSort(unsorted);
console.log(sorted);