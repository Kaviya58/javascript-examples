//usage of const
const a = 5;
console.log(a);

//const inside block
{
    const a = 6;
    console.log(a);
}

console.log(a);

//throws error , const variable can't be reassigned
//a = 7;
//console.log(a);

//const array
const arr = [1,2,3,4,5];
console.log(arr);

//array values can be changed
arr[3] = 7;
console.log(arr);