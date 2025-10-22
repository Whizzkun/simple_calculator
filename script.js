let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

function appendToDisplay(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '') {
            if (previousInput !== '' && operator !== '' && !shouldResetDisplay) {
                calculate();
                previousInput = currentInput;
            } else {
                previousInput = currentInput;
            }
            operator = value;
            display.value = previousInput + ' ' + operator + ' ';
            currentInput = '';
            shouldResetDisplay = false;
        }
    } else {
        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }
        currentInput += value;
        if (operator === '') {
            display.value = currentInput;
        } else {
            display.value = previousInput + ' ' + operator + ' ' + currentInput;
        }
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
}

function deleteLast() {
    if (shouldResetDisplay) {
        clearDisplay();
        return;
    }
    
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
        if (operator === '') {
            display.value = currentInput;
        } else {
            display.value = previousInput + ' ' + operator + ' ' + currentInput;
        }
    } else if (operator !== '') {
        operator = '';
        currentInput = previousInput;
        previousInput = '';
        display.value = currentInput;
    }
}

function calculate() {
    if (previousInput !== '' && currentInput !== '' && operator !== '') {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) {
            display.value = 'Erro: Entrada inválida';
            shouldResetDisplay = true;
            return;
        }
        
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    display.value = 'Erro: Divisão por zero';
                    shouldResetDisplay = true;
                    return;
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }
        
        // Formatação do resultado para evitar números muito longos
        if (result % 1 === 0) {
            result = result.toString();
        } else {
            result = parseFloat(result.toFixed(10)).toString();
        }
        
        display.value = previousInput + ' ' + operator + ' ' + currentInput + ' = ' + result;
        currentInput = result;
        operator = '';
        previousInput = '';
        shouldResetDisplay = true;
    }
}

// Allow keyboard input
document.addEventListener('keydown', function(event) {
    event.preventDefault(); // Previne comportamentos padrão
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        // Previne múltiplos pontos decimais
        if (!currentInput.includes('.')) {
            appendToDisplay(key);
        }
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});