function maxOfArray(array) {
    let max = -1;

    for(let i = 0; i < array.length; i++) {
        Math.max(max, array[i]);
    }

    return max;
}

function calculatelmaxrmax(array) {
    let temp;
    for(let i = 0; i < array.length; i++) {
        temp = array.slice(i);
        rmax[i] = maxOfArray(temp);

        temp = array.slice(0, i+1)
        lmax[i] = maxOfArray(temp);
    }

    console.log(lmax);
    console.log(rmax);
}

function calculateWater(array) {
    calculatelmaxrmax(array);

    let total = 0;

    for(let i = 0; i < array.length; i++) {
        let min = Math.min(lmax[i], rmax[i]);
        total += min - array[i];
    }

    return total;
}

let array = [1,2,3,0,5,0,4];

let lmax = new Array(array.length);
let rmax = new Array(array.length);

console.log(calculateWater(array));