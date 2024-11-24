
// Function to print high scores
function printHighscores() {
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Sort highscores by score in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    let olEl = document.getElementById("highscores");

    if (highscores.length === 0) {
        olEl.textContent = "No high scores yet!";
    } else {
        highscores.forEach(function (score) {
            let liTag = document.createElement("li");
            liTag.textContent = (score.name || "Anonymous") + " - " + score.score;
            olEl.appendChild(liTag);
        });
    }
}

// Function to clear high scores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// Set up event listeners
document.getElementById("clear").addEventListener("click", clearHighscores);

// Print the high scores when the page loads
printHighscores();


setInterval(firstFunction, 2000);
function firstFunction() {
    let d = new Date();
}
firstFunction();
