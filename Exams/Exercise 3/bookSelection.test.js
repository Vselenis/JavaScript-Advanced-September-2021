const bookSelection = require('./bookSelection');
const { expect, assert} = require('chai');
const cinema = require("../Exam/Exercise 3/cinema");
const numberOperations = require("../Exam/Exercise 3/numberOperations");




describe('Tests bookSelection', () => {
    describe("Test isGenreSuitable", () => {
        it("books are not for kids", () =>{
            expect(bookSelection.isGenreSuitable("Thriller",12)).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable("Thriller",10)).to.be.equal(`Books with Thriller genre are not suitable for kids at 10 age`)
            expect(bookSelection.isGenreSuitable("Horror",12)).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable("Horror",10)).to.be.equal(`Books with Horror genre are not suitable for kids at 10 age`)
          })
        it("books are suitable", () =>{
            expect(bookSelection.isGenreSuitable("Thriller",15)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Thriller",13)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Thriller",14)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Thriller",16)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Horror",15)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Horror",14)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Horror",13)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Horror",16)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Anime",12)).to.be.equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Fantastic",12)).to.be.equal(`Those books are suitable`)

        })
    })
    describe("Test isItAffordable", () => {
        it("no valid price or budget", () => {
            expect(() => bookSelection.isItAffordable(5,"5.50")).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable(5,undefined)).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable(5,"")).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable(5,[])).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable(5,{})).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable("5.50", 5)).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable(undefined, 5)).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable("", 5)).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable([], 5)).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable({}, 5)).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable("5.50", undefined)).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable(undefined, [])).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable("", [])).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable([], {})).to.throw("Invalid input")
            expect(() => bookSelection.isItAffordable({}, "5.50")).to.throw("Invalid input")
        })
        it("sorry, you don't have enough money to buy that book", () => {
            expect(bookSelection.isItAffordable(5,4)).to.be.equal("You don't have enough money")
            expect(bookSelection.isItAffordable(10,2)).to.be.equal("You don't have enough money")
        })
        it("you have enough money to buy that book", () => {
            expect(bookSelection.isItAffordable(5,5)).to.be.equal(`Book bought. You have 0$ left`)
            expect(bookSelection.isItAffordable(1,1)).to.be.equal(`Book bought. You have 0$ left`)
            expect(bookSelection.isItAffordable(2,5)).to.be.equal(`Book bought. You have 3$ left`)
            expect(bookSelection.isItAffordable(1,3)).to.be.equal(`Book bought. You have 2$ left`)
        })
    })
        describe("Test suitableTitles", () => {
            it("invalid input", () =>{
                expect(() => bookSelection.suitableTitles(5,"5.50")).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(5,undefined)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(5,"")).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(5,[])).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(5,{})).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles("5.50", 5)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(undefined, 5)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles("", 5)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles([], 5)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles({}, 5)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(5,"5.50")).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles([],undefined)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles([],2)).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles([],[])).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles([],{})).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(5,"5.50")).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles({},"5.50")).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles(undefined,"5.50")).to.throw("Invalid input")
                expect(() => bookSelection.suitableTitles("asd","5.50")).to.throw("Invalid input")
            })
            it("valid input", () =>{
                assert.deepEqual(bookSelection.suitableTitles(([{ title: "The Da Vinci Code", genre: "45" }]),"45"),[ 'The Da Vinci Code' ])
                assert.deepEqual(bookSelection.suitableTitles(([{ title: "The Da Vinci Code", genre: "45" }, { title: "asd", genre: "45" }]),"45"),[ 'The Da Vinci Code', "asd" ])

            })
        })
})