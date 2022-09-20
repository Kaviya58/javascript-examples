
//get file extension
function getFileExtension(fileName){
    result = fileName.split('.').pop();
    return result;
}

console.log(getFileExtension('javascript.js'));
console.log(getFileExtension('hello.txt'));

