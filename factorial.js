let num = 8;
let factorial = 1;
if(num === 0){
    console.log(`Factorial of ${num} is 1`);
}
else if(num < 0){
    console.log(`Factorial for negative number doesn't exist`);
}
else{
    for(let i = num;i > 0;i--){
        factorial *= i;
    }
    console.log(`Factorial of ${num} is ${factorial}`);
}
