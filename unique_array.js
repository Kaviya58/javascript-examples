//remove duplicate elements from an array

let arr = [1,2,3,2,4,4,5];

function getUnique(arr){
    let uniqueArr = [];
    for (let x of arr){
        if(uniqueArr.indexOf(x) === -1){
            uniqueArr.push(x);
        }
    }
    console.log(uniqueArr);
}
getUnique(arr);
