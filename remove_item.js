//remove an item from an array
const arr = [1,2,3,4,5];
let n = 3;         //item to be removed
const newArr = [];

for(let i = 0 ; i < arr.length ; i++) {
    if(arr[i] !== n){
        newArr.push(arr[i]);
    }
}
console.log(newArr);