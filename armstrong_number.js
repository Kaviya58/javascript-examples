const num = 153;
let sum = 0;
const noOfDigits = num.toString().length;

let temp = num;

while(temp > 0){
    let rem = temp % 10;
    sum += rem ** noOfDigits;
    temp = parseInt(temp / 10);
}

if(sum === num){
    console.log(`${num} is an Armstrong number`);
}

else{
    console.log(`${num} is not an Armstrong number`);
}
