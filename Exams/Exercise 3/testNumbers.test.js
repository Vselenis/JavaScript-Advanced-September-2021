const testNumbers = require('./testNumbers');
const { expect } = require('chai');
const {isOddOrEven} = require("./EvenOdd");



describe('Test Numbers', () => {
    describe("Test sumNumbers", () => {
        it("works with valid numbers", () =>{
            expect(testNumbers.sumNumbers(5,6)).to.be.equal(`11.00`)
            expect(testNumbers.sumNumbers(0,0)).to.be.equal(`0.00`)
        })
        it("works with valid negative numbers", () =>{
            expect(testNumbers.sumNumbers(-5,-6)).to.be.equal(`-11.00`)
            expect(testNumbers.sumNumbers(-6,0)).to.be.equal(`-6.00`)
            expect(testNumbers.sumNumbers(0,-6)).to.be.equal(`-6.00`)
        })
        it("does not work with invalid type", () =>{
            expect(testNumbers.sumNumbers({},{})).to.be.undefined;
            expect(testNumbers.sumNumbers([],[])).to.be.undefined;
            expect(testNumbers.sumNumbers("asd", "asdf")).to.be.undefined;
            expect(testNumbers.sumNumbers(undefined,undefined)).to.be.undefined;
            expect(testNumbers.sumNumbers({},5)).to.be.undefined;
            expect(testNumbers.sumNumbers([],5)).to.be.undefined;
            expect(testNumbers.sumNumbers("asd", 5)).to.be.undefined;
            expect(testNumbers.sumNumbers(undefined,5)).to.be.undefined;
            expect(testNumbers.sumNumbers(5,{})).to.be.undefined;
            expect(testNumbers.sumNumbers(5,[])).to.be.undefined;
            expect(testNumbers.sumNumbers(5, "asdf")).to.be.undefined;
            expect(testNumbers.sumNumbers(4,undefined)).to.be.undefined;
            expect(testNumbers.sumNumbers({},"5")).to.be.undefined;
            expect(testNumbers.sumNumbers([],"5")).to.be.undefined;
            expect(testNumbers.sumNumbers("asd", [])).to.be.undefined;
            expect(testNumbers.sumNumbers({},[])).to.be.undefined;
        })
        it("checks sum of values", () =>{
            expect(testNumbers.sumNumbers(5.1111,1.5555)).to.be.equal(`6.67`)
            expect(testNumbers.sumNumbers(-5,-6)).to.be.equal(`-11.00`)
            expect(testNumbers.sumNumbers(-5, 6)).to.be.equal(`1.00`)
        })
    })
    describe("Test numberChecker", () => {
        it ("Test if odd is returned", () => {
            expect(testNumbers.numberChecker(1)).to.be.equal("The number is odd!");
            expect(testNumbers.numberChecker('1')).to.be.equal("The number is odd!");
        })

        it ("Test if even is returned", () => {
            expect(testNumbers.numberChecker(2)).to.be.equal("The number is even!");
            expect(testNumbers.numberChecker('2')).to.be.equal("The number is even!");
            expect(testNumbers.numberChecker(0)).to.be.equal("The number is even!");
        })
        it("does not work with invalid type", () => {
            expect(() => testNumbers.numberChecker({})).to.throw()
            expect(() => testNumbers.numberChecker("asdf")).to.throw()
            expect(() => testNumbers.numberChecker(undefined)).to.throw()
        })
    })
    describe("Test averageSumArray", () => {
        it("sums numbers and get average", () => {
            expect(testNumbers.averageSumArray([1, 3])).to.be.equal(2);
        })
        it("sums numbers and get average", () => {
            expect(testNumbers.averageSumArray([1.55, 1.45])).to.be.equal(1.5);
        })
        it("sums numbers and get average", () => {
            expect(testNumbers.averageSumArray([-1.45, 1.45])).to.be.equal(0);
        })
    })

})