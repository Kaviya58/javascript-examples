const person = {
    id: 9,
    name: 'Anu',
    age: 23
};

let count = 0;
for(let key in person){
    count += 1;
}
console.log(`Count of keys in object is ${count}`);