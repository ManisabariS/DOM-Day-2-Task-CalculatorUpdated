document.addEventListener('DOMContentLoaded', function() {
    const buttonsContainer = document.getElementById('buttons');
    const buttonValues = ['C', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.',  '/','='];

    buttonValues.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        if(value ==='=')
            {
                button.setAttribute("class","equalto");
            }
        button.addEventListener('click', function() {
            buttonClickHandler(value);
        });
        buttonsContainer.appendChild(button);
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (buttonValues.includes(key) || key === 'Enter') {
            buttonClickHandler(key);
        } else {
            alert("Only numbers, mathematical operators, and Enter key are allowed!");
        }
    });
});

function buttonClickHandler(value) {
    if (value === '=') {
        calculate();
    } 
    else if(value === 'C')      
    {
        location.reload();
    }
    else {
        appendToDisplay(value);
    }
}


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = evaluateInfixExpression(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function evaluateInfixExpression(expression) {
    
    return eval(expression);
}
