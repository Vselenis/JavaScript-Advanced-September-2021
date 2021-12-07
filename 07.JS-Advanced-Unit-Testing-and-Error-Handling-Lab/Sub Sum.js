function subSum(numbers,stratIndex, endIndex){

    if (Array.isArray(numbers) == false) {
        return NaN
    }
    if (stratIndex < 0){
        stratIndex = 0
    }
    if (endIndex > numbers.length - 1){
        endIndex = numbers.length - 1
    }
    let sum = 0;

    for (let i = stratIndex; i <= endIndex;i++){
        sum += Number(numbers[i])
    }
    return sum
}
