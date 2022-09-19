const arr1 = [1,2,3,4,5];
const arr2 = [3,4,9,2,5];

//print common elements in two arrays
function performIntersection(arr1 , arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    let result = [];

    for(let x of set1){
        if(set2.has(x)){
           result.push(x);
        }
    }
    return result;
}

console.log(performIntersection(arr1 , arr2));

