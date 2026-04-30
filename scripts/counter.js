//var
let number = 0;
let addonebutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");
let delbutton = document.getElementById("clear-button");
let minusbutton = document.getElementById("minus-button");
let Zerobutton = document.getElementById("zero-button");
let Onebutton = document.getElementById("one-button");
let Twobutton = document.getElementById("two-button");
let Threebutton = document.getElementById("three-button");
let Fourbutton = document.getElementById("four-button");
let Fivebutton = document.getElementById("five-button");
let Sixbutton = document.getElementById("six-button");
let Sevenbutton = document.getElementById("seven-button");
let Eightbutton = document.getElementById("eight-button");
let Ninebutton = document.getElementById("nine-button");
let plusButton = document.getElementById("plus-button");
let Equalbutton = document.getElementById("equ-button");
let SecondNumber = 0;
let Answer = 0;
let CilckButton = false;




//function

function show(val) {
    counter.textContent = val;
}

function plus() {
    CilckButton = true;
}
function equal() {
    Answer = number + SecondNumber;
    counter.textContent = Answer;

    number = Answer;
    SecondNumber = 0;
    CilckButton = false;
}

function add1() {
    number = number + 1;
    show(number);
}
function clear() {
    number = 0;
    SecondNumber = 0;
    Answer = 0;
    CilckButton = false;
    show(0)
}
function minus() {
    number = number - 1;
    show(number);
}
function zero() {

    if (!CilckButton) {
        number = number * 10 + 0;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 0;
        show(SecondNumber);
    }
}
function one() {

    if (!CilckButton) {
        number = number * 10 + 1;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 1; show(SecondNumber);
    }
}
function two() {

    if (!CilckButton) {
        number = number * 10 + 2;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 2; show(SecondNumber);
    }
}
function three() {

    if (!CilckButton) {
        number = number * 10 + 3;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 3; show(SecondNumber);
    }
}
function four() {

    if (!CilckButton) {
        number = number * 10 + 4;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 4; show(SecondNumber);
    }
}
function five() {

    if (!CilckButton) {
        number = number * 10 + 5;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 5; show(SecondNumber);
    }
}
function six() {

    if (!CilckButton) {
        number = number * 10 + 6;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 6; show(SecondNumber);
    }
}
function seven() {

    if (!CilckButton) {
        number = number * 10 + 7;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 7; show(SecondNumber);
    }
}
function eight() {

    if (!CilckButton) {
        number = number * 10 + 8;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 8; show(SecondNumber);
    }
}
function nine() {

    if (!CilckButton) {
        number = number * 10 + 9;
        show(number);
    } else {
        SecondNumber = SecondNumber * 10 + 9; show(SecondNumber);
    }
}

//evenlistener
addonebutton.addEventListener("click", add1);
delbutton.addEventListener("click", clear);
minusbutton.addEventListener("click", minus);
Zerobutton.addEventListener("click", zero);
Onebutton.addEventListener("click", one)
Twobutton.addEventListener("click", two);
Threebutton.addEventListener("click", three);
Fourbutton.addEventListener("click", four);
Fivebutton.addEventListener("click", five);
Sixbutton.addEventListener("click", six);
Sevenbutton.addEventListener("click", seven);
Eightbutton.addEventListener("click", eight);
Ninebutton.addEventListener("click", nine);
plusButton.addEventListener("click", plus);
Equalbutton.addEventListener("click", equal);