function rotate_array(array, n){
    for (let i = 0; i < n; i++){
      let last_element = array.pop()
      array.unshift(last_element)
    }
    return array.join(' ')
  }    
  