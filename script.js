let activeQuestions = [];
let currentBatchQuestions = [];
let currentIndex = 0;          // Index within current batch (0 to 49)
let batchStartIndex = 0;       // Starting index of batch (0, 50, 100...)
let score = 0;
let missedQuestions = [];
let userAnswers = {};

const BATCH_SIZE = 50;

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
  // Check if originalQuestions or provided list exists
  if (!questionsList || questionsList.length === 0) {
    console.error("No questions found! Make sure questions.js is loaded properly.");
    return;
  }

  activeQuestions = prepareQuestions(questionsList);
  batchStartIndex = 0;
  score = 0;
  missedQuestions = [];
  userAnswers = {};

  document.getElementById("quiz-view").classList.remove("hidden");
  document.getElementById("checkpoint-view").classList.add("hidden");
  document.getElementById("results-view").classList.add("hidden");

  loadCurrentBatch();
}

function loadCurrentBatch() {
  currentBatchQuestions = activeQuestions.slice(batchStartIndex, batchStartIndex + BATCH_SIZE);
  currentIndex = 0;

  document.getElementById("checkpoint-view").classList.add("hidden");
  document.getElementById("quiz-view").classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  // Hide warning box on new question load
  const warningEl = document.getElementById("warning-msg");
  if (warningEl) warningEl.classList.add("hidden");

  const absoluteIndex = batchStartIndex + currentIndex;
  const currentQ = currentBatchQuestions[currentIndex];

  if (!currentQ) return;

  // Update progress & stats
  document.getElementById("progress-bar").style.width = `${((absoluteIndex) / activeQuestions.length) * 100}%`;
  document.getElementById("question-counter").innerText = `Question ${absoluteIndex + 1} of ${activeQuestions.length}`;
  document.getElementById("score-counter").innerText = `Score: ${score}`;

  document.getElementById("question-text").innerText = currentQ.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  const optionLabels = ["A", "B", "C", "D"];
  const previousSelection = userAnswers[absoluteIndex];

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
  const absoluteIndex = batchStartIndex + currentIndex;
  if (userAnswers[absoluteIndex] !== undefined) return;

  const warningEl = document.getElementById("warning-msg");
  if (warningEl) warningEl.classList.add("hidden");

  userAnswers[absoluteIndex] = selectedIndex;
  const currentQ = currentBatchQuestions[currentIndex];

  if (selectedIndex === currentQ.ans) {
    score++;
  } else {
    if (!missedQuestions.includes(currentQ.originalRef)) {
      missedQuestions.push(currentQ.originalRef);
    }
  }

  renderQuestion();
}

function updateNavigation() {
  document.getElementById("prev-btn").disabled = (batchStartIndex + currentIndex) === 0;

  const nextBtn = document.getElementById("next-btn");
  const absoluteIndex = batchStartIndex + currentIndex;

  if (absoluteIndex === activeQuestions.length - 1) {
    nextBtn.innerText = "Finish Quiz";
  } else {
    nextBtn.innerText = "Next";
  }
}

function nextQuestion() {
  const absoluteIndex = batchStartIndex + currentIndex;

  // Block progression if unanswered
  if (userAnswers[absoluteIndex] === undefined) {
    const warningEl = document.getElementById("warning-msg");
    if (warningEl) warningEl.classList.remove("hidden");
    return;
  }

  // If user reaches end of current 50-question batch
  if (currentIndex === currentBatchQuestions.length - 1) {
    const nextStartIndex = batchStartIndex + BATCH_SIZE;

    if (nextStartIndex < activeQuestions.length) {
      showCheckpointModal();
    } else {
      showResults();
    }
  } else {
    currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  } else if (batchStartIndex > 0) {
    batchStartIndex -= BATCH_SIZE;
    currentIndex = BATCH_SIZE - 1;
    loadCurrentBatch();
  }
}

function showCheckpointModal() {
  document.getElementById("quiz-view").classList.add("hidden");
  document.getElementById("checkpoint-view").classList.remove("hidden");

  const completedCount = batchStartIndex + currentBatchQuestions.length;
  document.getElementById("checkpoint-text").innerText = 
    `You finished Set ${Math.ceil(completedCount / BATCH_SIZE)} (${completedCount} of ${activeQuestions.length} questions)! Choose if you want to proceed or retry these 50 questions.`;
}

function continueToNextBatch() {
  batchStartIndex += BATCH_SIZE;
  loadCurrentBatch();
}

function repeatCurrentBatch() {
  // Reset user answers for the current set of 50
  for (let i = 0; i < currentBatchQuestions.length; i++) {
    delete userAnswers[batchStartIndex + i];
  }
  loadCurrentBatch();
}

function showResults() {
  document.getElementById("quiz-view").classList.add("hidden");
  document.getElementById("checkpoint-view").classList.add("hidden");
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
  if (typeof originalQuestions !== "undefined") {
    startQuiz(originalQuestions);
  }
}

// Automatically start quiz on window load
window.onload = () => {
  if (typeof originalQuestions !== "undefined") {
    startQuiz(originalQuestions);
  } else {
    console.error("originalQuestions array is not defined. Ensure questions.js is loaded first.");
  }
};
