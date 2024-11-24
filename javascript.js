let firNum;
let secNum;
let operatorSign;

const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#backspace");
const equalBtn = document.querySelector("#equal");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");

digitBtns.forEach(button => {
    button.addEventListener("click", () => {
        const digit = button.textContent;
        display.textContent = display.textContent === "0" ? digit : display.textContent + digit;
    });
})

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        firNum = parseFloat(display.textContent);
        operatorSign = button.textContent;
        display.textContent = "0";
    });
})

equalBtn.addEventListener("click", () => {
    secNum = parseFloat(display.textContent);
    let result = parseFloat(operator(operatorSign, firNum, secNum));
    display.textContent = result;
})

clearBtn.addEventListener("click", () => {
    firNum = "";
    secNum = "";
    operatorSign = "";
    display.textContent = "0";
})

backBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1) || "0";
})

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