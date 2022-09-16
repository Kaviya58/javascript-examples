//two static inputs
const num1 = 36;
const num2 = 15;

let min = Math.min(num1 , num2);

for(let i = min;i >= 1;i--) {
    if(num1 === num2){
        console.log(`GCD of ${num1} and ${num2} is ${num1}`);
        break;
    }
    else{
        if(num1 % i === 0 && num2 % i ===0){
            console.log(`GCD of ${num1} and ${num2} is ${i}`);
            break;
        }
    }
}