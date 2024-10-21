

let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');
let currentInput = '';
let operation = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'AC') {
            currentInput = '';
            display.value = '';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '=') {
            if (currentInput) {
                try {
                    display.value = eval(currentInput); 
                    currentInput = display.value; 
                } catch (error) {
                    display.value = 'Error'; 
                    currentInput = '';
                }
            }
        } else {
            currentInput += value;
            display.value = currentInput; 
        }
    });
});
