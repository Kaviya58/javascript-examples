//merge two arrays and remove duplicate elements

const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];

console.log(`Array 1 : ${arr1}`);
console.log(`Array 2 : ${arr2}`);

let newArr = arr1.concat(arr2);
const result = [];

for(let x of newArr){
    if(result.indexOf(x) === -1){
        result.push(x);
    }
}
console.log(`Merged Array : ${result}`);