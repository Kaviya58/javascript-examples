//sort array of objects

const persons = [{name : 'Kanish' , age : 22}  , {name : 'Mithra' , age : 21} , {name : 'Anvi' , age : 3}];

function compareKeys(a,b){

    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let value = 0;
    if(name1 > name2){
        value = 1;                //order remain unchanged
    }
    else{
        value = -1;               //order changed
    }
    return value;
}

console.log(persons.sort(compareKeys));