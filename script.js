// --- State Variables ---
let activeQuestions = [];
let currentBatchQuestions = [];
let currentIndex = 0;          // Index within current batch (0 to 49)
let batchStartIndex = 0;       // Starting index of batch (0, 50, 100...)
let score = 0;
let missedQuestions = [];
let userAnswers = {};

const BATCH_SIZE = 50;
const STORAGE_KEY = "exam_simulator_active_state_v1";

// --- Persistence Helpers ---

function getQuestionsHash(questionsList) {
  if (!questionsList || questionsList.length === 0) return "";
  // Fingerprint length + early question content to auto-detect updates in questions.js
  const sample = questionsList.slice(0, 5).map(q => q.q).join("");
  return `${questionsList.length}_${sample.length}_${sample.slice(0, 30)}`;
}

function saveQuizState() {
  if (!activeQuestions || activeQuestions.length === 0) return;

  const quizState = {
    questionsHash: getQuestionsHash(typeof originalQuestions !== "undefined" ? originalQuestions : []),
    activeQuestions: activeQuestions,
    batchStartIndex: batchStartIndex,
    currentIndex: currentIndex,
    score: score,
    missedQuestions: missedQuestions,
    userAnswers: userAnswers
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quizState));
    console.log("[Exam Storage] Saved progress successfully at question index:", batchStartIndex + currentIndex);
  } catch (err) {
    console.error("[Exam Storage] Error saving state:", err);
  }
}

function loadQuizState() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) {
    console.log("[Exam Storage] No saved session found.");
    return false;
  }

  try {
    const quizState = JSON.parse(savedData);

    // Auto-detect if originalQuestions changed in questions.js
    const currentHash = getQuestionsHash(typeof originalQuestions !== "undefined" ? originalQuestions : []);
    if (quizState.questionsHash && quizState.questionsHash !== currentHash) {
      console.log("[Exam Storage] Questions file updated. Clearing stale cache...");
      clearQuizState();
      return false;
    }

    if (!quizState.activeQuestions || quizState.activeQuestions.length === 0) {
      console.log("[Exam Storage] Saved data was empty or invalid.");
      return false;
    }

    activeQuestions = quizState.activeQuestions;
    batchStartIndex = quizState.batchStartIndex || 0;
    currentIndex = quizState.currentIndex || 0;
    score = quizState.score || 0;
    missedQuestions = quizState.missedQuestions || [];
    userAnswers = quizState.userAnswers || {};

    console.log("[Exam Storage] Restored session. Resuming at question index:", batchStartIndex + currentIndex);
    return true;
  } catch (err) {
    console.error("[Exam Storage] Failed to restore session:", err);
    return false;
  }
}

function clearQuizState() {
  localStorage.removeItem(STORAGE_KEY);
  console.log("[Exam Storage] Cleared saved session.");
}

// --- Utilities ---

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
      originalRef: { q: item.q, opts: item.opts, ans: item.ans }
    };
  });
}

// --- Quiz Core Logic ---

function startQuiz(questionsList, forceRestart = false) {
  if (!questionsList || questionsList.length === 0) {
    console.error("No questions found! Make sure questions.js is loaded properly.");
    return;
  }

  // Prevent restarting if progress already exists (unless forceRestart is true)
  if (!forceRestart && loadQuizState()) {
    console.log("[Exam Storage] Found valid existing session, resuming.");
    resumeQuizUI();
    return;
  }

  console.log("[Exam Storage] Starting fresh quiz session.");
  clearQuizState();

  activeQuestions = prepareQuestions(questionsList);
  batchStartIndex = 0;
  currentIndex = 0;
  score = 0;
  missedQuestions = [];
  userAnswers = {};

  saveQuizState();
  resumeQuizUI();
}

function resumeQuizUI() {
  document.getElementById("quiz-view").classList.remove("hidden");
  document.getElementById("checkpoint-view").classList.add("hidden");
  document.getElementById("results-view").classList.add("hidden");

  loadCurrentBatch();
}

