function findMax(coins, amount) {
    if(amount == 0) {
        return amount;
    }

    let array = [];

    for(let i = 0; i <= coins.length; i++) {
        array.push(new Array(amount+1).fill(0));
        if(i == 0) {
            array[i].fill(Number.MAX_SAFE_INTEGER);
        }
        array[i][0] = 0;
    }

    for(let i = 1; i <= coins.length; i++) {
        for(let j = 1; j <= amount; j++) {
            let exclude = array[i-1][j];

            let include = array[i][j - coins[i-1]];

            if(include === undefined) {
                include = Number.MAX_SAFE_INTEGER;
            }

            include++;

            array[i][j] = Math.min(exclude, include);
        }
    }

    if(array[coins.length][amount] == Number.MAX_SAFE_INTEGER) {
        return -1;
    }

    console.log(array);

    return array[coins.length][amount];
}

let coins = [1,2,5];
let amount = 5;

console.log(findMax(coins, amount));