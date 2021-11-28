function smallest_nums(array){
  let lowest_two_nums = [];
  let half = array.length /2;
  for (let i = 0; i < half;i++){
    let min_num = array[0];
    for (let x = 0; x < array.length; x++){
      if (min_num < array[x]){
        min_num = array[x];
      }
    }
    lowest_two_nums.push(min_num)
    array.splice(array.indexOf(min_num), 1)
  }
  return lowest_two_nums.sort((a,b) => a-b);
}

console.log(smallest_nums([4, 7, 2, 5]))
console.log(smallest_nums([3, 19, 14, 7, 2, 19, 6]))