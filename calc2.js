document.addEventListener('DOMContentLoaded', function() {
    const calculatorScreen = document.querySelector('.calculator-screen');
    const keys = document.querySelector('.calculator-keys');
    const historyList = document.querySelector('.history-list');
    let currentInput = '';
    let firstOperand = '';
    let operator = '';

    keys.addEventListener('click', function(event) {
        const target = event.target;
        const value = target.textContent;

        if (target.matches('button')) {
            if (target.classList.contains('operator')) {
                handleOperator(value);
            } else if (target.classList.contains('equal-sign')) {
                calculate();
            } else if (target.classList.contains('clear')) {
                resetCalculator();
            } else {
                inputDigit(value);
            }
        }
    });

    function handleOperator(nextOperator) {
        if (operator && currentInput) {
            calculate();
        }
        firstOperand = currentInput;
        operator = nextOperator;
        currentInput = '';
        updateScreen();
    }

    function calculate() {
        let result;
        const first = parseFloat(firstOperand);
        const second = parseFloat(currentInput);

        if (isNaN(first) || isNaN(second)) return;

        switch (operator) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case 'x':
                result = first * second;
                break;
            case '/':
                result = second === 0 ? 'Error' : first / second;
                break;
            default:
                return;
        }

        // Update screen with the result and add to history
        updateScreen(result);
        addToHistory(`${firstOperand} ${operator} ${currentInput} = ${result}`);

        // Reset state for the next calculation
        operator = '';
        firstOperand = '';
    }

    function inputDigit(digit) {
        if (digit === '.' && currentInput.includes('.')) return;
        currentInput = currentInput === '' && digit === '.' ? '0.' : currentInput + digit;
        updateScreen();
    }

    function updateScreen(result) {
        if (result !== undefined) {
            calculatorScreen.value = result;
        } else {
            calculatorScreen.value = `${firstOperand} ${operator} ${currentInput}`.trim();
        }
    }

    function resetCalculator() {
        currentInput = '';
        firstOperand = '';
        operator = '';
        updateScreen();
    }

    function addToHistory(entry) {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    }
});
