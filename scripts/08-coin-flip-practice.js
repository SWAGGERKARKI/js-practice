const objResult = JSON.parse(localStorage.getItem("result")) || {
  wins: 0,
  losess: 0,
};

function coinFlip(playerMove) {
  let computerMove = Math.random();
  console.log(computerMove);

  if (computerMove < 0.5) {
    computerMove = "head";
  } else {
    computerMove = "tail";
  }

  let result = "";
  if (playerMove === computerMove) {
    result = "You Win.";
  } else {
    result = "You lose.";
  }

  if (result === "You Win.") {
    objResult.wins++;
  } else if (result === "You lose.") {
    objResult.losess++;
  }

  const jsonResult = JSON.stringify(objResult);
  localStorage.setItem("result", jsonResult);

  alert(`
${result}
Total: wins: ${objResult.wins}, losess: ${objResult.losess}
  `);

  document.querySelector(".js-moves").innerHTML = `${result}`;

  document.querySelector(
    ".js-result"
  ).innerHTML = `Total:- wins: ${objResult.wins}, losess: ${objResult.losess}`;
}

// console.log(coinFilp("head"));

function resetScore() {
  objResult.wins = 0;
  objResult.losess = 0;
  localStorage.removeItem("result");

  alert(`
Reset button is pressed
Total: wins: ${objResult.wins}, losess: ${objResult.losess}
  `);

  document.querySelector(".js-moves").innerHTML = `Reseting Score`;

  document.querySelector(
    ".js-result"
  ).innerHTML = `Total:- wins: ${objResult.wins}, losess: ${objResult.losess}`;
}

objTest = {
  name: "Hero",
  age: 40,
};

console.log(objTest);

const jsonTest = JSON.stringify(objTest);
console.log(jsonTest);

localStorage.setItem("test", jsonTest);

const testParse = JSON.parse(localStorage.getItem("test"));
console.log(testParse);

localStorage.removeItem("test");
console.log(testParse);
console.log(jsonTest);
