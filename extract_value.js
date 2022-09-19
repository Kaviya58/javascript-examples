//extract values from array object
const persons = [{name  : 'Anvi' , gender : 'Female'},{name  : 'Anu' , gender : 'Female'} , {name  : 'Bala' , gender : 'Male'}];

let value = 'name';

let result = [];

for(let i = 0 ; i < persons.length ; i++){
    result.push(persons[i]['name']);
}
console.log(result);