//check variable is null or undefined
function isNull(value){
    if(value === null){
        console.log('Variable is null or undefined');
    }
    else{
        console.log('Variable is neither null nor undefined');
    }
}
let variable;

console.log(isNull(null));
console.log(isNull(5));
console.log(isNull('javascript'));
console.log(isNull(variable));