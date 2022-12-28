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

//clear output text and num values
clearButton.addEventListener('click', function () { 
    outputScreenText.textContent = '';
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    lastChar = null;
});

getResultButton.addEventListener('click', function () {
    //check if first num is negative and get it accordingly
    if (checkIfNegative(outputScreenText.textContent)) {
        firstNum = parseFloat(outputScreenText.textContent.match(/-\d+[.]\d+|-\d+/));
    } else {
        firstNum = parseFloat(outputScreenText.textContent.match(/\d+[.]\d+|\d+/));
    }
    secondNum = parseFloat(outputScreenText.textContent.match(/(\d+[.]\d+|\d+)$/));
    currentOperator = outputScreenText.textContent.match(/(?<=\d)[+\-*/](?=\d)/)[0];

    outputScreenText.textContent = operate(firstNum, secondNum, currentOperator);

    //result is now the first num of the next operation
    firstNum = parseFloat(outputScreenText.textContent);
    secondNum = null;
    currentOperator = null;
})

function updateScreenText (newChar) {
    //don't allow user to input 2 non-number items in a  row
    if (!parseInt(lastChar) && parseInt(lastChar) !== 0 && !parseInt(newChar)) {   
        return;
    }

    //executes when clicking an operator
    if (!parseInt(newChar) && newChar != 0 && newChar != '.') {
        if (currentOperator === null && secondNum === null) {
            currentOperator = newChar;
        }
        //executes once after page load or after clearing calculator text
        else if (!firstNum) {
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
    if ((x+y) % 1 !== 0) {
        return (x+y).toFixed(2);
    } else {
        return (x+y);
    }
}

function operateSubtract (x, y) {
    if ((x-y) % 1 !== 0) {
        return (x-y).toFixed(2);
    } else {
        return (x-y);
    }
}

function operateMultiply (x, y) {
    if ((x*y) % 1 !== 0) {
        return (x*y).toFixed(2);
    } else {
        return (x*y);
    }
}

function operateDivide (x, y) {
    if ((x/y) % 1 !== 0) {
        return (x/y).toFixed(2);
    } else {
        return (x/y);
    }
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

function checkIfNegative (str) {
    if (str.match(/(?<!\d)-/)) {
        return true;
    } else {
        return false;
    }
}

//console.log();
