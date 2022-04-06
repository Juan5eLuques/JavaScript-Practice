const displayTopNumber=document.getElementById('top-number');
const displayBottomNumber=document.getElementById('bottom-number');

const buttonsNumbers=document.querySelectorAll('.number');
const ButtonOperators=document.querySelectorAll('.operator');

const display = new Display(displayTopNumber,displayBottomNumber);

buttonsNumbers.forEach(button=>{
    button.addEventListener('click',()=>display.addNumberToDisplay(button.innerHTML))
});

ButtonOperators.forEach(button=>{
    button.addEventListener('click',() =>display.eventCalculator(button.value))
});

display.printNumbers();

function syntaxError() {
    display.clearDisplay();
}