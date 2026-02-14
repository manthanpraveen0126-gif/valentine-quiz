const quizQuestions = [
    {
        q: "Which month did I see you first?",
        options: ["June", "August", "March", "July"],
        answer: 1
    },
    {
        q: "What was the first text I sent to you?",
        options: ["yoo", "hey how you doing", "heyyyyy", "hi whats up"],
        answer: 2
    },
    {
        q: "What was the first compliment I gave you?",
        options: [
            "you look pretty",
            "I love your confidence",
            "your pfp is lit",
            "you smell good"
        ],
        answer: 3
    },
    {
        q: "When did we first go on a date?",
        options: [
            "December 19th",
            "December 26th",
            "November 17th",
            "December 20th"
        ],
        answer: 4
    },
    {
        q: "What's one thing I tell you very often?",
        options: [
            "I miss you",
            "I love you",
            "You're cute",
            "All of the above"
        ],
        answer: 4
    }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
    if (currentQ >= quizQuestions.length) {
        showResult();
        return;
    }

    const qBox = document.getElementById("question");
    const opts = document.getElementById("options");

    qBox.textContent = quizQuestions[currentQ].q;
    opts.innerHTML = "";

    quizQuestions[currentQ].options.forEach((optText, i) => {
        const btn = document.createElement("button");
        btn.innerHTML = `${i + 1}. ${optText}`;
        btn.onclick = () => checkAnswer(i + 1);
        opts.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correctAnswer = quizQuestions[currentQ].answer;

    if (selected === correctAnswer) {
        score++;
        alert("Correct.");
    } else {
        alert("Wrong.");
    }

    currentQ++;
    loadQuestion();
}

function showResult() {
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    const scoreText = document.getElementById("score");

    if (score === quizQuestions.length) {
        scoreText.innerHTML = `
            ${score} / ${quizQuestions.length}<br><br>
            Perfect score. Happy Valentine's Day.
        `;
    } else if (score >= 3) {
        scoreText.innerHTML = `
            ${score} / ${quizQuestions.length}<br><br>
            Not bad at all.
        `;
    } else {
        scoreText.innerHTML = `
            ${score} / ${quizQuestions.length}<br><br>
            We need another date soon.
        `;
    }
}

function restartQuiz() {
    currentQ = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("questionBox").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();
