const str = 'racecar';
let newStr = str.split("").reverse().join("");

//check string is palindrome or not
if(str === newStr){
    console.log(`${str} is a Palindrome.`);
}

else{
    console.log(`${str} is not a Palindrome.`);
}
