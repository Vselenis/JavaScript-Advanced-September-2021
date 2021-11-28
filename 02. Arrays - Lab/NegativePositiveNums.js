function sort_array(array){
    let new_array = [];
    for (let i = 0; i <array.length; i++){
      if (array[i] < 0){
        new_array.unshift(array[i]);
      }else{
        new_array.push(array[i]);
      }
    }
    return new_array.join('\n')
  }
  