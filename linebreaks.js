const str = `JavaScript is a programming language.
It was developed by Brendan Eich of Netscape in 1995.
Node.js is a open source server environment to run JS on server.`

const newStr = str.split('\n').join('<br>');
console.log(newStr);