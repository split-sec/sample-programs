let houseRobber = (arr) => {
    let robber1 = [];
    if(arr.length == 1) {
        return arr[0];
    }
    if(arr.length == 2) {
        return Math.max(arr[0], arr[1]);
    }

    robber1[0] = arr[0];
    robber1[1] = Math.max(arr[0], arr[1]);

    for(let i = 2; i < arr.length - 1; i++){
        robber1[i] = Math.max(robber1[i-2] + arr[i] , robber1[i-1]);
    }

    let robber2 =[];
    robber2[1] = arr[1];
    robber2[2] = Math.max(arr[1],arr[2]);

    for(let i = 3; i < arr.length; i++) {
        robber2[i] = Math.max(robber2[i-2]+arr[i], robber2[i-1]);
    }

    return Math.max(robber1[robber1.length-1], robber2[robber2.length-1]);
}


let arr = [1,2,7,2,1,9];
console.log(houseRobber(arr));