let str = 'Aeroplane';
let newStr = str.toLowerCase();
let count = 0;

//count vowels in given string
for(let i = 0 ; i < newStr.length ; i++) {
    if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u'){
        count += 1;
    }
}
console.log(`Count of vowels in ${str} is ${count}`);