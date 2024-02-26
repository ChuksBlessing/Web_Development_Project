function Calculator(num1, num2, operation) {
    return (operation(num1, num2));
}

function add(num1, num2) {
    return(num1 + num2);
}

function multiply(num1, num2) {
    return(num1 * num2);
}

function subtract(num1, num2) {
    return(num1 - num2);
}

function quotient(bigNum, smallNum) {
    return(bigNum / smallNum);
}

console.log(Calculator(4, 5, multiply));