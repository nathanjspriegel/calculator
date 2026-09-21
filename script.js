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
            return divide(a, b);
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
const decimal = document.querySelector('#decimalBtn');


let input = '';

digitBtns.forEach(button => {
    button.addEventListener('click', () => {
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
    input = '';
    let result = operate(operator, a, b);
    display.textContent = result;
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