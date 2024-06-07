document.addEventListener("DOMContentLoaded", function() {
    generateProblems();
});

function generateProblems() {
    const problemsContainer = document.getElementById("problems");
    problemsContainer.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);

        const problemDiv = document.createElement("div");
        problemDiv.className = "problem";

        const problemText = document.createElement("span");
        problemText.textContent = `${num1} + ${num2} = `;

        const problemInput = document.createElement("input");
        problemInput.type = "number";
        problemInput.id = `answer${i}`;
        problemInput.dataset.correctAnswer = num1 + num2;

        problemDiv.appendChild(problemText);
        problemDiv.appendChild(problemInput);
        problemsContainer.appendChild(problemDiv);
    }
}

function checkAnswers() {
    let score = 0;

    for (let i = 0; i < 10; i++) {
        const input = document.getElementById(`answer${i}`);
        const userAnswer = parseInt(input.value, 10);
        const correctAnswer = parseInt(input.dataset.correctAnswer, 10);

        // Clear previous feedback
        input.style.backgroundColor = "";
        if (input.nextElementSibling) {
            input.nextElementSibling.remove();
        }

        if (userAnswer === correctAnswer) {
            score++;
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "lightcoral";
            const feedback = document.createElement("span");
            feedback.className = "feedback";
            feedback.textContent = ` Correct answer: ${correctAnswer}`;
            input.parentNode.appendChild(feedback);
        }
    }

    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `You scored ${score} out of 10!`;
}

function resetQuiz() {
    generateProblems();
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = "";
}

function goBack() {
    window.location.href = "index.html";
}