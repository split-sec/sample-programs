let text = "ccaccadba";
let pattern = "adb";
let charToNum = (c) => {
    return (c.charCodeAt(0) % 96);
}
let sum = 0, p = 26;
let m = pattern.length;
for(let i = 0; i < pattern.length; i++){
     sum += charToNum(pattern.charAt(i))*(p**(m-i-1));
}

for(let i=0;i<text.length-m;i++){
    let count=0;
    let j=i;
    let newSum = 0;
    while(count<m){
        newSum += charToNum(text.charAt(j))*(p**(m-count-1));
        count++;
        j++;
        if(newSum==sum){
            console.log("Found at "+i);
        }
    }
}