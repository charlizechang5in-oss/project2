//buttons
let zeroButton = document.getElementById("zero-button");
let oneButton = document.getElementById("one-button");
let twoButton = document.getElementById("two-button");
let threeButton = document.getElementById("three-button");
let fourButton = document.getElementById("four-button");
let fiveButton = document.getElementById("five-button");
let sixButton = document.getElementById("six-button");
let sevenButton = document.getElementById("seven-button");
let eightButton = document.getElementById("eight-button");
let nineButton = document.getElementById("nine-button");
let add1CounterButton = document.getElementById("add-1-counter-button");
let minus1CounterButton = document.getElementById("minus-1-counter-button");
let clearButton = document.getElementById("clear-button");
let counter = document.getElementById("counter");
let number = 0;
//functions
function add1() {
    number = number + 1;
    counter.textContent = number;
}

function minus1() {
    number = number - 1;
    counter.textContent = number;
}

function clear() {
    number = 0;
    counter.textContent = number;
}
//event
add1CounterButton.addEventListener("click", add1);
minus1CounterButton.addEventListener("click", minus1);
clearButton.addEventListener("click", clear);