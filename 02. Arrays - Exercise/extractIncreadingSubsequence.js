function extract_value(array){
    let biggest_value = array[0];
    let new_array = [array[0]];
    for (let x = 1; x < array.length; x++){
      if (array[x] >= biggest_value){
        biggest_value = array[x];
        new_array.push(array[x]);
      }
    }
    return new_array;
  }
  