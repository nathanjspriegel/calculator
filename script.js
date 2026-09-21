let a = 0;
let b = 0;
let operator = '';


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            if (b == 0) {
                return "Error";
            } else {
                return divide(a, b);
            }
        default:
            return "Error";
    }
}

const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digitBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const equalBtn = document.querySelector('#equalBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const clearBtn = document.querySelector('#clearBtn');
const decimalBtn = document.querySelector('#decimalBtn');
const signBtn = document.querySelector('#signBtn');
const percentBtn = document.querySelector('#percentBtn');

let input = '';
let calculated = false;

digitBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (calculated) {
            input = '';
            calculated = false;
        }
        input = input + button.textContent;
        display.textContent = input;
    });
});

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (operator != '') {
            a = Number(a);
            b = Number(input);
            let result = operate(operator, a, b);
            if (result !== "Error") {
                result = Math.round(result * 1000) / 1000;
            }
            display.textContent = result;
            a = result;
        } else {
            a = input;
        }
        input = '';
        operator = button.textContent;
    });
});

equalBtn.addEventListener("click", () => {
    a = Number(a);
    b = Number(input);
    let result = operate(operator, a, b);
    if (result !== "Error") {
        result = Math.round(result * 1000) / 1000;
        input = String(result);
    } else {
        input = '';
    }
    display.textContent = result;
    operator = '';
    calculated = true;
});

deleteBtn.addEventListener('click', () => {
    input = input.slice(0, -1);
    display.textContent = input;
});

clearBtn.addEventListener('click', () => {
    a = 0;
    b = 0;
    input = '';
    operator = '';
    display.textContent = '';
});

decimalBtn.addEventListener('click', () => {
    if (!input.includes('.')) {
        input = input + decimalBtn.textContent;
        display.textContent = input;
    }
});

signBtn.addEventListener('click', () => {
    if (input !== '') {
        input = -1 * input;
        display.textContent = input;
    }
});

percentBtn.addEventListener('click', () => {
    if (input !== '') {
        input = input / 100;
        display.textContent = input;
    }
});