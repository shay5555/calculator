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

let firstNum = null;
let secondNum = null;
let currentOperator;

//get last character of the user input
let lastChar = outputScreenText.textContent.charAt(outputScreenText.textContent.length-1);

//write to screen numbers/operators
printToScreenButton.forEach(e => {
    e.addEventListener('click', function () {
        updateScreenText(this.textContent);
    });
}); 

//clear output text
clearButton.addEventListener('click', function () { 
    outputScreenText.textContent = '';
    firstNum = null;
    secondNum = null
});

function updateScreenText (newChar) {
    //don't allow user to input 2 non-number items in a  row
    if (!parseFloat(lastChar) && !parseFloat(newChar)) {
        return;
    }

    //executes when clicking an operator
    if (!parseInt(newChar) && newChar != 0 && newChar != '.') {
        //executes once after page load or after clearing calculator text
        if (!firstNum) {
            firstNum = parseFloat(outputScreenText.textContent.match(/\d+[.]\d+|\d+/));
            currentOperator = newChar;
        //executes on second operaor click & onwards
        } else if (!secondNum) {
            //get number on the right(second num)
            secondNum = parseFloat(outputScreenText.textContent.match(/(\d+[.]\d+|\d+)$/));
            outputScreenText.textContent = operate(firstNum, secondNum, currentOperator);
            //current text is the result of the last operation, which is the first num of the current one
            firstNum = parseFloat(outputScreenText.textContent);
            currentOperator = newChar;
            secondNum = null;
        }
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
