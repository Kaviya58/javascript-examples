//append object to an array
const arr = [1,2,3,4,5];

const obj = {
    name : 'Anu',
    age : 21
};

function appendObject(a,b){
    arr.push(obj);
    return arr;
}
console.log(appendObject(arr,obj));
