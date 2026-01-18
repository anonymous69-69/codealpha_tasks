const display = document.getElementById('result');
const prevOpText = document.getElementById('prevOp');
const historyList = document.getElementById('historyList');
let history = [];

function appendToDisplay(value) {
    if (display.value === "0" || display.value === "Error") display.value = "";
    display.value += value;
}

function clearScreen() {
    display.value = "";
    prevOpText.innerText = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);
        
        // Add to History
        addHistory(`${expression} = ${result}`);
        
        prevOpText.innerText = expression;
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}

function scientific(type) {
    let val = parseFloat(display.value);
    if (isNaN(val)) return;

    let result;
    switch(type) {
        case 'sin': result = Math.sin(val * Math.PI / 180); break;
        case 'cos': result = Math.cos(val * Math.PI / 180); break;
        case 'sqrt': result = Math.sqrt(val); break;
        case 'pow': result = Math.pow(val, 2); break;
    }
    addHistory(`${type}(${val}) = ${result.toFixed(4)}`);
    display.value = result.toFixed(4);
}

function addHistory(entry) {
    history.push(entry);
    const li = document.createElement('li');
    li.innerText = entry;
    historyList.prepend(li); // Newest on top
}

function toggleHistory() {
    const panel = document.getElementById('historyPanel');
    panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
}

function clearHistory() {
    historyList.innerHTML = "";
    history = [];
}