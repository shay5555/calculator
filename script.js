//get output screen text and turn it to an array
const outputScreenText    = document.querySelector('.screen-text');

const numberButtons       = document.querySelectorAll('button.number');
const operatorButtons     = document.querySelectorAll('button.operator');
const printToScreenButton = document.querySelectorAll('.buttons .write-to-screen');
const allButtons          = document.querySelectorAll('.buttons button');
const clearButton         = document.getElementById('clear');
const getResultButton     = document.getElementById('get-result');
const signChangeButton    = document.getElementById('sign-change');
const decimalPointButton  = document.getElementById('decimal-point');

//get last character of the user input
let lastChar = outputScreenText.textContent.charAt(outputScreenText.textContent.length-1);

printToScreenButton.forEach(e => {
    e.addEventListener('click', function () {
        updateScreenText(this.textContent);
    });
}); 

clearButton.addEventListener('click', function () {
    outputScreenText.textContent = '';
})

function updateScreenText (newChar) {
    //don't allow user to input 2 non-number items in a row
    if (!parseInt(lastChar) && !parseInt(newChar)) {
        return;
    }

    outputScreenText.textContent += `${newChar}`;
    lastChar = newChar;
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

console.log();
