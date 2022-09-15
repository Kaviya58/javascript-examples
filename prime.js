let num =7;
let isPrime = true;

if(num === 1){
    console.log('Neither a prime number nor a composite number');
}

else if(num > 1){
    for(let i = 2;i < num;i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
        
    }
    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a Composite number`);
    }
}

else{
    console.log(`${num} is a Composite number`);
}