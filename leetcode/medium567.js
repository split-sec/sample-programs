function permutations(str) {
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

    return permute(str); 
}

let str = "ab";
let val = str.split('');
let paragraph = "moibaoplo";

let permutationArray = permutations(val);
console.log(permutationArray);

let permutedStrings = [];
for(let item of permutationArray) {
    permutedStrings.push(item.join(''));
}
console.log(permutedStrings);

for(let item of permutedStrings) {
    if(paragraph.indexOf(item)) {
        console.log("here");
        return true;
    }
}

return false;

