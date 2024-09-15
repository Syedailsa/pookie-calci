let display = document.getElementById("display") as HTMLInputElement;

let firstValue: string = "";   // To store the first number
let secondValue: string = "";  // To store the second number
let operator: string = "";     // To store the selected operator
let isOperatorClicked = false; // To check if the operator has been clicked

function appendToDisplay(input: string) {
    if (isOperatorClicked) {
        secondValue += input;
    } else {
        firstValue += input;
    }
    display.value += input;
}

function appendOperator(op: string) {
    if (!isOperatorClicked) {
        isOperatorClicked = true;  
        operator = op;             
        display.value += ` ${op} `;
    // Append operator to display with spaces
    }
}

function Calculate() {
    if (firstValue && secondValue && operator) {
        let result: number;

        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
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


