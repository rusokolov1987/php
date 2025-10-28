let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value +=  '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value +=  '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value +=  '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value +=  '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value +=  '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value +=  '0';
})

document.getElementById('btn_add').addEventListener('click', function () {
    lastOperand = inputWindow.value;
    operation = '+';
    inputWindow.value = '';
})

document.getElementById('btn_diff').addEventListener('click', function () {
    lastOperand = inputWindow.value;
    operation = '-';
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = inputWindow.value;
    operation = '/';
    inputWindow.value = '';
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = inputWindow.value;
    operation = '*';
    inputWindow.value = '';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = inputWindow.value;
    operation = 'sqrt';
    inputWindow.value = Math.sqrt(parseInt(lastOperand));
})

document.getElementById('btn_result').addEventListener('click', function () {
    let result = 0;
    switch(operation) {
        case "+":
            result = parseInt(lastOperand) + parseInt(inputWindow.value);
            inputWindow.value = result;
            break;
        case "-":
            result = parseInt(lastOperand) - parseInt(inputWindow.value);
            inputWindow.value = result;
            break;   
        case "*":
            result = parseInt(lastOperand) * parseInt(inputWindow.value);
            inputWindow.value = result;
            break;  
        case "/":
            if (inputWindow.value == 0) return;
            result = parseInt(lastOperand) / parseInt(inputWindow.value);
            inputWindow.value = result;
            break;      
    }
})

