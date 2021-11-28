function buy_food(fruit, weight, price){
    let weights = weight / 1000;
    console.log(`I need $${(price* weights).toFixed(2)} to buy ${weights.toFixed(2)} kilograms ${fruit}.`);
}
buy_food('orange', 2500, 1.80)