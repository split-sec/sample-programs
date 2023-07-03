function findMaxCount(coins, amount) {
    if(amount == 0) {
        return 1;
    }

    let array = [];

    for(let i = 0; i <= coins.length; i++) {
        array.push(new Array(amount+1).fill(0));
        
        array[i][0] = 1;
    }

    for(let i = 1; i <= coins.length; i++) {
        for(let j = 1; j <= amount; j++) {
            if(coins[i-1]>j) {
                array[i][j] = array[i-1][j];
            } else {
                array[i][j] = (array[i-1][j] + array[i][j-coins[i-1]]);
            }
        }
        console.log(array);
    }

    return array[coins.length][amount];
}

let coins = [1,2,5];
let amount = 5;

console.log(findMaxCount(coins, amount));