//variables
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

function one() {
    number = 1;
    counter.textContent = number;
}

function two() {
    number = 2;
    counter.textContent = number;
}
function three() {
    number = 3;
    counter.textContent = number;
}
function four() {
    number = 4;
    counter.textContent = number;
}
function five() {
    number = 5;
    counter.textContent = number;
}
function six() {
    number = 6;
    counter.textContent = number;
}
function seven() {
    number = 7;
    counter.textContent = number;
}
function eight() {
    number = 8;
    counter.textContent = number;
}
function nine() {
    number = 9;
    counter.textContent = number;
}
function zero() {
    number = 0;
    counter.textContent = number;
}
//event
add1CounterButton.addEventListener("click", add1);
minus1CounterButton.addEventListener("click", minus1);
clearButton.addEventListener("click", clear);
zeroButton.addEventListener("click", zero);
oneButton.addEventListener("click", one);
twoButton.addEventListener("click", two);
threeButton.addEventListener("click", three);
fourButton.addEventListener("click", four);
fiveButton.addEventListener("click", five);
sixButton.addEventListener("click", six);
sevenButton.addEventListener("click", seven);
eightButton.addEventListener("click", eight);
nineButton.addEventListener("click", nine);