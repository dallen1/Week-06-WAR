var expect = chai.expect;

describe('Deck Building', function() {
    describe('#checkDeckLength', function() {
        it('should be an array of 52 cards', function() {
            x = _populate();
            expect(x).to.length(52);
        });

        it('should throw an error if length is not 52', function() {
            expect(function() {
                _populate();
            }).to.throw(Error);
        });
    });
});

