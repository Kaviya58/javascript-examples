const person = {
    name : 'Anu',
    age : 22,
    greet : function(){
        console.log(`Hi ${person.name} Welcome!`);
    }
}

//delete a property from object
delete person.greet;
console.log(person);