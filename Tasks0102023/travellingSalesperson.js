function permutations(vertex) {
    let result = [];
    
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++){
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr, m.concat(next));
            }
        }
        
        return result; 
    }

    return permute(vertex); 
}
  
function travellingSalesman(arr, s, n) { 
    let vertex = []; 
    for (let i = 1; i < n; i++) { 
            vertex.push(i); 
    }
    let min_path = Number.MAX_SAFE_INTEGER; 

    let next_permutation = permutations(vertex); 
    console.log(next_permutation);

    for (let i of next_permutation) {
        let current_pathweight = 0; 
        let k = s; 
        for (let j of i) { 
            current_pathweight += arr[k][j];
            k = j; 
        }

        current_pathweight += arr[k][s];
        min_path = Math.min(min_path, current_pathweight);
    }

    return min_path; 
}


let arr = [ 
    // [0,10,25,20],
    // [10,0,35,25],
    // [15,35,0,30],
    // [20,25,30,0]
    [0,10,15,20],
    [5,0,9,10],
    [6,13,0,12],
    [8,8,9,0]
            
            //  [0,3,99,4,99,99,2,99,99],  
            //  [3,0,3,99,99,99,99,99,99],
            //  [9,3,0,1,7,99,99,99,99],
            //  [4,99,1,0,99,4,1,7,99],
            //  [99,99,7,4,0,9,99,99,99],
            //  [99,99,99,1,9,0,99,99,2],
            //  [2,99,99,7,99,99,0,5,99],
            //  [99,99,99,7,99,99,5,0,3],
            //  [99,99,99,99,99,2,99,3,0] 
            ];
let s = 0;
let n = arr.length;
console.log(travellingSalesman(arr, s, n));