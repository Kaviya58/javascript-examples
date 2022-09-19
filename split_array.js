//split array into chunk
const arr = [1,2,3,4,5,6,7,8];
const chunk = 3;

for(let i = 0 ; i < arr.length ; i += chunk){
    console.log(arr.slice(i,i+chunk));
}