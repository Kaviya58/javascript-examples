let num = 5;
let n1 = 0,n2 = 1;
let nextNum;

for(let i = 0;i <= num;i++){
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}