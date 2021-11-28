function biggest(array) {

  let max_num = array[0][0];
  for (let x = 0; x < array.length; x++) {
    for(let y= 0; y< array[x].length;y++){
      if (max_num < array[x][y]) {
        max_num = array[x][y];
      }
    }     
  }  
  return max_num
}
  
console.log(biggest([[20, 50, 10],[8, 33, 145]]))
console.log(biggest([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]))