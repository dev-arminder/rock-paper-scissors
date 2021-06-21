const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const user_select = document.getElementById("user_select");
const computer_select = document.getElementById("computer_select");
const resetScore = document.getElementById("reset-score");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");
const choices = ["paper", "rock", "scissors"];
const winner = document.getElementById("win");

let userChoice = undefined;
let score = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    checkWinner();
  });
});

reset.addEventListener("click", () => {
  //Show the main and hide the selection
  main.style.display = "flex";
  selection.style.display = "none";
});
//reset your score
resetScore.addEventListener("click", () => {
  score = 0;
  updateScore(0);
});

//reset your score
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

function checkWinner() {
  const computerChoice = pickRandomChoice();

  // updateView
  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (userChoice === computerChoice) {
    winner.innerText = "draw";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    updateScore(1);
    winner.innerText = "win";
  } else {
    updateScore(-1);
    winner.innerText = "Lost";
  }
  //Show the selection and hide the main
  main.style.display = "none";
  selection.style.display = "flex";
}

function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
  //class reset
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");

  selectionEl.classList.add(`btn-${choice}`);
  const img = selectionEl.querySelector("img");
  img.src = `./images/icon-${choice}.svg`;
  img.alt = `${choice}`;
}
