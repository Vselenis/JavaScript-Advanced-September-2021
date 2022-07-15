const {expect} = require('chai');
const {mathEnforcer} = require('./mathEnforcerr');

describe('Test addFive function', () => {
    it("Expect undefined on wrong input file", () => {
        expect(mathEnforcer.addFive("adsf")).to.be.undefined;
        expect(mathEnforcer.addFive([5])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    })
    it ("Expect proper number type", () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        expect(mathEnforcer.addFive(-5.3)).to.be.closeTo(-0.3, 0.01);
    })



})

describe('Test subtractTen function', () => {
    it("Expect undefined on wrong input", () => {
        expect(mathEnforcer.subtractTen("adsf")).to.be.undefined;
        expect(mathEnforcer.subtractTen([5])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    })
    it("Expect proper number outcome", () => {
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        expect(mathEnforcer.subtractTen(-5.3)).to.be.closeTo(-15.3, 0.01);
    })

})

describe('Test sum function', () => {
    it("Expect undefined on wrong input", () => {
        expect(mathEnforcer.sum("adsf", "asd")).to.be.undefined;
        expect(mathEnforcer.sum([5], 'asd')).to.be.undefined;
        expect(mathEnforcer.sum({}, 5)).to.be.undefined;
        expect(mathEnforcer.sum(undefined,5)).to.be.undefined;
        expect(mathEnforcer.sum("adsf", 5)).to.be.undefined;
        expect(mathEnforcer.sum(5, [5])).to.be.undefined;
        expect(mathEnforcer.sum({}, 5)).to.be.undefined;
        expect(mathEnforcer.sum(undefined)).to.be.undefined;
    })
    it("Expect proper number outcome", () => {
        expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
        expect(mathEnforcer.sum(-5.3, 5)).to.be.closeTo(-0.3, 0.01);
    })

})