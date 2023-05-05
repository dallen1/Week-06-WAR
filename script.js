class Card {
    constructor(){
        this.house = '';
        this.value = 0;
        this.name = '';
        
    };
   
}

class Deck {    
    constructor(highAce = true){
        this.highAce = highAce;
    };
    buildHouse(house){ 
        //create array
        const suite = [];
        //begin loop to assign a card to each suite index
        for (let i = 0; i < 13; i++ ) {
        //create new card
        let card = new Card();
        //assign card to array index
        suite[i] = card;
        //set house
        card.house = house;
        //set value
        card.value = i+1;
        //name cards
        if (card.value < 10) {
            card.name = card.value +1;
            } else if (card.value===10) {
                card.name ="Jack";
            } else if (card.value===11) {
                card.name="Queen";
            } else if (card.value===12) {
                card.name="King";
            } else if (card.value===13) {
                card.name="Ace";
                if (this.highAce != true) {
                    card.value = 0;
                }
            }       
        }
    return suite;
    }
    buildDeck() {
        let deck = [];
        const houses = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        for (let i=0; i< houses.length; i++) {       
       
            deck=deck.concat(this.buildHouse(houses[i]))        
        }
        return deck;
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.hand = [];
    };

}

class Game {
    
constructor(name1="Player1", name2="Player2") {
    this.player1= new Player(name1);
    this.player2 = new Player(name2);

}

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
shuffle(){
    let deck = new Deck().buildDeck();

    for (let i = deck.length -1; i>0 ;i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}

deal(){
    let deck = this.shuffle();

    for (let i=0; i < deck.length;i++) {
        if (i%2===0){
            this.player1.hand.push(deck[i]);
        } else if (i%2===1) {
            this.player2.hand.push(deck[i]);
        }
    }

}

play(){
    this.deal();
    let p1 = this.player1;
    let p2 = this.player2;
    //console.log(p1);

for (let i=0;i<26;i++) {
    let playString=`Round ${i}: 
        ${p1.name} plays ${p1.hand[i].name} of ${p1.hand[i].house} against ${p2.name}'s ${p2.hand[i].name} of ${p2.hand[i].house}.`;
    if (p1.hand[i].value > p2.hand[i].value) {
        p1.score++;
        
        console.log(`
        ${playString}
        ${p1.name} wins round`);
        
    } else if (p1.hand[i].value < p2.hand[i].value) {
        p2.score++;
        
        console.log(`
        ${playString}
        ${p2.name} wins round`);
    } else if (p1.hand[i].value == p2.hand[i].value) {
        
        console.log(`
        ${playString}
        Round Tied`);

}

    }
    if (p1.score > p2.score){
        console.log(`
        ${p1.name} wins Game! (${p1.score} vs ${p2.score})`)
    } else if (p1.score < p2.score) {
        console.log(`
        ${p2.name} wins Game! (${p1.score} vs ${p2.score})`)
    } else {
        console.log(`
        Game Tied! (${p1.score} vs ${p2.score})`)

    }

    }

}

let test = new Deck().buildDeck();

let game = new Game("Tom", "Jerry").play();

console.log(test);
