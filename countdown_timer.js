//set a countdown date
let countDownDate = new Date(2023, 07, 05);

let res = setInterval(function(){
    //get today's date and time
    let todayTime = new Date().getTime();

    let timeLeft = countDownDate - todayTime;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 *24));
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    if(timeLeft < 0){
        clearInterval(res);
        console.log('CountDown Timer Finished.');
    }
} , 2000);