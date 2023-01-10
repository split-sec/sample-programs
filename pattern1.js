let n = 4;

let num = 1;

let second_count = 1;

let second_num;

let output, output1;

for(let i = 0; i < n; i++) {

    output = "";
    output1 = "";

    for(let j = 0; j < i; j++) {
        output += "    ";
    }

    second_num = ((n-i)**2);
    for(let k = n; k > i; k--) {
        output += num + " * ";
        num++;

        output1 += (second_num + second_count) + " * ";
        second_count++;
    }

    output += output1;

    console.log(output);
}