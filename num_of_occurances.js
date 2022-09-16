const str = 'raCecar';
const char = 'c';
let count = 0;

for(let i = 0 ; i < str.length ; i++) {
    if(str[i].toLowerCase() == char){
        count += 1;
    }
}
console.log(`Count of '${char}' in ${str} is ${count}`);