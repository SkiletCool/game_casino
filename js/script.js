let balance = 1000;

function spin() {
    const cost = 50;
    if (balance < cost) {
        document.getElementById('result').textContent = "Not enough balance!";
        return;
    }

    const symbols = ['🍒', '🍋', '🍊', '🔔', '💎'];
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');
    const result = document.getElementById('result');
    const balanceDisplay = document.getElementById('balance');

    balance -= cost;

    const random1 = symbols[Math.floor(Math.random() * symbols.length)];
    const random2 = symbols[Math.floor(Math.random() * symbols.length)];
    const random3 = symbols[Math.floor(Math.random() * symbols.length)];

    slot1.textContent = random1;
    slot2.textContent = random2;
    slot3.textContent = random3;

    if (random1 === random2 && random2 === random3) {
        result.textContent = "🎉 Jackpot! 🎉";
        balance += 5000;
    } else if (random1 === random2 || random2 === random3 || random1 === random3) {
        result.textContent = "Two of a kind! You win $100!";
        balance += 100;
    } else {
        result.textContent = "Try Again!";
    }

    balanceDisplay.textContent = balance;
}