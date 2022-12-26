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