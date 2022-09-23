//email validation

const validRegex = /^([a-zA-Z0-9!#$%&*+?.])+\@([a-zA-Z]{2,7})+\.([a-zA-Z]{2,5})$/ ;

function validateEmail(email){
    if(email.match(validRegex)){
        return 'valid Email id';
    }
    else{
        return 'Invalid email id';
    }
}

console.log(validateEmail('balanumith2000@gmail.com'));
console.log(validateEmail('balanumith2000_gmail.com'));
console.log(validateEmail('balanumith2000gmailcom'));
console.log(validateEmail('Xiaqchi.Capetown@pma.com'));

