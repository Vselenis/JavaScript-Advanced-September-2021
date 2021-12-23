function solve(){
    let result = {}
    for (let i = 0; i < arguments.length; i++) {
        getType = typeof(arguments[i])
        if (getType in result){
            result[getType] += 1;
        }else{
            result[getType] = 1;
        }
        console.log(`${getType}: ${arguments[i]}`);
    }
    const sortable = Object.entries(result)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    for (x in sortable){
        console.log(`${x} = ${sortable[x]}`);
    }
}

solve({ name: 'bob'}, 3.333, 9.999)
