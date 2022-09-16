const num1 = 12;
const  num2 = 9;

function gcd(num1 , num2){
    let min = Math.min(num1 , num2);

    for(let i = min;i >= 1;i--) {
        if(num1 === num2){
            return num1;
            break;
        }
        else{
            if(num1 % i === 0 && num2 % i ===0){
                return i;
                break;
            }
        }
    }
}

let lcm = (num1 * num2) / gcd (num1 , num2);
console.log(`LCM of ${num1} and ${num2} is ${lcm}`);
