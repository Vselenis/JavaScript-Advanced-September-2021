const {expect} = require('chai');
const {isOddOrEven} = require('./EvenOdd');

describe('Test oddEven', () => {
    it ("Test invalid input", () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    })

    it ("Test if odd is returned", () => {
        expect(isOddOrEven("asd")).to.be.string("odd");
    })

    it ("Test if even is returned", () => {
        expect(isOddOrEven("asdd")).to.be.string("even");
        expect(isOddOrEven("")).to.be.string("even");
    })

})