function sort_nums(array){
    let sort_array = array.sort((a,b) => a-b);
    let half = array.length / 2;
    let first_half = sort_array.slice(0, half);
    let second_half = sort_array.slice(half, sort_array.length);
  
    let new_array = [];
    for (let i = 0; i < half; i++){
      let smaller = first_half.shift();
      let bigger = second_half.pop();
      new_array.push(smaller);
      new_array.push(bigger);
    }
    return new_array.filter( Number );
}
  
console.log(sort_nums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));