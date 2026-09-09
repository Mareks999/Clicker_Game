let score = 0;

const truck = document.getElementById("truck");
const scoreDisplay = document.getElementById("score");

const settingsButton = document.getElementById("settingsButton");
const settingsMenu = document.getElementById("settingsMenu");
const closeSettings = document.getElementById("closeSettings");
const resetButton = document.getElementById("resetButton");



truck.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
});



settingsButton.addEventListener("click", function() {
    settingsMenu.style.display = "flex";
});



closeSettings.addEventListener("click", function() {
    settingsMenu.style.display = "none";
});



resetButton.addEventListener("click", function() {
    score = 0;
    scoreDisplay.textContent = score;
});
