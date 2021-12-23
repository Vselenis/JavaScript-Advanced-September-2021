function solve(array, command){
    const map = {
        'asc': (a,b) => a-b,
        'desc': (a,b) => b-a
    }
    return array.sort(map[command])
}