function isSafe(board, row, col, num){
	for(let c = 0; c < board.length; c++){
		if (board[row][c] == num){
			return false;
		}
	}
	for(let r = 0; r < board.length; r++){
		if (board[r][col] == num){
			return false;
		}
	}
	let boxRowStart = row - row % 3;
	let boxColStart = col - col % 3;

	for(let r = boxRowStart;r < boxRowStart + 3; r++){
		for(let c = boxColStart;c < boxColStart + 3; c++){
			if (board[r][c] == num){
				return false;
			}
		}
	}
	return true;
}

function solveSudoku(board, n){
	let row = -1;
	let col = -1;
	let isEmpty = true;
	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){
			if (board[i][j] == 0){
				row = i;
				col = j;
				isEmpty = false;
				break;
			}
		}
		if (!isEmpty){
			break;
		}
	}
	if (isEmpty){
		return true;
	}
	for(let num = 1; num <= n; num++){
		if (isSafe(board, row, col, num)){
			board[row][col] = num;
			if (solveSudoku(board, n)){
				return true;
			}
			else{
				board[row][col] = 0;
			}
		}
	}
	return false;
}

function print(board, N)
{
    let res="";
	for(let r = 0; r < N; r++){
		for(let d = 0; d < N; d++){
            res+=board[r][d]+" ";
		}
		console.log(res);
        res="";
	}   
}

let arr = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
			[ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
			[ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
			[ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
			[ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
            [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
			[ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
			[ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
			[ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
		
let N = arr.length;

if (solveSudoku(arr, N)){
	print(arr, N);
}
else{
	console.log("No solution");
}