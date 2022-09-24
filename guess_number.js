//guess a number between 1 to 10

let random = Math.floor(Math.random()*10 - 1);

let number = parseInt(prompt('Guess a number between 1 and 10 : '));

while(number != random){
    if(number > random){
        number = parseInt(prompt('Too high...Guess a smaller number : '));
    }
    else{
        number = parseInt(prompt('Too Low...Guess a larger number : '));
    }
}

if(number == random){
    console.log('You got it right');
}