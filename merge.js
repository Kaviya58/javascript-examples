const student = {
    id: 9,
    name: 'Anu',
    age: 23
};

const person = {
    gender : 'Female'
};

//merge property of two objects
const newObj = Object.assign(student,person);
console.log(newObj);