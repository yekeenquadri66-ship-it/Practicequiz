let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let missedQuestions = [];
let userAnswers = {};

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareQuestions(questionsList) {
  const shuffledQuestions = shuffleArray(questionsList);
  return shuffledQuestions.map(item => {
    const correctText = item.opts[item.ans];
    const shuffledOpts = shuffleArray(item.opts);
    const newAnsIndex = shuffledOpts.indexOf(correctText);
    return {
      q: item.q,
      opts: shuffledOpts,
      ans: newAnsIndex,
      originalRef: item
    };
  });
}

function startQuiz(questionsList) {
  activeQuestions = prepareQuestions(questionsList);
  currentIndex = 0;
  score = 0;
  missedQuestions = [];
  userAnswers = {};

  document.getElementById("quiz-view").classList.remove("hidden");
  document.getElementById("results-view").classList.add("hidden");
  renderQuestion();
}

function updateNavigation() {
  document.getElementById("prev-btn").disabled = currentIndex === 0;

  const nextBtn = document.getElementById("next-btn");
  if (currentIndex === activeQuestions.length - 1) {
    nextBtn.innerText = "Finish Quiz";
  } else {
    nextBtn.innerText = "Next";
  }
}

function renderQuestion() {
  // Hide warning box when rendering new question
  const warningEl = document.getElementById("warning-msg");
  if (warningEl) warningEl.classList.add("hidden");

  const currentQ = activeQuestions[currentIndex];

  document.getElementById("progress-bar").style.width = `${((currentIndex) / activeQuestions.length) * 100}%`;
  document.getElementById("question-counter").innerText = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
  document.getElementById("score-counter").innerText = `Score: ${score}`;

  document.getElementById("question-text").innerText = currentQ.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  const optionLabels = ["A", "B", "C", "D"];
  const previousSelection = userAnswers[currentIndex];

  currentQ.opts.forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    
    btn.innerHTML = `<span class="option-prefix">${optionLabels[index]}.</span><span class="option-text">${optText}</span>`;

    btn.addEventListener("click", () => selectOption(index));

    if (previousSelection !== undefined) {
      btn.disabled = true;

      if (index === currentQ.ans) {
        btn.classList.add("correct");
      }

      if (index === previousSelection && index !== currentQ.ans) {
        btn.classList.add("incorrect");
      }
    }

    optionsContainer.appendChild(btn);
  });

  updateNavigation();
}

function selectOption(selectedIndex) {
  if (userAnswers[currentIndex] !== undefined) return;

  // Hide warning box on selection
  const warningEl = document.getElementById("warning-msg");
  if (warningEl) warningEl.classList.add("hidden");

  userAnswers[currentIndex] = selectedIndex;
  const currentQ = activeQuestions[currentIndex];

  if (selectedIndex === currentQ.ans) {
    score++;
  } else {
    if (!missedQuestions.includes(currentQ.originalRef)) {
      missedQuestions.push(currentQ.originalRef);
    }
  }

  renderQuestion();
}

function nextQuestion() {
  // Show in-app warning banner if unanswered
  if (userAnswers[currentIndex] === undefined) {
    const warningEl = document.getElementById("warning-msg");
    if (warningEl) {
      warningEl.classList.remove("hidden");
    }
    return;
  }

  if (currentIndex < activeQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function showResults() {
  document.getElementById("quiz-view").classList.add("hidden");
  document.getElementById("results-view").classList.remove("hidden");

  const percentage = Math.round((score / activeQuestions.length) * 100);
  document.getElementById("final-score").innerText = `${percentage}%`;
  document.getElementById("results-summary").innerText = `You answered ${score} out of ${activeQuestions.length} questions correctly.`;

  const retryBtn = document.getElementById("retry-missed-btn");
  if (missedQuestions.length === 0) {
    retryBtn.classList.add("hidden");
  } else {
    retryBtn.classList.remove("hidden");
    retryBtn.innerText = `Retry ${missedQuestions.length} Missed Question${missedQuestions.length > 1 ? 's' : ''}`;
  }
}

function retryMissedQuestions() {
  startQuiz(missedQuestions);
}

function restartFullQuiz() {
  startQuiz(originalQuestions);
}

window.onload = () => {
  startQuiz(originalQuestions);
};


