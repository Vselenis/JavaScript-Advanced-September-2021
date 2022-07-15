class Parking{
    constructor(capacity){
        this.capacity = capacity
        this.vehicles = []
    }
    addCar(carModel, carNumber){
        if(this.capacity < 0){
            throw new Error("Not enough parking space.")
        }
        this.vehicles.push({carModel, carNumber, payed:false})
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber){
        const carObj = this.vehicles.find(c => c.carNumber === carNumber)
        if (!carObj){
            throw new Error("The car, you're looking for, is not found.")
        }else if(carObj.payed === false){
            throw new Error(`${carObj.carNumber} needs to pay before leaving the parking lot.`)
        }
        const index = this.vehicles.indexOf(carObj)
        this.vehicles.slice(index, 1)
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber){
        const carObj = this.vehicles.find(c => c.carNumber === carNumber)
        if (!carObj) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }else if(carObj.payed === true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        carObj.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber){
        const carObj = this.vehicles.find(c => c.carNumber === carNumber)
        if(carNumber){
            return this.carReport(carObj)
        }else {
            let result = []
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`)

            let sortedVehicles = this.vehicles
                .slice()
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(carObj => {
                    result.push(this.carReport(carObj))
                })
            return result.join("\n")
        }
    }
    carReport(car){
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? "Has payed" : "Not payed"}`
    }
}



const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));

console.log(parking.removeCar("TX3691CA"));


