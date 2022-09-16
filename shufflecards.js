const suits = ['Diamond','Shade','Heart','Club'];
const values = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];

let deck = [];

//create a deck of cards
for(let i = 0; i < suits.length; i++){
    for(let j = 0; j < values.length; j++){
        let card = {Suit : suits[i] , Value : values[j]};
        deck.push(card);
    }
}

//shuffle the cards
for(let i = deck.length - 1; i > 0 ; i--){
    let j = Math.floor(Math.random()*i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

//get first 10 cards
for(let i = 0 ; i < 10 ; i++){
    console.log(`${deck[i].Suit} : ${deck[i].Value}`);
}