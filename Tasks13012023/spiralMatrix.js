let a = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

let rowsize = 5;
let colsize = 5;

let lastcol = colsize-1;
let lastrow = rowsize-1;

let l = 0;
let k = 0;

let i;
let output = "";

let start_row = 0;
let start_col = 0;

let b = [];

for(i = 0; i < rowsize; i++) {
    let row = [];
    for(j = 0; j < colsize; j++) {
        row.push(0);
    }
    b.push(row);
}

function addToMatrix(value) {
    if(start_col == colsize) {
        start_col = 0;
        start_row++;
    }
    if(start_row < rowsize && start_col < colsize) {
        b[start_row][start_col] = value;
        start_col++;
    }
}

do {
    for(i = l; i <= lastcol; i++) {
        output += a[k][i] + " ";
        addToMatrix(a[k][i]);
    }
    output += "\n";
    k++;

    for(i = k; i <= lastrow; i++) {
        output += a[i][lastcol] + " ";
        addToMatrix(a[i][lastcol]);
    }
    output += "\n";
    lastcol--;

    for(i = lastcol; i >= l; i--) {
        output += a[lastrow][i] + " ";
        addToMatrix(a[lastrow][i]);
    }
    output += "\n";
    lastrow--;

    for(i = lastrow; i >= k; i--) {
        output += a[i][l] + " ";
        addToMatrix(a[i][l]);
    }
    output += "\n";
    l++;
} while(l != Math.ceil(rowsize/2) && k != Math.ceil(colsize/2));

console.log(output);
console.log(b);