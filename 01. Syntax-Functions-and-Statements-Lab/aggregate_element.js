function solve(list){
    let total_sum = 0;
    let inverse_values = 0;
    let concat = '';

    for (let el in list){
        total_sum += list[el];
        inverse_values += 1/list[el];
        concat += list[el];
    }
    console.log(total_sum);
    console.log(inverse_values);
    console.log(concat);
    
}

solve([1, 2, 3])
solve([2, 4, 8, 16])