const cinema = require('./cinema');
const { expect } = require('chai');


describe('Tests cinema', () => {
    describe("Test showMovies", () => {
        it("shows massage if no input", () =>{
            expect(cinema.showMovies([])).to.be.equal("There are currently no movies to show.")
        })
        it("works with valid numbers", () =>{
            expect(cinema.showMovies(['King Kong', "The Tomorrow War", "Joker"])).to.be.equal('King Kong, The Tomorrow War, Joker')
        })
        it("works with single movie", () =>{
            expect(cinema.showMovies(['42'])).to.be.equal('42')
        })


    })
    describe("Test ticketPrice", () => {
        it("works with valid input", () =>{
            expect(cinema.ticketPrice("Premiere")).to.be.equal(12.00)
            expect(cinema.ticketPrice("Normal")).to.be.equal(7.50)
            expect(cinema.ticketPrice("Discount")).to.be.equal(5.50)
        })
        it("does not work with invalid input", () =>{
            expect(() => cinema.ticketPrice("5.50")).to.throw("Invalid projection type.")
            expect(() => cinema.ticketPrice(undefined)).to.throw("Invalid projection type.")
            expect(() => cinema.ticketPrice(0)).to.throw("Invalid projection type.")
            expect(() => cinema.ticketPrice([])).to.throw("Invalid projection type.")
            expect(() => cinema.ticketPrice({})).to.throw("Invalid projection type.")
        })
    })
    describe("Test swapSeatsInHall", () => {
        it("does not work if we don't have a place", () =>{
            expect(cinema.swapSeatsInHall(undefined, 1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(undefined, undefined)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, undefined)).to.be.equal("Unsuccessful change of seats in the hall.")
        })
        it("does not work with invalid input", () =>{
            expect(cinema.swapSeatsInHall([], 1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall({}, "2")).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall("2", "2")).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall([], "2")).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, "2")).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall({}, {})).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, {})).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall([], {})).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall([], [])).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, [])).to.be.equal("Unsuccessful change of seats in the hall.")
        })
        it("does not work with invalid place", () =>{
            expect(cinema.swapSeatsInHall(21, 1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 0)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21, -1)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-1, 21)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 0)).to.be.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 1)).to.be.equal("Unsuccessful change of seats in the hall.")
        })
        it("works with valid place", () =>{
            expect(cinema.swapSeatsInHall(1, 19)).to.be.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 16)).to.be.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(10, 9)).to.be.equal("Successful change of seats in the hall.")
        })
    })


})