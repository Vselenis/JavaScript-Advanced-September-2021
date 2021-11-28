function add_delimiter(array,delimiter){
    let massage = [];
    massage.push(array[0]);
    for (let x = 1; x < array.length; x++){
      massage.push(delimiter);
      massage.push(array[x]);
    }
    return massage.join('')
  }
  
  console.log(add_delimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-'))
  