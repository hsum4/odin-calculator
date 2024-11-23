

// functions
//add function
function add (firstNum, secondNum){
    return firstNum + secondNum;
}

//substract function
function substract (firstNum, secondNum){
    return firstNum - secondNum;
}

//multiply function
function multiply (firstNum, secondNum){
    return firstNum * secondNum;
}

//divide function
function divide (firstNum, secondNum){
    return firstNum / secondNum;
}

//operator function
function operator (operator, firstNum, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum)
        case "-":
            return substract(firstNum, secondNum)
        case "*":
            return multiply(firstNum, secondNum)
        case "/":
            return diivide(firstNum, secondNum)
    }
}