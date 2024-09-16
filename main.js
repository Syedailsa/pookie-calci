var display = document.getElementById("display");
var firstValue = ""; // To store the first number
var secondValue = ""; // To store the second number
var operator = ""; // To store the selected operator
var isOperatorClicked = false; // To check if the operator has been clicked
function appendToDisplay(input) {
    if (isOperatorClicked) {
        secondValue += input;
    }
    else {
        firstValue += input;
    }
    display.value += input;
}
function appendOperator(op) {
    if (!isOperatorClicked) {
        isOperatorClicked = true;
        operator = op;
        display.value += " ".concat(op, " ");
        // Append operator to display with spaces
    }
}
function Calculate() {
    if (firstValue && secondValue && operator) {
        var result = void 0;
        var num1 = parseFloat(firstValue);
        var num2 = parseFloat(secondValue);
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "x":
                result = num1 * num2;
                break;
            case "%":
                result = num1 / num2;
                break;
            default:
                return;
        }
        // Display the result and reset values for new calculation
        display.value = result.toString();
        firstValue = result.toString();
        // firstValue set as result to ensure further calculation
        secondValue = "";
        operator = "";
        isOperatorClicked = false;
    }
}
function Clear() {
    display.value = "";
    firstValue = "";
    secondValue = "";
    operator = "";
    isOperatorClicked = false;
}
