function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const rows = Array.from(document.querySelector('tbody').children);

    let removed = false
    for (let row of rows){
        if (row.children[1].textContent == input.value){
            row.remove();
            removed = true
        }
    }
    if (removed) {
        document.querySelector('#result').textContent = 'Removed'
    }else{
        document.querySelector('#result').textContent = 'Not found.'
    }
    
}