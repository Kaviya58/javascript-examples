let number = 30;

console.log(`Factors of ${number} are `);
for (let i = 1; i <= number ; i++) {
    if(number % i === 0) {
        console.log(i);
    }
}