function n_element(array, n) {
    let new_array = [];
    for (let x = 0; x < array.length; x++) {
      if (x % n === 0){
        new_array.push(array[x])
      }
    }
    return new_array;
  }
  