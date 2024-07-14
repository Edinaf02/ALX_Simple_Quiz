// Get the submit button element
const submitButton = document.getElementById("submit-answer");

// Add click event listener to the submit button
submitButton.addEventListener("click", function() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswer) {
        // Check if the selected answer is correct
        if (userAnswer.value === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
});
