const day1 = new Date();
const day2 = new Date();

//compare values of two dates

compare1 = day1 > day2;
console.log(compare1);

compare2 = day1 < day2;
console.log(compare2);

compare3 = (day1.getTime === day2.getTime);
console.log(compare3);

compare4 = (day1 === day2);
console.log(compare4);
