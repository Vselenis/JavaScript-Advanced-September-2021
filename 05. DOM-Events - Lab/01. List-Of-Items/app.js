function addItem(){
    const addItem = document.getElementById('newItemText');
    const newLi = document.createElement('li');

    newLi.textContent = addItem.value
    document.getElementById('items').appendChild(newLi);
    
    addItem.value = '';

}