function loadCurrentBatch() {
  currentBatchQuestions = activeQuestions.slice(batchStartIndex, batchStartIndex + BATCH_SIZE);

  document.getElementById("checkpoint-view").classList.add("hidden");
  document.getElementById("quiz-view").classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const warningEl = document.getElementById("warning-msg");
  if (warningEl) warningEl.classList.add("hidden");

  const absoluteIndex = batchStartIndex + currentIndex;
  const currentQ = currentBatchQuestions[currentIndex];

  if (!currentQ) return;

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
    if (!missedQuestions.some(m => m.q === currentQ.q)) {
      missedQuestions.push(currentQ.originalRef || currentQ);
    }
  }

  saveQuizState();
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

  if (userAnswers[absoluteIndex] === undefined) {
    const warningEl = document.getElementById("warning-msg");
    if (warningEl) warningEl.classList.remove("hidden");
    return;
  }

  if (currentIndex === currentBatchQuestions.length - 1) {
    const nextStartIndex = batchStartIndex + BATCH_SIZE;

    if (nextStartIndex < activeQuestions.length) {
      showCheckpointModal();
    } else {
      showResults();
    }
  } else {
    currentIndex++;
    saveQuizState();
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    saveQuizState();
    renderQuestion();
  } else if (batchStartIndex > 0) {
    batchStartIndex -= BATCH_SIZE;
    currentIndex = BATCH_SIZE - 1;
    saveQuizState();
    loadCurrentBatch();
  }
}

// --- Reset Quiz Logic ---

function confirmResetQuiz() {
  const isConfirmed = confirm(
    "Are you sure you want to reset your quiz? All progress will be cleared and the latest questions will load."
  );

  if (isConfirmed) {
    resetQuiz();
  }
}

function resetQuiz() {
  clearQuizState();

  if (typeof originalQuestions !== "undefined" && originalQuestions.length > 0) {
    startQuiz(originalQuestions, true);
    console.log("[Exam Storage] Quiz reset manually with fresh questions.");
  } else {
    console.error("originalQuestions is missing. Reloading window...");
    window.location.reload();
  }
}

// --- Checkpoint & Results Logic ---

function showCheckpointModal() {
  document.getElementById("quiz-view").classList.add("hidden");
  document.getElementById("checkpoint-view").classList.remove("hidden");

  const completedCount = batchStartIndex + currentBatchQuestions.length;
  document.getElementById("checkpoint-text").innerText = 
    `You finished Set ${Math.ceil(completedCount / BATCH_SIZE)} (${completedCount} of ${activeQuestions.length} questions)! Choose if you want to proceed or retry these 50 questions.`;
}

function continueToNextBatch() {
  batchStartIndex += BATCH_SIZE;
  currentIndex = 0;
  saveQuizState();
  loadCurrentBatch();
}

function repeatCurrentBatch() {
  for (let i = 0; i < currentBatchQuestions.length; i++) {
    const absoluteIdx = batchStartIndex + i;
    if (userAnswers[absoluteIdx] !== undefined) {
      const q = currentBatchQuestions[i];
      if (userAnswers[absoluteIdx] === q.ans) {
        score--;
      }
      delete userAnswers[absoluteIdx];
    }
  }
  currentIndex = 0;
  saveQuizState();
  loadCurrentBatch();
}

function showResults() {
  clearQuizState();

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
  startQuiz(missedQuestions, true);
}

function restartFullQuiz() {
  if (typeof originalQuestions !== "undefined") {
    startQuiz(originalQuestions, true);
  }
}

// --- Initialization ---

window.addEventListener("DOMContentLoaded", () => {
  const restored = loadQuizState();

  if (restored) {
    resumeQuizUI();
  } else if (typeof originalQuestions !== "undefined") {
    startQuiz(originalQuestions, false);
  } else {
    console.error("originalQuestions array is not defined. Ensure questions.js is loaded first.");
  }
});
