document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const scoreInput = document.getElementById("score-input");
    const gradeElement = document.getElementById("grade");
    const goodAudio = document.getElementById("good-audio");

    calculateButton.addEventListener("click", function () {
        const score = parseInt(scoreInput.value);

        if (isNaN(score)) {
            gradeElement.textContent = "Please enter a valid score.";
            return;
        }

        if (score <= 100 && score >= 70) {
            gradeElement.textContent = "A";
            goodAudio.play();
        } else if (score <= 69 && score >= 60) {
            gradeElement.textContent = "B";
        } else if (score <= 59 && score >= 50) {
            gradeElement.textContent = "C";
        } else if (score <= 49 && score >= 40) {
            gradeElement.textContent = "D";
        } else if (score <= 39 && score >= 0) {
            gradeElement.textContent = "F";
        } else if (score < 0) {
            gradeElement.textContent = "Invalid Score";
        } else if (score >= 101) {
            gradeElement.textContent = "Invalid Score";
        } 
    });
});