function subtract() {

 let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let subtract = document.getElementById('result');

    let result = Number(firstNumber.value) - Number(secondNumber.value);
    subtract.textContent = Number(result);
}
