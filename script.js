const input = document.getElementById("calculator-input");

document.querySelectorAll(".number").forEach(function (element) {
    element.addEventListener("click", function (event) {
        onNumberInput(Number(event.target.textContent));
    });
});

document.querySelectorAll(".action").forEach(function (element) {
    element.addEventListener("click", function (event) {
        onActionInput(event.target.textContent);
    })
});

function onNumberInput(number) {
    input.value += number + " ";
}

function onActionInput(action) {
    input.value += action + " ";
}
