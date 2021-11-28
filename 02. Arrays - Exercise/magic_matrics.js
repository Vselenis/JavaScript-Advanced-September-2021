function magic(arr){
    let rowSums = [];
    let colSums = [];
    for (let i = 0; i < arr.length; i++){
        let row = arr[i];
        let sum = row.reduce((result, curr) => (result + curr),0);
        rowSums.push(sum);
    }
    for (let i = 0; i < arr.length; i++){
        let newRow = [];
        for(let y = 0; y<arr.length; y++){
            let index = arr.length -1-y
            newRow.push(arr[index][i])
        }
        let sum = newRow.reduce((result, curr) => (result + curr),0);
        colSums.push(sum);
    }
    return rowSums.concat(colSums).every((el, i, arr) => el === arr[0]);
}

console.log(magic([[1,2,3,4],[0,0,1],[0,1,0,0]]))
