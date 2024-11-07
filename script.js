let score = 0;
let timeLeft = 10;
let timer;
let isPlaying = false;

const square = document.getElementById("square");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("startButton");

function startGame() {
    if (isPlaying) return; // Empêche de redémarrer le jeu pendant qu'il est en cours
    
    isPlaying = true;
    score = 0;
    timeLeft = 20;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    square.style.display = "block";
    startButton.style.display = "none";

    // Démarrer le chronomètre
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    moveSquare(); // Positionner le carré au début du jeu
}

function moveSquare() {
    const containerWidth = document.body.clientWidth;
    const containerHeight = document.body.clientHeight;

    const x = Math.random() * (containerWidth - 50);
    const y = Math.random() * (containerHeight - 50);

    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
}

function increaseScore() {
    if (!isPlaying) return;

    score++;
    scoreDisplay.textContent = score;
    moveSquare(); // Déplace le carré après chaque clic
}

function endGame() {
    isPlaying = false;
    clearInterval(timer);
    square.style.display = "none";
    startButton.style.display = "block";
    alert(`Temps écoulé ! Votre score est de ${score} points.`);
}

// Événements
square.addEventListener("click", increaseScore);
startButton.addEventListener("click", startGame);