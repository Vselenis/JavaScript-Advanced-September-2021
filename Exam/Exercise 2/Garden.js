class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant (plantName, spaceRequired){
        if(this.spaceAvailable <= spaceRequired){
            throw new Error("Not enough space in the garden.")
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })
        this.spaceAvailable -= spaceRequired
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){
        if (quantity <= 0 ){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        const currentPlant = this.plants.find(s => s.plantName === plantName);

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(currentPlant.ripe){
            throw new Error(`The ${plantName} is already ripe.`)
        }
        currentPlant.ripe = true
        currentPlant.quantity += quantity
        if(currentPlant.quantity === 1){
            return `${currentPlant.quantity} ${plantName} has successfully ripened.`
        } else {
            return `${currentPlant.quantity} ${plantName}s have successfully ripened.`
        }


    }
    harvestPlant(plantName){
        const currentPlant = this.plants.find(s => s.plantName === plantName);

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(!currentPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.spaceAvailable += currentPlant.spaceRequired
        let storagePlant = {
            plantName : currentPlant.plantName,
            quantity: currentPlant.quantity
        }
        this.storage.push(storagePlant)

        const index = this.plants.indexOf(currentPlant);
        this.plants.splice(index, 1);

        return `The ${plantName} has been successfully harvested.`
    }
    generateReport(){
        let result = [`The garden has ${this.spaceAvailable} free space left.`]
        let infoPlants = 'Plants in the garden: '
        let allPlants = []
        this.plants
            .sort((a,b) => a.plantName.localeCompare(b.plantName))
            .forEach(s => allPlants.push(`${s.plantName}`))
        infoPlants += allPlants.join(", ")
        result.push(infoPlants)
        if (this.storage.length === 0){
            result.push("Plants in storage: The storage is empty.")
        } else {
            let infoStorage = "Plants in storage: "
            let allStorage = []
            this.storage.forEach(el => {
                allStorage.push(`${el.plantName} (${el.quantity})`)
            })
            infoStorage += allStorage.join(", ")
            result.push(infoStorage)
        }
        return result.join('\n')


    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
