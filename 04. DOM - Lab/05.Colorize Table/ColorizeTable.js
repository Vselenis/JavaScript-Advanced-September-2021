function colorize() {
    const rows = document.querySelectorAll('table tr');
    
    for (let x = 0; x < rows.length; x +=2){
        rows[x].style.backgroundColor = 'teal';
    }
}