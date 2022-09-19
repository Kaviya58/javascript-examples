//print random item from an array
const arr = [1 , 2 , 3 , 'javascript' , 5 , 6];

let randomArr = Math.floor(Math.random() * arr.length);
let result = arr[randomArr];

console.log(result);