//printing sum of natural numbers using recursion
let endNum = 10;

function sum(num){
    let sum = 0;

    for(let i = 1;i <= endNum;i++){
        sum += i;
    }
    return sum;
}

console.log(sum(endNum));