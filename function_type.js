const str = 'abc';
const a = function(){
    return 'Hello World!';
};

//check variable is of function type or not
function findType(variable){
    if(typeof variable === 'function'){
        console.log('Variable is of function type');
    }
    else{
        console.log('Variable is not of function type');
    }
}

findType(str);
findType(a);