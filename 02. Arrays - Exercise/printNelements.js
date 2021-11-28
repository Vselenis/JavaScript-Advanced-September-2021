function manipulation(array){
  let new_array = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'add'){
      counter += 1;
      new_array.push(counter);
    } else if (array[i] === 'remove'){
      counter += 1;
      new_array.pop();
    }
  }
  if (new_array.length === 0){
    return "Empty"
  }else{
    return new_array.join('\n');
  }
}
