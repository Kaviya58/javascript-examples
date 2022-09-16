const startNum = 9;
const EndNum = 500;

function isArmstrong(num){
    let sum = 0;
    const noOfDigits = num.toString().length;

    let temp = num;

    while(temp > 0){
        let rem = temp % 10;
        sum += rem ** noOfDigits;
        temp = parseInt(temp / 10);
    }

    if(sum === num){
        console.log(num);
    }
}

console.log(`Armstrong number between ${startNum} and ${EndNum} are `);
for(let i = startNum;i <= EndNum;i++){
    let result = isArmstrong(i);
}