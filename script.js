//get output screen text and turn it to an array
const outputScreenText = document.querySelector('.screen-text');

const numberButtons = document.querySelectorAll('button.number');
const operatorButtons = document.querySelectorAll('button.operator');
const clearButton = document.getElementById('clear');
const getResultButton = document.getElementById('get-result');
const signChangeButton = document.getElementById('sign-change');
const decimalPointButton = document.getElementById('decimal-point');


numberButtons.forEach(e => {
    e.addEventListener('click', function () {
        console.log(this.textContent);
        updateScreenText(this.textContent);
    });
}); 

function updateScreenText (newChar) {
    outputScreenText.textContent += `${newChar}`;
}

function operateAdd (x, y) {
    return x+y;
}

function operateSubtract (x, y) {
    return x-y;
}

function operateMultiply (x, y) {
    return x*y;
}

function operateDivide (x, y) {
    return x/y;
}

function operate (x, y, operator) {
    switch(operator) {
        case '+':
            return operateAdd(x, y);
        case '-':
            return operateSubtract(x, y);
        case '*':
            return operateMultiply(x, y);
        case '/':
            return operateDivide(x, y);
        default:
            alert("Invalid operator");
            return null;
    }
}



console.log(numberButtons);