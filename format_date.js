const today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

if(month < 10){
    month = '0' + month;
}

//format date
console.log(`${date}/${month}/${year}`);
console.log(`${date}-${month}-${year}`);

console.log(`${year}/${month}/${date}`);
console.log(`${year}-${month}-${date}`);