let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/* if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    } */

updateScoreElement();

function pickGame(playerMove) {
  const computerHand = pickComuterMove();

  let result = "";

  if (playerMove === "Scissors") {
    if (computerHand === "Rock") {
      result = "You lose.";
    } else if (computerHand === "Paper") {
      result = "You win.";
    } else if (computerHand === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (computerHand === "Rock") {
      result = "You win.";
    } else if (computerHand === "Paper") {
      result = "Tie.";
    } else if (computerHand === "Scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "Rock") {
    if (computerHand === "Rock") {
      result = "Tie.";
    } else if (computerHand === "Paper") {
      result = "You lose.";
    } else if (computerHand === "Scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins = score.wins + 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  // const score = JSON.stringify(score);
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
      <img src="images/${playerMove.toLowerCase()}-emoji.png" class="emoji-image">
      <img src="images/${computerHand.toLowerCase()}-emoji.png" class="emoji-image">
      Computer`;

  updateScoreElement();

  //       alert(`You picked ${playerMove}. Computer picked ${computerHand}. ${result}
  // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComuterMove() {
  const randomNumber = Math.random();

  let computerHand = "";

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerHand = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerHand = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerHand = "Scissors";
  }

  return computerHand;
}
