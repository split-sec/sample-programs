function findGreat(profits, weight, capacity) {
    let array = [];
    for(let i = 0; i <= profits.length; i++) {
        array.push(new Array(capacity+1).fill(0));
    }

    for(let i = 1; i <= profits.length; i++) {
        for(let j = 0; j <= capacity; j++) {
            
            let c1 = array[i-1][j];
            let c2 = array[i-1][j-weight[i-1]];
            if(c2 === undefined) {
                c2 = -profits[i-1];
            }

            c2 += profits[i-1];

            array[i][j] = Math.max(c1, c2);
        }
    }

    let output = new Array(profits.length).fill(0);

    let max = array[profits.length][capacity];

    let count = profits.length;

    while(max != 0) {
        if(array[count].includes(max) && !array[count-1].includes(max)) {
            output[count-1] = 1;
            max -= profits[count-1];
        } 

        count--;
    }

    console.log(array);
    console.log(output);
}

let profits = [1,2,5,6];
let weights = [2,3,4,5];
findGreat(profits, weights, 8);
