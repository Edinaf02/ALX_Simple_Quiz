// Define the checkAnswer function
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected answer from the radio buttons
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswerElement) {
        // Extract the value of the selected answer
        const userAnswer = userAnswerElement.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            // If correct, display "Correct! Well done."
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // If incorrect, display "That's incorrect. Try again!"
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to select an answer
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
