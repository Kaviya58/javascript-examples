let num = 5;

function fibonacci(num){
    if(num < 2){
        return num;
    }
    else{
        return fibonacci(num - 1) + fibonacci(num -2);
    }
}

if(num < 0) {
    console.log('Enter a positive number');
}
else{
    for(let i = 0; i < num; i++){
        console.log(fibonacci(i));
    }
}