class Card {
    constructor(house, value, name){
        this.house = house;
        this.value = value;
        this.name = name;
        
    };
   
}

class Deck {

    
    constructor(highAce = true){
        this.deck = [];
        this.suite = [];
        this.highAce = highAce;
    };
    buildHouse(house){ 
    //let suite = []; 
        for (let i = 0; i < 13; i++ ) {
        //create new card
        let card = new Card();
        //assign card to array index
        this.suite[i] = card;
        //set house
        card.house = house;
        //set value
        card.value = i+1;
        //name cards
        if (card.value < 10) {
            card.name = card.value;
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
    return this.suite;
    }
    buildDeck() {
        let houses = ['clubs', 'diamonds', 'hearts', 'spades'];
        let arr =[];
        for (let i=0; i< houses.length; i++) {       
       
            this.deck=this.deck.concat(this.buildHouse(houses[i]))        
        }
        return this.deck;
    }
}

class Player {
    constructor(){
        this.name = '';
        this.score = 0;
    };

}

class Game {

}

let deck = new Deck().buildDeck();
console.log(deck);

