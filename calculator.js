let operator = '/';
let result;
const num1 = 10;
const num2 = 5;

switch(operator){
    case '+' : {
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    }
    case '-' : {
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    }
    case '*' : {
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    }
    case '/' : {
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    }
    default : {
        console.log("Invalid Operator! Try again...");
    }
}