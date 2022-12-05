const buttons = document.getElementById("buttons");
const display = document.getElementById("display");

let displayValues = [];
let calcValues = ["0"];
let equalState = false;

buttons.addEventListener("click", e => {
    if(equalState == true) {
        displayValues = [];
        equalState = false;
    }
    const clicked = e.target.innerHTML.trim()
    calculos(clicked)
})

const calculos = (clicked) => {

    if(clicked.length <= 5) {

            if(clicked != "=" && clicked != "C" && clicked != "Reset") {
                if(isNaN(calcValues[calcValues.length - 1]) == true && isNaN(clicked) == true){
                 
                } else {
                displayValues.push(clicked)
                calcValues.push(clicked)
                }    
            } else if(clicked == "C") {
                displayValues.pop()
                calcValues.pop()
            } else if(clicked == "Reset") {
                calcValues = [];
                displayValues = [];
            } else if(clicked == "=") {
                calculate()
            }
        }
        showValues()
    }

const showValues = () => {
    if(displayValues.length == 0) {
        display.value = "0"
    } else {
        display.value = displayValues.join("")
    }
}

const calculate = () => {
    let result = (eval(calcValues.join('')).toFixed(10) * 1).toLocaleString()
    displayValues = [result]
    calcValues = []
    equalState = true
}