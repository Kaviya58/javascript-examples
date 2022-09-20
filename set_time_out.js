//pass parameter to a setTimeOut function
function add(x , y){
    console.log(x + y);
}

setTimeout(add , 1000 , 5 ,3);
console.log('Sum of two numbers');