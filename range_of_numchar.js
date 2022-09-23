//print a range of numbers and characters
function* iterate(a , b){
    for(let i = a ; i <= b ; i++){
        yield i;
    }
}

function range(a , b){
    if(typeof a === 'string'){
        let res = [...iterate(a.charCodeAt() , b.charCodeAt())].map(n => String.fromCharCode(n));
        console.log(res);
    }
    else{
        let res = [...iterate(a , b)];
        console.log(res);
    }
}

range(1 , 5);
range('A' , 'D');