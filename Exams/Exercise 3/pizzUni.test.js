import {expect} from "chai";
import pizzUni from "./pizzUni";

describe('Tests pizzUni', () => {
    describe("Test makeAnOrder", () => {
        it("has no pizza in our obj", () =>{
            expect(() => pizzUni.makeAnOrder({})).to.throw()
        })
        it("has pizza in ot obj", () =>{
            expect(pizzUni.makeAnOrder({orderedPizza: "Margarita", orderedDrink: "Cola"})).to.be.equal(`You just ordered Margarita and Cola.`)
            expect(pizzUni.makeAnOrder({orderedPizza: "Margarita"})).to.be.equal(`You just ordered Margarita`)
        })
    })
    describe("Test getRemainingWork", () => {
        it("it test preparing pizzas", () => {
            expect(pizzUni.getRemainingWork([{pizzaName: "Margarita", status: "preparing"}])).to.be.equal(`The following pizzas are still preparing: Margarita.`)
            expect(pizzUni.getRemainingWork([{pizzaName: "Margarita", status: "preparing"}, {pizzaName: "Bogata", status: "preparing"}])).to.be.equal(`The following pizzas are still preparing: Margarita, Bogata.`)
            expect(pizzUni.getRemainingWork([{pizzaName: "Margarita"}])).to.be.equal(`The following pizzas are still preparing: Margarita.`)
            expect(pizzUni.getRemainingWork([{pizzaName: "Margarita", status: "ready"},{pizzaName: "Bogata"}])).to.be.equal(`The following pizzas are still preparing: Bogata.`)
            expect(pizzUni.getRemainingWork([{pizzaName: "Margarita", status: "preparing"}, {pizzaName: "Bogata", status: "ready"}])).to.be.equal(`The following pizzas are still preparing: Margarita.`)
        })
        it("test ready pizzas", () => {
            expect(pizzUni.getRemainingWork([{pizzaName: "Margarita", status: "ready"},{pizzaName: "Bogata", status: "ready"}])).to.be.equal('All orders are complete!')
            expect(pizzUni.getRemainingWork([{pizzaName: "Margarita", status: "ready"}])).to.be.equal('All orders are complete!')
            expect(pizzUni.getRemainingWork([])).to.be.equal('All orders are complete!')
        })
    })
    describe("Test orderType", () => {
        it("has a 10% pizza discount", () =>{
            expect(pizzUni.orderType(10, 'Carry Out')).to.be.equal(9)
            expect(pizzUni.orderType(10.5, 'Carry Out')).to.be.equal(9.45)

        })
        it("has no discounts", () =>{
            expect(pizzUni.orderType(10, "Delivery")).to.be.equal(10)
            expect(pizzUni.orderType(10.5, "Delivery")).to.be.equal(10.5)
        })
    })
})