//pass a function as a parameter
function greet(){
    return 'Hi';
}

function greetPerson(person , func){
    const txt = func();
    console.log(txt+" "+person);
}

greetPerson('Anu' , greet);