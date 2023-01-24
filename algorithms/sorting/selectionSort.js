function selectionSort(array) {
    let min;

    for(let i = 0; i < array.length-1; i++) {
        min = i;

        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }

        if(min != i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}

let unsorted = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let sorted = selectionSort(unsorted);
console.log(sorted);