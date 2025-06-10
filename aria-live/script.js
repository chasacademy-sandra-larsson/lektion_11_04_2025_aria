let dif = 0;
let ifk = 0;
const liveScore = document.getElementById("live-score");

function updateScore() {
    const event = Math.floor(Math.random() * 3);
    if (event === 1) dif++;
    else if (event === 2) ifk++;

    liveScore.textContent = `Djurgården - IFK Norrköping ${dif} - ${ifk}`;

    const next = Math.floor(Math.random() * 3000) + 2000;
    setTimeout(updateScore, next);
}

 // Starta simuleringen
 setTimeout(updateScore, 2000);