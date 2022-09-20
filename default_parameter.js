//program to set default parameter value for a function

function add(a = 9 , b = 1){
    return a + b;
}
let a;
console.log(add(2 , 3));
console.log(add(5));
console.log(add(a , 3));
console.log(add());