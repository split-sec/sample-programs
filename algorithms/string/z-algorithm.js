let str ="abcdeaabbdaabdgf";

let pattern = "aabbda";

let newStr = pattern + `$` + str;

let zValues = [];

zValues[0] = 0;
for(let i = 1; i < newStr.length; i++) {
    let count = 0;
    for(let j = i; j < newStr.length; j++) {
        if(newStr[j] == newStr[j-i]) {
            count += 1;
        } else {
            break;
        }
    }
    zValues.push(count);
}

console.log(zValues);

for(let i = 0; i < zValues.length; i++) {
    if(zValues[i] == pattern.length){
        console.log(i - pattern.length-1);
    }
}