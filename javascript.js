let firNum;
let secNum;
let operatorSign;
let hasComputed = false;

const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#backspace");
const equalBtn = document.querySelector("#equal");
const digitBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const decimalBtn = document.querySelector("#decimal");

digitBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (hasComputed){
            display.textContent = "0";
            hasComputed = false;
        }
        const digit = button.textContent;
        display.textContent = display.textContent === "0" ? digit : display.textContent + digit;
    });
})

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (hasComputed){
            firNum = parseFloat(display.textContent);
            hasComputed = false;
        }
        else {
            firNum = parseFloat(display.textContent);
        }
        operatorSign = button.textContent;
        display.textContent = "0";
    });
})

equalBtn.addEventListener("click", () => {
    if (hasComputed) return;

    if (!operatorSign || firNum === null) {
        display.textContent = "Error";
        return;
    }

    secNum = parseFloat(display.textContent);

    if (operatorSign === "/" && secNum === 0){
        display.textContent = "-_-";
        hasComputed = true;
        return;
    }

    let result = parseFloat(operator(operatorSign, firNum, secNum));
    display.textContent = Math.round(result * 100) / 100;
    
    hasComputed = true;
})

clearBtn.addEventListener("click", () => {
    hasComputed = false;
    firNum = "";
    secNum = "";
    operatorSign = "";
    display.textContent = "0";
})

decimalBtn.addEventListener("click", () => {
    if (!display.textContent.includes(".")){
        display.textContent = display.textContent + decimalBtn.textContent;
    };
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
            return divide(firstNum, secondNum)
    }
}