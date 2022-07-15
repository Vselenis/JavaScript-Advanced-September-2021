function addItem(){
    const text = document.getElementById('newItemText').value
    const value = document.querySelector('newItemValue').value

    const option = document.createElement("option")
    const menu = document.getElementById("menu")
    menu.appendChild(option)
    option.textContent = text
    option.value = value
}
