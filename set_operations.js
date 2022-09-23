//different set operations
let set1 = new Set();
let set2 = new Set([4,5,6,7,8]);

//add elements to a set
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);
set1.add(5);
set1.add(3);   //set adds unique elements
console.log(set1);

//calculate number of elements in a set
console.log('Size : ' + set1.size);

//union operation
function union(set1 , set2){
    let newSet = new Set(set1);
    for (let x of set2){
        newSet.add(x);
    }
    return newSet;
}
console.log(union(set1 , set2));

//intersection operation
function intersection(set1 , set2){
    let newSet = new Set();
    for(let x of set2){
        if(set1.has(x)){
            newSet.add(x);
        }
    }
    return newSet;
}
console.log(intersection(set1 , set2));

//print set1 which are not in set2
function difference(set1 , set2){
    let newSet = new Set(set1);
    for(let x of set2){
        newSet.delete(x);
    }
    return newSet;
}
console.log(difference(set1 , set2));