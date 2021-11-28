function odd_nums(array){
    let odd = [];
    for (let i = 0; i < array.length; i++){
      if (i % 2 ===1){
        odd.unshift(array[i] * 2)
      }
    }
    return odd.join(' ')
  }
  
  console.log(odd_nums([10, 15, 20, 25]))
  