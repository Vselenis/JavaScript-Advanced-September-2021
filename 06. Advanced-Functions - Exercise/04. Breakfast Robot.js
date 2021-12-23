function robot() {
    const receptions = {
        apple : {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    function restock(element, quantity){
        storage[element] += Number(quantity);
        return `Success`
    }

    function prepare(recipe, quantity){
        const remainigStorage = {}

        for (const element in receptions[recipe]){
            const remaining = storage[element] - receptions[recipe][element] * Number(quantity);
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`
            }else {
                remainigStorage[element] = remaining
            }
        }

        Object.assign(storage, remainigStorage);
        return `Success`
    }

    function report(){
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }

    function control(str){
        const [command, item, quantity] = str.split(' ');
        
        switch(command){
            case 'restock': return restock(item, Number(quantity));
            case 'prepare': return prepare(item, Number(quantity));
            case 'report': return report(); 
        }
    }
    return control;
}

console.log(robot(`restock flavour 50`));
console.log(robot(`prepare lemonade 4`));
console.log(robot(`restock carbohydrate 10`));
console.log(robot(`restock flavour 10`));
console.log(robot(`prepare apple 1`));
console.log(robot(`restock fat 10`));
console.log(robot(`prepare burger 1`));