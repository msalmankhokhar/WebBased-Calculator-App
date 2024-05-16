const btnClear = document.getElementById('btnClear');
const btnBackSpace = document.getElementById('btnBackSpace');
const btnEqual = document.getElementById('btnEqual');
const input = document.getElementById('input');

const entryBtns = document.querySelectorAll('.btn.entry');

btnClear.addEventListener('click', event=>{
    input.value = '0';
})

function backSpace(){
    input.value = input.value.slice(0, -1);
}

btnBackSpace.addEventListener('click', backSpace);

for (const btn of entryBtns) {
    btn.addEventListener('click', event=>{
        input.value += btn.innerText;
    })
}

const arithmeticOperators = [ '+', '-', '/', '*' ]

function calculateResult(inputValue){
    // This function calculates and returns the result
    return eval(inputValue);
}

function validateInput(event) {
    const pressedKey = event.key;
    const validChars = '0123456789+-*/.'; // Valid characters

    if (validChars.indexOf(pressedKey) === -1) {
        event.preventDefault(); // Prevent input of invalid characters
    }
}

btnEqual.addEventListener('click', event=>{
    if (input.value.trim() != '') {
        const result = calculateResult(input.value);
        input.value = result;
    }else{
        window.alert("Please enter something")
    }
})