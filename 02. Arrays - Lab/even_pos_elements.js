function even_psitive_elements(input){
    let even_index = ''
    for (let x = 0; x < input.length; x++){
      if(x % 2 === 0){
         even_index += input[x] + ' '
      }
    }
    return even_index
  }
  