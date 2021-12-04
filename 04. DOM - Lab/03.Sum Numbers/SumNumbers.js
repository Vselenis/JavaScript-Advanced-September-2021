function calc() {
    num1 = Number(document.getElementById('num1').value)
    num2 = Number(document.getElementById('num2').value)

    const sum = num1 + num2

    document.getElementById('sum').value = sum
}
