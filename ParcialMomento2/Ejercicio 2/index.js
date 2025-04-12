const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('btnAdd');
const subtractButton = document.getElementById('btnSubtract');
const multiplyButton = document.getElementById('btnMultiply');
const divideButton = document.getElementById('btnDivide');
const resultElement = document.getElementById('result');
const errorElement = document.getElementById('error');
addButton.addEventListener('click', function() {
    if (!validateInputs()) return;
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 + num2;
    
    resultElement.textContent = `${num1} + ${num2} = ${result}`;
});
subtractButton.addEventListener('click', function() {
    if (!validateInputs()) return;
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 - num2;
    
    resultElement.textContent = `${num1} - ${num2} = ${result}`;
});
multiplyButton.addEventListener('click', function() {
    if (!validateInputs()) return;
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 * num2;
    
    resultElement.textContent = `${num1} x ${num2} = ${result}`;
});
divideButton.addEventListener('click', function() {
    if (!validateInputs()) return;
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    const result = num1 / num2;
    resultElement.textContent = `${num1} ÷ ${num2} = ${result}`;
});
