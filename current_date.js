//current date and time
const today = new Date();

const date = today.toDateString();
const time = today.toLocaleTimeString();

console.log(`Date : ${date}\nTime : ${time}`);