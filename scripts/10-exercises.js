const buttonElement = document.querySelector(".js-button");
// console.log(buttonElement.classList.contains("js-button"));

// 10d & 10e functions
function gamingButtonOnOff() {
  const gamingButtonElement = document.querySelector(".gaming-button");

  if (gamingButtonElement.classList.contains("is-toggled")) {
    gamingButtonElement.classList.remove("is-toggled");
  } else {
    gamingButtonElement.classList.add("is-toggled");
  }
}

function musicButtonOnOff() {
  const musicButtonElement = document.querySelector(".js-music-button");

  if (musicButtonElement.classList.contains("is-toggled")) {
    musicButtonElement.classList.remove("is-toggled");
  } else {
    musicButtonElement.classList.add("is-toggled");
  }
}

function techButtonOnOff() {
  const techButtonElement = document.querySelector(".js-tech-button");

  if (techButtonElement.classList.contains("is-toggled")) {
    techButtonElement.classList.remove("is-toggled");
  } else {
    techButtonElement.classList.add("is-toggled");
  }
}

// 10g functions
function gamingOneButtonOnOff() {
  const gamingButtonElement = document.querySelector(".js-gaming-button");
  const musicButtonElement = document.querySelector(".js-music-button");
  const techButtonElement = document.querySelector(".js-tech-button");

  if (gamingButtonElement.classList.contains("is-toggled")) {
    gamingButtonElement.classList.remove("is-toggled");
    techButtonElement.classList.remove("is-toggled");
    musicButtonElement.classList.remove("is-toggled");
  } else {
    gamingButtonElement.classList.add("is-toggled");
    techButtonElement.classList.remove("is-toggled");
    musicButtonElement.classList.remove("is-toggled");
  }
}

function musicOneButtonOnOff() {
  const gamingButtonElement = document.querySelector(".js-gaming-button");
  const musicButtonElement = document.querySelector(".js-music-button");
  const techButtonElement = document.querySelector(".js-tech-button");

  if (musicButtonElement.classList.contains("is-toggled")) {
    gamingButtonElement.classList.remove("is-toggled");
    techButtonElement.classList.remove("is-toggled");
    musicButtonElement.classList.remove("is-toggled");
  } else {
    musicButtonElement.classList.add("is-toggled");
    techButtonElement.classList.remove("is-toggled");
    gamingButtonElement.classList.remove("is-toggled");
  }
}

function techOneButtonOnOff() {
  const gamingButtonElement = document.querySelector(".js-gaming-button");
  const musicButtonElement = document.querySelector(".js-music-button");
  const techButtonElement = document.querySelector(".js-tech-button");

  if (techButtonElement.classList.contains("is-toggled")) {
    gamingButtonElement.classList.remove("is-toggled");
    techButtonElement.classList.remove("is-toggled");
    musicButtonElement.classList.remove("is-toggled");
  } else {
    techButtonElement.classList.add("is-toggled");
    gamingButtonElement.classList.remove("is-toggled");
    musicButtonElement.classList.remove("is-toggled");
  }
}

function testButton() {
  const buttonElement = document.querySelector(".js-button");
  const testElement = document.querySelector(".js-test");
  if (buttonElement.classList.contains("button")) {
    buttonElement.classList.remove("button");
    testElement.innerHTML = "the class is present";
  } else {
    buttonElement.classList.add("button");
    testElement.innerHTML = "";
  }
}

function calculateAmazonCost() {
  const inputCostElement = document.querySelector(".js-input");
  let cost = Number(inputCostElement.value);
  const showCostElement = document.querySelector(".js-cost");

  if (cost < 40 && cost > 0) {
    cost = (cost * 100 + 1000) / 100;
    showCostElement.innerHTML = `$${cost}`;
    showCostElement.classList.remove("cost-display");
  } else if (cost < 0) {
    showCostElement.innerHTML = `Error: cost cannot be less than $0`;
    showCostElement.classList.add("cost-display");
  }
}
