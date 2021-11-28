function solve(n = 5){
    let result = '';

    for (let i = 0; i < n; i++){
        for(let i = 0; i < n; i++){
            result += "* ";
        }
        console.log(result);
        result = '';
    }
    
}

solve()