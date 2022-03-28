class Restaurant{
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(products){
        products.forEach((p) => {
            let [name, quantity, price] = p.split(" ")

            quantity = Number(quantity)
            price = Number(price)
            if (price <= this.budgetMoney){
                if (!this.stockProducts[name]){
                this.stockProducts[name] = 0
                }
                this.stockProducts[name] += quantity
                this.budgetMoney -= price
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            }else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        })
        return this.history.join("\n")
    }
    addToMenu(meal, neededProducts, price){
        if (!this.menu[meal]){
            this.menu[meal] = {
                products : {},
                price
            }
            neededProducts.forEach((el) =>
            {
                let [product, quantity] = el.split(' ');
                quantity = Number(quantity)
                this.menu[meal].products[product] = quantity
            })
        }else {
            return `The ${meal} is already in the our menu, try something different.`
        }
        const len = Object.keys(this.menu).length
        if (len === 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${len} meals in the menu, other ideas?`
        }
    }
    showTheMenu(){
        const meals = Object.keys(this.menu)
        if(meals.length === 0){
            return "Our menu is not ready yet, please come later..."
        } else {
            let result = []
             for(const [k,v] of Object.entries(this.menu)){
                result.push(`${k} - $ ${v.price}`)
            }
             return result.join('\n')
        }
    }
    makeTheOrder(meal){
        if (!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let neededProducts = {}
            for (let product in this.menu[meal].products){
                if(!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]){
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`

                } else {
                    neededProducts[product] = this.menu[meal].products[product]
                }
            }
            for (let pr in neededProducts){
                this.stockProducts[pr] -= neededProducts[pr]
            }
            this.budgetMoney += this.menu[meal].price
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }
    }

}





let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
