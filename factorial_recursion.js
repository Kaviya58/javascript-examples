//factorial of a number using recursion
let num = 5;

function factorial(num){
    if(num == 0)
        return 1;
    else
        return factorial(num-1)*num;
}

if(num >= 0){
    console.log(`Factorial of ${num} is ${factorial(num)}`);
}
else{
    console.log(`Enter a positive number.`);
}
