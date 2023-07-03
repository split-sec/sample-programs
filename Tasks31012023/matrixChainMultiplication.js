let arr = [10,20,30];
let n = arr.length;
let dp = [];

for(let i = 0; i < n; i++) {
    dp.push(new Array(n).fill(0));
}

let total = 0;

for(let col = 2; col < n; col++) {
    for(let l = 1; l < (n-l+1); l++) {
        let r = l+col-1;
        if(r == n) {
            continue;
        }

        dp[l][r] = Number.MAX_SAFE_INTEGER;

        for(let k = l; k <= r-1; k++){
            total = dp[l][k] + dp[k+1][r] + arr[l-1]*arr[k]*arr[r];
            dp[l][r] = Math.min(dp[l][r], total);
        }

    }
}

console.log(dp);
console.log(dp[1][n-1]);