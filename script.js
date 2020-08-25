//generate a random pin with pin generator
function generatePin(){
    let pin = Math.floor(Math.random()*10000).toString();
    if(pin < 1000){
        return 0+pin;
    }
    return pin;
}
//update the box
function updatePinBox(){
    document.getElementById("showPin").value = generatePin();
}
const generatePinButton = document.getElementById("pin");
generatePinButton.addEventListener("click", function(){
    updatePinBox();
    printOutput("");
    document.getElementById("correct").style.display = "none";
    document.getElementById("wrong").style.display = "none";
});

//returns the value of pinbox
function getPinBox(){
    return document.getElementById("showPin").value;
}

//this function stores the value of inputbox
function getOutput(){
    return document.getElementById("printPin").value;
}

//this function is to show the output
function printOutput(number){
    document.getElementById("printPin").value = number;
}
//numberpad
let number = document.getElementsByClassName("number");
for(let i=0; i<number.length; i++){
    number[i].addEventListener("click", function(){
        let output = getOutput();
        if(output!= NaN){
            output = output + number[i].innerHTML.toString();
            printOutput(output);
        }
    })
}

//clear button handler
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    printOutput("");
})
//backspace button handler
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", function(){
    let output = getOutput();
    if(output){
    output = output.substr(0, output.length-1);
    printOutput(output);
}
})

//submit button handler
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function(){
    let pin = getPinBox();
    let typedPin = getOutput();
    if(pin=== typedPin){
        document.getElementById("correct").style.display = "inline";
    }
    else{
        document.getElementById("wrong").style.display = "inline";
    }
})

