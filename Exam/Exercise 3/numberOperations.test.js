const numberOperations = require('./numberOperations');
const { expect } = require('chai');
const { assert } = require('chai');


describe('Tests numberOperations', () => {
    describe("Test powNumber", () => {
        it("powers a number", () =>{
            expect(numberOperations.powNumber(2)).to.be.equal(4)
            expect(numberOperations.powNumber(0)).to.be.equal(0)
            expect(numberOperations.powNumber(-2)).to.be.equal(4)
            expect(numberOperations.powNumber(NaN)).to.be.NaN
            expect(numberOperations.powNumber(1.5)).to.be.equal(2.25)

        })
    })
    describe("Test numberChecker", () => {
        it("test invalid input", () => {
            expect(() => numberOperations.numberChecker({})).to.be.throw()
            expect(() => numberOperations.numberChecker('asd')).to.be.throw()
            expect(() => numberOperations.numberChecker(undefined)).to.be.throw()
        })
        it("test if number is greater than 100", () => {
            expect(numberOperations.numberChecker(100)).to.be.equal("The number is greater or equal to 100!")
            expect(numberOperations.numberChecker("105")).to.be.equal("The number is greater or equal to 100!")
            expect(numberOperations.numberChecker(101.4)).to.be.equal("The number is greater or equal to 100!")
        })
        it("test if number is lower than 100", () => {
            expect(numberOperations.numberChecker(42)).to.be.equal("The number is lower than 100!")
            expect(numberOperations.numberChecker("42")).to.be.equal("The number is lower than 100!")
            expect(numberOperations.numberChecker("")).to.be.equal("The number is lower than 100!")

        })
    })
    describe("Test sumArrays", () => {
        it("sums two arrays indexes", () => {
            assert.deepEqual(numberOperations.sumArrays([2,3,4], [2,3]),[4,6,4])
            assert.deepEqual(numberOperations.sumArrays([2,3], [2,3]),[4,6])
            assert.deepEqual(numberOperations.sumArrays([], [2,3]),[2,3])
            assert.deepEqual(numberOperations.sumArrays([0], [2,3]),[2,3])
            assert.deepEqual(numberOperations.sumArrays([-1], [2,3]),[1,3])
            assert.deepEqual(numberOperations.sumArrays([2,3], [2,3,4]),[4,6,4])
            assert.deepEqual(numberOperations.sumArrays([2.5,3.6], [2,3,4]),[4.5,6.6,4])
            assert.deepEqual(numberOperations.sumArrays([2.5,3.6], [2,3.4,4]),[4.5,7,4])


        })
    })
})