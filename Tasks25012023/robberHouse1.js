function recurse(starting, arr) {
    if(arr.length == 1) {
        return arr[0];
    }

    if(arr.length == 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }
    
    let max = 0;

    if(starting == arr.length-1) {
        return arr[starting];
    }

    for(let i = starting; i < arr.length; i++) {
        for(let j = 2; j < arr.length; j++) {
            // console.log(max);
            max = Math.max(arr[i] + recurse(i+j, arr), max);
        }
    }

    return max;
}

let arr = [183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66];

// let arr = [183,219,57,193,94,233,202,154,65,240,97,234,
//             100,249,186,66,90,238,168,128,177,235,50,81];

// let arr = [183,219,57,193,94,233,202,154,65,240,97,234,
//             100,249,186,66,90,238,168,128,177,235,50,81,
//             185,165,217,207,88,80,112,78,135,62,228,247,211];

let ans = recurse(0, arr);
console.log(ans);