function smallest_nums(array){
    let lowest_two_nums = [];
    for (let i = 0; i < 2;i++){
      let min_num = array[0];
      for (let x = 0; x < array.length; x++){
        if (min_num > array[x]){
          min_num = array[x];
        }
      }
      lowest_two_nums.push(min_num)
      array.splice(array.indexOf(min_num), 1)
    }
    return lowest_two_nums.join(' ')
  }
  