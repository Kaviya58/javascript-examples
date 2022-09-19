//create two dimensional array
const row = 3;
const column = 4;
let matrix = [];

for(let i = 0 ; i < row ; i++){
    let arr = [];
    for(let j = 0 ; j < column ; j++){
        arr.push(j);
    }
    matrix.push(arr);
}

console.log(matrix);