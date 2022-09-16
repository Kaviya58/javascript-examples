const person = {
    id: 9,
    name: 'Anu',
    age: 23
};

//clone a object
const clonePerson = Object.assign({},person);
console.log(clonePerson);

clonePerson.name = 'Lee';
console.log(clonePerson.name);
console.log(person.name);