var expect = chai.expect;
var deck = new Deck().cards;

describe('Deck Building', function() {
    describe('#checkDeckLength', function() {
        it('should be an array of 52 cards', function() {
            x = deck.length;
            expect(x).to.equal(52);
        });       
    });
});

