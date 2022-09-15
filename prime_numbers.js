//printing prime numbers between a given interval
let startNum = 3;
let endNum = 10;

console.log(`Prime numbers between ${startNum} and ${endNum} are`);
for(let i = startNum;i <= endNum;i++){
    let prime = 0;
    for(let j = 2;j < i;j++){
        if(i % j === 0){
            prime = 1;
            break;
        } 
    }   
    if(prime == 0 && i > 1){
        console.log(i);
    }
}

