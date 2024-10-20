let dice = document.getElementById('dice');
function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    switch (diceRoll) {
        
        case 1:
            dice.textContent = '1';
            break;
        case 2:
            dice.textContent = '2';
            break;
        case 3:
            dice.textContent = '3';
            break;
        case 4:
            dice.textContent = '4';
            break;
        case 5:
            dice.textContent = '5';
            break;
        case 6:
            dice.textContent = '6';
            break;
    }
    dice.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        dice.style.transform = 'rotate(0deg)';
    }, 300);
}

