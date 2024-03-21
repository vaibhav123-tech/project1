let buttons = document.querySelectorAll('.buttons');
let decideo = true; // player 0 and player x
let winnera = document.querySelector('.result');
let reset_button = document.querySelector('.reset');
const win_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetbutton = () => {
    winnera.innerText = '';
    decideo = true;
    enable();
    buttons.forEach(button => button.innerText = '');
}

const enable = () => {
    buttons.forEach(button => {
        button.disabled = false;
        button.innerText = '';
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (decideo) {
            button.innerText = 'o';
            decideo = false;
        } else {
            button.innerText = 'x';
            decideo = true;
        }
        button.disabled = true;
        winning();
        checkDraw(); // Check for draw after each move
    });
});

const disable = () => {
    buttons.forEach(button => button.disabled = true);
}

const display = (winner) => {
    winnera.innerText = `Congratulations to player ${winner}`;
    disable();
}

const drawdisplay = () => {
    winnera.innerText = `Congratulations it's a draw`;
}

function winning() {
    for (let pattern of win_pattern) {
        let pos1val = buttons[pattern[0]].innerText;
        let pos2val = buttons[pattern[1]].innerText;
        let pos3val = buttons[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                display(pos1val);
                return; // If winning condition met, exit function
            }
        }  
    }
}

function checkDraw() {
    let isDraw = true;
    for (let button of buttons) {
        if (button.innerText === '') {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        drawdisplay();
    }
}

reset_button.addEventListener("click", resetbutton);
