class Card {
    constructor(house, value, rank){
        this.house = house;
        this.value = value;
        this.rank = rank;
        
    };
   
}

class Deck {    
    constructor(highAce = true){
        this.highAce = highAce;
        this. deck = [];
    };

 
    buildDeck() {
        //static suites
        const house = ['♣️', '♦', '❤️', '♠']; 
        //loop to dynamically build cards. It accepts a boolean parameter to make ace high or low
        for (let i=0; i< house.length; i++) {        
            for (let j = 1; j <= 13; j++ ) {
                let value = j;
                let rank ='';
                if (j < 10) {
                    rank = j +1;
                    } else if (j===10) {
                        rank ="J";
                    } else if (j===11) {
                        rank="Q";
                    } else if (j===12) {
                        rank="K";
                    } else if (j===13) {
                        rank="A";
                        if (this.highAce != true) {
                            value = 0;
                        }
                    }   
                    this.deck.push(new Card(house[i], value, rank ))     
                }                 
        }
        return this.deck;
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

for (let i=0;i<26;i++) {
    let playString=`Round ${i}: 
        ${p1.name} plays ${p1.hand[i].rank} of ${p1.hand[i].house} against ${p2.name}'s ${p2.hand[i].rank} of ${p2.hand[i].house}.`;
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

let test = new Deck(false).buildDeck();

let game = new Game("Tom", "Jerry").play();

console.log(test);
