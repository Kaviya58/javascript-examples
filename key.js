const person = {
    id: 9,
    name: 'Anu',
    age: 23
};

//check if key exists or not
if(person.hasOwnProperty('name')){
    console.log('Key exists.');
}
else{
    console.log('Key does not exist.')
}
