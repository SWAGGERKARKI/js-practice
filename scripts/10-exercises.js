const buttonElement = document.querySelector(".js-button");
// console.log(buttonElement.classList.contains("js-button"));

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
