let score = JSON.parse(localStorage.getItem('score')) || {
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

let isAutoPlaying = false;
let intervalId;

const autoplayButtonElement = document.querySelector('.js-auto-play-button');

autoplayButtonElement.addEventListener('click', () => {
  autoPlay();
});

// pressing a on keyboard will play autoplay
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    autoPlay();
  }
});

function autoPlay() {
  const autoplayButtonElement = document.querySelector('.js-auto-play-button');

  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      pickGame(playerMove);
    }, 1000);

    autoplayButtonElement.innerHTML = `Stop Playing`;
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    autoplayButtonElement.innerHTML = `Auto Play`;
    isAutoPlaying = false;
  }
}

updateScoreElement();

const rockButtonElement = document.querySelector('.js-rock-button');
rockButtonElement.addEventListener('click', () => {
  pickGame('Rock');
});
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    pickGame('Rock');
  }
});

const paperButtonElement = document.querySelector('.js-paper-button');

paperButtonElement.addEventListener('click', () => {
  pickGame('Paper');
});

const scissorsButtonElement = document.querySelector('.js-scissors-button');
scissorsButtonElement.addEventListener('click', () => {
  pickGame('Scissors');
});

function pickGame(playerMove) {
  const computerHand = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
    if (computerHand === 'Rock') {
      result = 'You lose.';
    } else if (computerHand === 'Paper') {
      result = 'You win.';
    } else if (computerHand === 'Scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'Paper') {
    if (computerHand === 'Rock') {
      result = 'You win.';
    } else if (computerHand === 'Paper') {
      result = 'Tie.';
    } else if (computerHand === 'Scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'Rock') {
    if (computerHand === 'Rock') {
      result = 'Tie.';
    } else if (computerHand === 'Paper') {
      result = 'You lose.';
    } else if (computerHand === 'Scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins = score.wins + 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  // const score = JSON.stringify(score);
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove.toLowerCase()}-emoji.png" class="emoji-image">
      <img src="images/${computerHand.toLowerCase()}-emoji.png" class="emoji-image">
      Computer`;

  updateScoreElement();

  //       alert(`You picked ${playerMove}. Computer picked ${computerHand}. ${result}
  // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

const resetButtonElement = document.querySelector('.js-reset-score-button');

resetButtonElement.addEventListener('click', () => {
  displayResetMessage();
});

// pressing backspace will reset the score
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector('.js-moves').innerHTML = '';
    document.querySelector('.js-result').innerHTML = '';
  }
});

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerHand = '';

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerHand = 'Rock';
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerHand = 'Paper';
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerHand = 'Scissors';
  }

  return computerHand;
}

function displayResetMessage() {
  let resetMessageElement = document.querySelector(
    '.js-reset-score-confirmation'
  );

  resetMessageElement.innerHTML = `Are you sure you want to reset the score? <button class="js-yes-button">Yes</button> <button class="js-no-button">No</button>`;

  console.log(resetMessageElement.innerHTML);

  const yesButtonElement = document.querySelector('.js-yes-button');
  const noButtonElement = document.querySelector('.js-no-button');

  yesButtonElement.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector('.js-moves').innerHTML = '';
    document.querySelector('.js-result').innerHTML = '';
    resetMessageElement.innerHTML = '';
  });

  noButtonElement.addEventListener('click', () => {
    resetMessageElement.innerHTML = '';
  });
}
