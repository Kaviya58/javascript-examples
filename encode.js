const str = 'Javascript';

//encode string to base64
const result = window.btoa(str);
console.log(result);          //base64 value

const result1 = window.atob(result);
console.log(result1);         //original value