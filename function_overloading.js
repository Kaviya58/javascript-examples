//function overloading

function addNumbers(){
    switch(arguments.length){
        case 0 :
            console.log('You have not passed any argument');
            break;

        case 1 :
            console.log('Pass atleast two arguments');
            break;

        default : {
            let sum = 0;
            for(let i = 0 ; i < arguments.length ; i++){
                sum += arguments[i];
            }
            console.log(sum);
            break;
        }
    }
}

addNumbers();               //no argument
addNumbers(5);              //one argument
addNumbers(1,2,3,4,5);      //more than one argument