const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsList.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectOption(li));
    optionsList.appendChild(li);
  });

  nextBtn.style.display = "none";
}

function selectOption(selectedLi) {
  const selectedAnswer = selectedLi.textContent;
  const correctAnswer = questions[currentQuestion].answer;

  const allOptions = optionsList.querySelectorAll("li");
  allOptions.forEach(li => li.classList.remove("selected"));
  selectedLi.classList.add("selected");

  nextBtn.style.display = "inline-block";

  if (selectedAnswer === correctAnswer) {
    selectedLi.dataset.correct = "true";
  } else {
    selectedLi.dataset.correct = "false";
  }
}

nextBtn.addEventListener("click", () => {
  const selected = optionsList.querySelector(".selected");
  if (!selected) return;

  if (selected.dataset.correct === "true") {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox = document.getElementById("quiz-box");
  quizBox.innerHTML = `<h2>You scored ${score} out of ${questions.length}!</h2>`;
}

loadQuestion();
