function check_sides(matrix){
    let counter = 0;
    for (let x = 0; x < matrix.length; x++){
      for (let y = 0; y < matrix[x].length; y++){
        if (x+1 < matrix.length && matrix[x][y] === matrix[x+1][y]){
          counter += 1;
        }
        if (y+1 < matrix[x].length && matrix[x][y] === matrix[x][y+1]){
          counter += 1;
        }
      }
    }
    return counter
  }
  
console.log(check_sides([['2', '3', '4', '7', '0'],['4', '0', '5', '3', '4'],['2', '3', '5', '4', '2'],['9', '8', '7', '5', '4']]))
console.log(check_sides([['test', 'yes', 'yo', 'ho'],['well', 'done', 'yo', '6'],['not', 'done', 'yet', '5']]))
console.log(check_sides([['2', '2', '5', '7', '4'],['4', '0', '5', '3', '4'],['2', '5', '5', '4', '2']]))
  

  