let str = 'sort words in alphabetical order';
let newStr = str.split(" ").sort();

console.log('Sorted words are');

for(let x of newStr) {
    console.log(x);
}