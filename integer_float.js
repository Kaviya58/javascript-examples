//check number is integer or float
function checkNumber(value){
    if(typeof value === 'number' && value !== 'NaN'){
        if(Number.isInteger(value)){
            console.log(`${value} is an integer`);
        }
        else{
            console.log(`${value} is a float value`);
        }
    }
    else{
        console.log(`'${value}' is not a number`);
    }
}

checkNumber('Hi');
checkNumber(5);
checkNumber(5.5);

