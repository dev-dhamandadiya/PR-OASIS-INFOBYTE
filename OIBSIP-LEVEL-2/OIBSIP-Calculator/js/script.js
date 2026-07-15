let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    let expression = display.value;

    let operator = "";

    if (expression.includes("+")) {
        operator = "+";
    } else if (expression.includes("-")) {
        operator = "-";
    } else if (expression.includes("*")) {
        operator = "*";
    } else if (expression.includes("/")) {
        operator = "/";
    }

    let values = expression.split(operator);

    let val1 = parseFloat(values[0]);
    let val2 = parseFloat(values[1]);

    switch (operator) {
        case "+":
            display.value = val1 + val2;
            break;

        case "-":
            display.value = val1 - val2;
            break;

        case "*":
            display.value = val1 * val2;
            break;

        case "/":
            display.value = val1 / val2;
            break;

        default:
            display.value = "Error";
    }
}