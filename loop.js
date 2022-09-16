const person = {
    id: 9,
    name: 'Anu',
    age: 23
};

//looping through an object
for(let key in person){
    let value;
    value = person[key];
    console.log(key + " : " + value);
}