"use strict";

const input = document.getElementById("calculator-input");
const previousSpan = document.getElementById("previous");

const current = {
    input: "0",
    a: undefined,
    action: undefined,
    b: undefined,
    result: undefined,
};

function calculate(object) {
    const a = parseInt(object.a);
    const b = parseInt(object.b);
    if (isNaN(a) || isNaN(b)) {
        return "error";
    }

    switch (object.action) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "error";
    }
}

document.addEventListener("keydown", function (event) {
    const actions = ["+", "-", "*", "/", "="];
    if (actions.includes(event.key)) {
        onActionInput(event.key);
    }
    else if (event.key >= '0' && event.key <= '9') {
        onNumberInput(event.key);
    }
    else if (event.key === "Enter") {
        onCalculate();
    }
    else if (event.key === "Escape") {
        onClear();
    }
});

document.querySelectorAll(".number").forEach(function (element) {
    element.addEventListener("click", function (event) {
        onNumberInput(event.target.textContent);
    });
});

function onNumberInput(number) {
    if (current.input === "0") {
        current.input = number;
    }
    else {
        current.input += number;
    }
    showCurrent();
}

function onActionInput(action) {
    if (current.action === undefined) {
        current.a = current.input;
        current.action = action;
        current.b = undefined;
        current.input = "0";
    }
    showCurrent();
}

function onCalculate() {
    current.b = current.input;
    current.result = calculate(current);
    showCurrent();
}

function onClear() {
    current.input = "0";
    current.a = undefined;
    current.action = undefined;
    current.b = undefined;
    current.result = undefined;

    showCurrent();
}

function showCurrent() {
    if (current.result === undefined) {
        input.value = current.input;
    }
    else {
        input.value = current.result;
    }


    let span = "";
    if (current.a !== undefined && current.action !== undefined) {
        span += current.a;
        span += " " + current.action;

        if (current.b !== undefined) {
            span += " " + current.b + " = "
        }
    }
    previousSpan.textContent = span;
}
